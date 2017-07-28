
import React,{Component} from 'react'
import { browserHistory } from 'react-router';
import '../../sass/recommendList.scss'
export default class RecommendList extends Component{
	
	goAblum=(id)=>{
		browserHistory.push('/ablum/'+id);
	}

	render(){
		const {recommendList} = this.props;
		console.log(recommendList)
		if(!recommendList) return false;
		return (
			<div className="rl_container">
				<div className="cl_header">
					<h3><i className="fa fa-calendar-o"></i><span>推荐歌单</span></h3>
				</div>
				<div className="cl_content">
					<ul>
						{
							recommendList.map((item) => (
								<li onClick={()=>this.goAblum(item.id)} key={item.id}>
									<img src={item.picUrl} alt=""/>
									<p>{item.name}</p>
								</li>

							))
						}
					</ul>
				</div>

			</div>
		)
	}

}

