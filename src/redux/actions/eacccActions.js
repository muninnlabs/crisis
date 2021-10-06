import { FETCH_EACCC_SUCCESS, FETCH_EACCC_REQUEST, FETCH_EACCC_FAILURE } from '../types';
// import { FORMAT, BASE_URL } from '../../utils/constants';
// import axios from 'axios';
import eaccc from '../../mockedData/eaccc.json';

export const fetchEaccc = () => (dispatch) => {
    dispatch(fetchEacccRequest());
    if (!!eaccc) {
        dispatch(fetchEacccSuccess(eaccc));
    } else {
        dispatch(fetchEacccError('Error while trying to fetch EACCC admin data'));
    }

    // axios
    //     .get(`${ BASE_URL }eaccc${ FORMAT }`)
    //     .then((res) => {
    //         const eaccc = res.data;
    //         dispatch(fetchEacccSuccess(eaccc));
    //     })
    //     .catch((err) => {
    //         console.log('Error fetch eaccc posts', err);
    //         dispatch(fetchEacccError(err.message));
    //     });
};

export const fetchEacccRequest = () => {
    return {
        type: FETCH_EACCC_REQUEST
    };
};

export const fetchEacccSuccess = (eaccc) => {
    return {
        type: FETCH_EACCC_SUCCESS,
        payload: eaccc
    };
};

export const fetchEacccError = (error) => {
    return {
        type: FETCH_EACCC_FAILURE,
        payload: error
    };
};
