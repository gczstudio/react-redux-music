
import React,{Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import Header from '../components/common/header'
import {header} from '../actions/home'
import Nav from '../components/common/nav'
class Account extends Component{

	render(){
		const {title, dispatch} = this.props;
		dispatch(header('账号'));
		return (
			<div>
				<Header title={title}/>
				<Nav />
			</div>
		)
	}

}

Account.propTypes = {
	title: PropTypes.string.isRequired
}

export default connect(
	state=>({
		title: state.home.header,
	})
)(Account);
