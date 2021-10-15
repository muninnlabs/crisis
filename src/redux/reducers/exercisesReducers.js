import { 
    FETCH_EXERCISES_SUCCESS,
    FETCH_EXERCISES_REQUEST,
    FETCH_EXERCISES_FAILURE
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
        case FETCH_EXERCISES_REQUEST:
            return {
              ...state,
              loading: true
            }
        case FETCH_EXERCISES_SUCCESS:
            return {
                loading: false,
                items: action.payload,
                error: ''
            }
        case FETCH_EXERCISES_FAILURE:
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