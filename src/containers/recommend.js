
import React,{Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import SimpleSlider from '../components/common/slide'
import {getBannerData, getRecommendListData} from '../actions/recommend'
import RecommendList from '../components/music/recommendList'
import Nav from '../components/common/nav'

class Recommend extends Component{

	componentWillMount(){
		const {dispatch} = this.props
		dispatch(getBannerData())
		dispatch(getRecommendListData())
	}

	render(){
		const {banners,recommendList} = this.props;
		console.log(recommendList)
		return (
			<div className="recommend_container">
				<SimpleSlider banners = {banners} />
				<RecommendList recommendList = {recommendList}/>
				<Nav />
			</div>
		)
	}

}


// Recommend.propTypes = {
// 	banners: PropTypes.Array.isRequired,
// }

export default connect(
	state=>({
		banners: state.recommend.banner.banners,
		recommendList: state.recommend.recommendList.result
	})
)(Recommend);




