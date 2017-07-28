
function ablum(state={},action){
	switch (action.type){
 		case 'ABLUM' :
 			return action.obj
 		default:
 			return state;
 	}
}


export default ablum
