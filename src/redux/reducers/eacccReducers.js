import { 
    FETCH_EACCC_SUCCESS,
    FETCH_EACCC_REQUEST,
    FETCH_EACCC_FAILURE 
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
        case FETCH_EACCC_REQUEST:
            return {
              ...state,
              loading: true
            }
        case FETCH_EACCC_SUCCESS:
            return {
                loading: false,
                items: action.payload,
                error: ''
            }
        case FETCH_EACCC_FAILURE:
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