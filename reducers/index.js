import { combineReducers } from 'redux'
import { login, LOGIN, SIGNUP, UPDATE_EMAIL, UPDATE_PASSWORD, API_CALL_REQUEST_ANIMAL, API_CALL_SUCCESS_ANIMAL} from '../actions/user'

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
		case API_CALL_REQUEST_ANIMAL:
			console.log("Reducer action: fetch animal")
			return { ...state, fetching: true, error: null };
		case API_CALL_SUCCESS_ANIMAL:
			console.log("Reducer action: fetch animal success : " + action.dog)
      		return { ...state, fetching: false, dog: action.dog };
		default:
			return state
	}
}

const rootReducer = combineReducers({
	user
})

export default rootReducer