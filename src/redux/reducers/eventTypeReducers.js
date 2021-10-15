import { 
    FETCH_EVENT_TYPE_SUCCESS,
    FETCH_EVENT_TYPE_REQUEST,
    FETCH_EVENT_TYPE_FAILURE
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
        case FETCH_EVENT_TYPE_REQUEST:
            return {
              ...state,
              loading: true
            }
        case FETCH_EVENT_TYPE_SUCCESS:
            return {
                loading: false,
                items: action.payload,
                error: ''
            }
        case FETCH_EVENT_TYPE_FAILURE:
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