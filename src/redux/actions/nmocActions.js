import { FETCH_NMOC_SUCCESS, FETCH_NMOC_REQUEST, FETCH_NMOC_FAILURE } from '../types';
// import { FORMAT, BASE_URL } from '../../utils/constants'
// import axios from 'axios';
import nmoc from '../../mockedData/nmoc.json';

export const fetchNmoc = () => (dispatch) => {
    dispatch(fetchNmocRequest());
    if (!!nmoc) {
        dispatch(fetchNmocSuccess(nmoc));
    } else {
        dispatch(fetchNmocError('Error trying to fetch NMOC'));
    }
    // axios
    //     .get(`${ BASE_URL }nmoc${ FORMAT }`)
    //     .then((res) => {
    //         const nmoc = res.data;
    //         dispatch(fetchNmocSuccess(nmoc));
    //     })
    //     .catch((err) => {
    //         console.log('Error fetch nmoc', err);
    //         dispatch(fetchNmocError(err.message));
    //     });
};

export const fetchNmocRequest = () => {
    return {
        type: FETCH_NMOC_REQUEST
    };
};

export const fetchNmocSuccess = (nmoc) => {
    return {
        type: FETCH_NMOC_SUCCESS,
        payload: nmoc
    };
};

export const fetchNmocError = (error) => {
    return {
        type: FETCH_NMOC_FAILURE,
        payload: error
    };
};
