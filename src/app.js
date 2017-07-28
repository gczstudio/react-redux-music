
import React,{Component} from 'react'
import { Provider } from 'react-redux'
import configureStore from './stores/index'
import './sass/common.scss'
import './sass/app.scss'
import './sass/font-awesome/font-awesome.scss'
const store = configureStore()
export default class App extends Component{

	render(){
		return (
			<Provider store={store}>
        		<div className = "app_container">
				
					<div className = "app_content">
						{this.props.children}
					</div>
					

				</div>
      		</Provider>
			
		)
	}

}

