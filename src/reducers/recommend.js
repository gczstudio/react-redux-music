import { combineReducers } from 'redux'


function banner(state={},action){
	switch (action.type){
 		case 'BANNER' :
 			return action.obj
 		default:
 			return state;
 	}
}

function recommendList(state={},action){
	switch (action.type){
 		case 'RECOMMENDLIST' :
 			return action.obj
 		default:
 			return state;
 	}
}


const rootReducer = combineReducers({
  banner,
  recommendList
})

export default rootReducer
