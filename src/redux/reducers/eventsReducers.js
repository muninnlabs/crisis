import { 
    FETCH_EVENTS_SUCCESS,
    FETCH_EVENTS_REQUEST,
    FETCH_EVENTS_FAILURE
} from '../types';

const initialState = {
    loading: false,
    items: [],
    item: {}, 
    error: '',
}

const reducer = (state= initialState, action) => {
    switch(action.type){
        case FETCH_EVENTS_REQUEST:
            return {
              ...state,
              loading: true
            }
        case FETCH_EVENTS_SUCCESS:
            return {
                loading: false,
                items: action.payload,
                error: ''
            }
        case FETCH_EVENTS_FAILURE:
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