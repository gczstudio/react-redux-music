
import React,{Component} from 'react'

export default class Search extends Component{

	render(){
		return (
			<input placeholder='搜索音乐' style={styles.search} />
		)
	}

}

const  styles = {
  search:{
    width:'80%',
    borderRadius:'10px',
    border:'.1rem solid #fff',
    height:'20px',
    paddingLeft:'10px',
    color:'#333'
  }
}
