
import React,{Component, PropTypes} from 'react'
import {Link} from 'react-router'
import { connect } from 'react-redux'
import Beat from '../components/music/beat'
import Search from '../components/music/search'
import {handleChangeTab} from '../actions/home'
import Nav from '../components/common/nav'


import '../sass/home.scss'

 class Home extends Component{
	constructor(props) {
	    super(props);
    }

    
	render(){
		const { index, dispatch} = this.props;
		return (
			<div className="home_container">
				<div className="home_header">
					<Link to='/search'><Search /></Link>
					<Beat />
				</div>

				<div className="home_tab">
					<ul>
						<li onClick={()=>dispatch(handleChangeTab(0))}><Link to="/home/recommend">个性推荐</Link></li>
						<li onClick={()=>dispatch(handleChangeTab(1))}><Link to="/home/musicList">歌单</Link></li>
						<li onClick={()=>dispatch(handleChangeTab(2))}><Link to="/home/anchorStation">主播电台</Link></li>
						<li onClick={()=>dispatch(handleChangeTab(3))}><Link to="/home/rankingList">排行榜</Link></li>
					</ul>
					<div className="line" style = {{transform: `translate(${index}00%)`,transition: 'all .5s'}}></div>
				</div>

				<div className="home_content">
					{this.props.children}
				</div>
				<Nav />
			</div>
		)
	}

}

Home.propTypes = {
	index: PropTypes.number.isRequired,
}

export default connect(
	state=>({
		index: state.home.handleChangeTab,
	})
)(Home);


