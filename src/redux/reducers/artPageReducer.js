//used to prop single artworks onto single page


const artPageReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_WORK':
        console.log('in single art work reducer');
        
            return action.payload;
        default:
            return state;
    }

}






export default artPageReducer;






