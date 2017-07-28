var path = require('path');
const webpack = require('webpack');
//生成html
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanPlugin = require("clean-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
//获取环境
const env = process.env.NODE_ENV;
module.exports = {
  entry: {
      main: './src/index.js',
      // vendor: 'moment'
  },
  output: {
    // filename: '[chunkhash].[name].js',
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  module: {
    rules: [
       // 处理jsx语法和ES6语法
      {
        test: /\.js$/, //用babel编译jsx和es6
        exclude: /node_modules/, 
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
          presets: ['es2015', 'react','stage-0','stage-1','stage-2','stage-3'],
          plugins: [
              ["transform-object-rest-spread"],
              ["transform-runtime"]
          ]
        }
      },
      //加载css
      {
        test: /\.css$/,
        use: [
          {
           loader: "style-loader"
          },
          {
           loader: "css-loader",
           options: {
             modules: true
            }
          }
        ]
        // use: ExtractTextPlugin.extract({
        //   fallback: "style-loader",
        //   use: "css-loader",
        //   publicPath: "/dist"
        // })
      },
      //加载less
      {
        test: /\.less$/,
        use: [
          "style-loader",
          "css-loader",
          "less-loader"
        ]
      },
      //加载sass
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      },
      //加载图片
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        loader: 'url-loader?limit=25000' //问号代表可以给加载器传参数,图片大小大于这个值，就是路径，
        //小于就是Base64 25000bit==3kb 1kb = 1024b 1b = 8bit 
      },
      {
        //当我们需要读取json格式文件时，我们不再需要安装任何loader，webpack2中将会内置 json-loader，自动支持json格式的读取（喜大普奔啊）。
        test: /\.json$/, //获取json数据的loader
        loader: 'json-loader'
      },
    ]
  },
  resolve: {
        //注意一下, extensions webpack2第一个不是空字符串! 对应不需要后缀的情况.
        extensions: ['.js', '.json', '.sass', '.scss', '.less', 'jsx', '.vue'],
  },

  plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.html",
        minify: { //压缩HTML文件
            removeComments: true, //移除HTML中的注释
            collapseWhitespace: false //删除空白符与换行符
        }

      }), 
      // // 每次运行webpack清理上一次的文件夹
      // new CleanPlugin(['./dist']),
      // // 压缩混淆JS插件,UglifyJsPlugin 将不再支持让 Loaders 最小化文件的模式。debug 选项已经被移除。Loaders 不能从 webpack 的配置中读取到他们的配置项。
      // new webpack.optimize.UglifyJsPlugin({
      //     compress: {
      //         warnings: false,
      //         drop_console: true
      //     },
      //     comments: false,
      //     beautify: false,
      //     sourceMap: false
      // }),
      // //分离css
      // new ExtractTextPlugin({
      //   filename: "bundle.css",
      //   disable: false,
      //   allChunks: true
      // }),
      // new webpack.optimize.CommonsChunkPlugin({
      //     names: ['vendor', 'manifest'] // 指定公共 bundle 的名字。
      // })
      

  ],
  devServer: {
    contentBase: "./src",//本地服务器所加载的页面所在的目录
    historyApiFallback: true,//不跳转
    inline: true,//实时刷新
    host: '192.168.42.180',
    port:3000
  }
};