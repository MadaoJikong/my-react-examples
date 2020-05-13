import { combineReducers } from 'redux'
import homeReducer from '../pages/home/store'
import aboutReducer from '../pages/about/store'

export default combineReducers({
    home: homeReducer,
    about: aboutReducer
});