
import React,{Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

import getAblumData from '../actions/ablum'
import Header from '../components/common/header'
import Nav from '../components/common/nav'

import '../sass/ablum.scss'

 class Ablum extends Component{
	

	

	componentWillMount(){
		const id = this.props.params.id;
		const {dispatch} = this.props;
		dispatch(getAblumData(id));
	}

	render(){
		const {playlist} = this.props
		if(!playlist) return false;
		return (
			<div>
				<Header title='歌单'/>
				<div className="introduce">
					<img src={playlist.coverImgUrl} alt=""/>
					<p>{playlist.name}</p>
				</div>
				<ul className='ablumList'>
					{
						playlist.tracks.map((item,index)=><AblumList {...item} key={item.id}  index={index+1}/>)
					}
				</ul>
				<Nav />
			</div>
		)
	}

}


class AblumList extends Component{

	goPlay = (id)=>{
		browserHistory.push('/play')
	}

	render(){
		return (
			<li onClick={()=>this.goPlay(this.props.id)}>
				<p><span>{this.props.index}</span>{this.props.name}</p>	
			</li>
		)
	}
}


export default connect(
	state=>({
		playlist: state.ablum.playlist
	})
)(Ablum);


