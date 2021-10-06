import { FETCH_EVENT_TYPE_SUCCESS, FETCH_EVENT_TYPE_REQUEST, FETCH_EVENT_TYPE_FAILURE } from '../types';
// import { FORMAT, BASE_URL } from '../../utils/constants'
// import axios from 'axios';
import eventType from '../../mockedData/evenType.json';

export const fetchEventType = () => (dispatch) => {
    dispatch(fetchEventTypeRequest());
    if (!!eventType) {
        dispatch(fetchEventTypeSuccess(eventType));
    } else {
        dispatch(fetchEventTypeError('Error trying to load evend type'));
    }
    // axios
    //     .get(`${ BASE_URL }event_type${ FORMAT }`)
    //     .then((res) => {
    //         const eventType = res.data;
    //         dispatch(fetchEventTypeSuccess(eventType));
    //     })
    //     .catch((err) => {
    //         console.log('Error fetch eventType', err);
    //         dispatch(fetchEventTypeError(err.message));
    //     });
};

export const fetchEventTypeRequest = () => {
    return {
        type: FETCH_EVENT_TYPE_REQUEST
    };
};

export const fetchEventTypeSuccess = (eventType) => {
    return {
        type: FETCH_EVENT_TYPE_SUCCESS,
        payload: eventType
    };
};

export const fetchEventTypeError = (error) => {
    return {
        type: FETCH_EVENT_TYPE_FAILURE,
        payload: error
    };
};
