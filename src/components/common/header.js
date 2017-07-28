
import React,{Component} from 'react'
import {browserHistory } from 'react-router'
import Beat from '../music/beat'

export default class Header extends Component{
	
	render(){
		const {title} = this.props;
		return (
			<div style={styles.header}>
				<span onClick={()=>browserHistory.goBack()} style={styles.back}>返回</span>
				{title}
				<Beat/>
			</div>
		)
	}

}

const styles = {
	header: {
		height: '40px',
	    backgroundColor: '#CE3D3E',
	    lineHeight: '40px',
	    textAlign: 'center',
	    color: '#fff',
	    fontSize: '16px',
	    padding: '0 10px'

	},
	back:{
		float: 'left',
		fontSize: '14px'
	}
}
