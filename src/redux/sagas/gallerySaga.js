import axios from 'axios';

// Import saga middleware
import { takeEvery, put as dispatch } from 'redux-saga/effects';


//root Saga
function* artSaga() {
    yield takeEvery('FETCH_GALLERY', getArtwork);
    // yield takeEvery('')
}


function * getArtwork() {
    const getArtworkResponse = yield axios.get('/api/gallery');
    yield dispatch({ type: 'SET_ART', payload: getArtworkResponse.data });
}

// function* placeArtwork() {
//     const placeArtwork = yield axios.get('/api/gallery');
//     yield dispatch({ type: 'SET_WORK', payload: placeArtwork.data });
// }

export default artSaga;