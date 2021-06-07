import { combineReducers } from 'redux'
import { login, LOGIN, SIGNUP, UPDATE_EMAIL, UPDATE_PASSWORD} from '../actions/user'

const user = (state = {}, action) => {
	switch (action.type) {
		case 'GET_NEWS':
			console.log("Reducer action : fetch news ")
        	return { ...state, loading: true };
		case 'NEWS_RECEIVED':
			console.log("Reducer action : news received " + action.json[0].title)
        	return { ...state, news: action.json[0].title, loading: false }
		case LOGIN:
			return action.payload
		case SIGNUP:
			return action.payload
		case UPDATE_EMAIL:
			return { ...state, email: action.payload }
		case UPDATE_PASSWORD:
			return { ...state, password: action.payload }
		default:
			return state
	}
}

const rootReducer = combineReducers({
	user
})

export default rootReducer