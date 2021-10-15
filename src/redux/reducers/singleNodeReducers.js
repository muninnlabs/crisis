import { 
    FETCH_SINGLE_EVENT_SUCCESS,
    FETCH_SINGLE_EVENT_REQUEST,
    FETCH_SINGLE_EVENT_FAILURE
} from '../types';

const initialState = {
    loading: false,
    items: [],
    item: {}, 
    error: '',
    newPost: {}
}

const reducer = (state= initialState, action) => {
    switch(action.type){
        case FETCH_SINGLE_EVENT_REQUEST:
            return {
              ...state,
              loading: true
            }
        case FETCH_SINGLE_EVENT_SUCCESS:
            return {
                loading: false,
                items: action.payload,
                error: ''
            }
        case FETCH_SINGLE_EVENT_FAILURE:
            return {
                loading: false,
                items: [],
                error: action.payload
            }
        
        default:
            return state;
    }
}  

export default reducer;