
import React,{Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import Header from '../components/common/header'
import {header} from '../actions/home'
import Nav from '../components/common/nav'
class Friend extends Component{

	render(){
		const {title, dispatch} = this.props;
		dispatch(header('朋友'));
		return (
			<div>
				<Header title={title}/>
				<Nav />
			</div>
		)
	}

}

Friend.propTypes = {
	title: PropTypes.string.isRequired
}

export default connect(
	state=>({
		title: state.home.header,
	})
)(Friend);
