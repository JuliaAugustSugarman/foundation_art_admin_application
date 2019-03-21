
// Used to store projects returned from the server
const artPageReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_ART':
            return action.payload;
        default:
            return state;
    }
}






export default artPageReducer;
