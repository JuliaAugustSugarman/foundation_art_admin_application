import axios from 'axios';

// Import saga middleware
import { takeEvery, put as dispatch, actionChannel } from 'redux-saga/effects';


//root Saga
function* artSaga() {
    yield takeEvery('FETCH_GALLERY', getArtwork);
    // yield takeEvery('SET_WORK', placeArtwork);
    // yield takeEvery('')
}


function* getArtwork() {
    const getArtworkResponse = yield axios.get('/api/gallery');
    yield dispatch({ type: 'SET_ART', payload: getArtworkResponse.data });
}


// function* placeArtwork(action) {
//     // const placeArtwork = yield axios.get('/api/artPage');
//     yield dispatch({ type: 'SELECTED_WORK', payload: action.payload });
// }

export default artSaga;