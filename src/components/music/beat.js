
import React,{Component} from 'react'
import '../../sass/beat.scss'
export default class Beat extends Component{

	render(){
		return (
			<div className={ this.props.beat ? 'beat t' : 'beat' } style={style.beat}>
	          <div></div>
	          <div></div>
	          <div></div>
	          <div></div>
	        </div>
		)
	}

}

const style = {
	beat:{
		float:'right',
		marginTop: '5px'
	}
}
