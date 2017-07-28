
import React,{Component} from 'react'
import { Link,browserHistory } from 'react-router'
import '../sass/search.scss'
import Nav from '../components/common/nav'
export default class Search extends Component{

	render(){
		return (
			<div className="search_container">
				<div className="search_header">
					<span onClick={()=>browserHistory.goBack()}>返回</span>
					<input placeholder='搜索音乐' />
					<span>搜索</span>
				</div>
				<Nav />
			</div>
		)
	}

}
