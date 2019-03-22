import axios from 'axios';

// Import saga middleware
import { takeEvery, put as dispatch} from 'redux-saga/effects';


//root Saga
function* artSaga() {
    yield takeEvery('FETCH_GALLERY', getArtwork);
    yield takeEvery('DELETE_ARTWORK', deleteArt);
    yield takeEvery('ADD_ARTWORK', postArt);
}

//generator functions
function* getArtwork() {
    const getArtworkResponse = yield axios.get('/api/gallery');
    yield dispatch({ type: 'SET_ART', payload: getArtworkResponse.data });
}


function* postArt(action){
    try {
        console.log('Julia are you here?', action.payload);
        
        yield axios.post('/api/gallery', action.payload)
        yield dispatch({ type: 'FETCH_GALLERY' });
    }
    catch (error) {
        console.log('error with axios post request', error);

    }
}


function * deleteArt(action) {
    try {
        yield axios.delete('/api/gallery/' + action.payload);
        yield dispatch({ type: 'FETCH_GALLERY' });
    }
    catch (error) {
        console.log('error deleting', action, error);
    }
}


export default artSaga;