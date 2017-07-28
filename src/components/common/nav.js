
import React,{Component} from 'react'
import {Link} from 'react-router'
import '../../sass/nav.scss'
export default class Nav extends Component{

	render(){
		return (
			<div className="app_footer">	
				<Link to="/home">发现音乐</Link>
				<Link to="/music">我的音乐</Link>
				<Link to="/friend">朋友</Link>
				<Link to="/account">账号</Link>
			</div>
		)
	}

}
