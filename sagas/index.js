import { call, put, takeEvery, takeLatest, all } from 'redux-saga/effects';
import { API_CALL_REQUEST_ANIMAL, API_CALL_SUCCESS_ANIMAL } from '../actions/user';
import axios from "axios";

function* fetchNews() {
  try {
    const json = yield fetch('https://newsapi.org/v1/articles?source=cnn&apiKey=c39a26d9c12f48dba2a5c00e35684ecc')
    .then(response => response.json(), );    
    console.log("fetching news : " + json.articles[0])  
    yield put({ type: "NEWS_RECEIVED", json: json.articles, });
  } catch (e) {
    console.log(e)
  }
}

function fetchDog() {
  return axios({
    method: "get",
    url: "https://dog.ceo/api/breeds/image/random"
  });
}

function* workerSaga() {
  console.log("handling request in worker saga");
  try {
    const response = yield call(fetchDog);
    const dog = response.data.message;
    console.log("fetching dog : " + dog)

    // dispatch a success action to the store with the new dog
    yield put({ type: API_CALL_SUCCESS_ANIMAL, dog });
  } catch (error) {
    console.log(error)
  }
}

export default function* rootSaga() {
  console.log("handling request in saga");
  yield takeEvery('GET_NEWS', fetchNews);
  yield takeLatest(API_CALL_REQUEST_ANIMAL, workerSaga);
}