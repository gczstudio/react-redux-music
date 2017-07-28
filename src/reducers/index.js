import { combineReducers } from 'redux'
import home from './home'
import recommend from './recommend'
import ablum from './ablum'



const rootReducer = combineReducers({
  home,
  recommend,
  ablum
})

export default rootReducer