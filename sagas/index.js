import { put, takeEvery, all } from 'redux-saga/effects';

function* fetchNews() {
  const json = yield fetch('https://newsapi.org/v1/articles?source=cnn&apiKey=c39a26d9c12f48dba2a5c00e35684ecc')
        .then(response => response.json(), );    
    console.log("fetching news : " + json.articles[0])
  yield put({ type: "NEWS_RECEIVED", json: json.articles, });
}

export default function* rootSaga() {
  console.log("handling request in saga");
  yield takeEvery('GET_NEWS', fetchNews);
}