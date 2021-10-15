import { 
    FETCH_NMOC_SUCCESS,
    FETCH_NMOC_REQUEST,
    FETCH_NMOC_FAILURE
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
        case FETCH_NMOC_REQUEST:
            return {
              ...state,
              loading: true
            }
        case FETCH_NMOC_SUCCESS:
            return {
                loading: false,
                items: action.payload,
                error: ''
            }
        case FETCH_NMOC_FAILURE:
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