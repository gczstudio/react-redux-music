import { combineReducers } from 'redux'

function handleChangeTab(state = 0,action){
	switch (action.type){
 		case 'HANDLECHANGETAB' :
 			return action.index
 		default:
 			return state;
 	}
}



function header(state = '我的音乐',action){
	switch (action.type){
 		case 'HEADER' :
 			return action.title
 		default:
 			return state;
 	}
}

const rootReducer = combineReducers({
  handleChangeTab,
  header
})

export default rootReducer

