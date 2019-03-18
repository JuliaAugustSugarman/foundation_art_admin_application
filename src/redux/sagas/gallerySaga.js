import axios from 'axios';

// Import saga middleware
import { takeEvery, put as dispatch } from 'redux-saga/effects';


//root Saga
function* artSaga() {
    yield takeEvery('FETCH_GALLERY', getArtwork);
}


function * getArtwork() {
    const getArtworkResponse = yield axios.get('/api/gallery');
    yield dispatch({ type: 'SET_ART', payload: getArtworkResponse.data });
}



export default artSaga;