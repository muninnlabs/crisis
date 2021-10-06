import { FETCH_SINGLE_EVENT_SUCCESS, FETCH_SINGLE_EVENT_REQUEST, FETCH_SINGLE_EVENT_FAILURE } from '../types';
// import { FORMAT, BASE_URL_SINGLE_NODE } from '../../utils/constants';
// import axios from 'axios';
// import singleEvent from '../../mockedData/singleEvent.json';
import events from '../../mockedData/events.json';
import { filter } from 'lodash';

export const fetchSingleEvent = (id) => (dispatch) => {
    dispatch(fetchSingleEventRequest());
   
    if (!!events) {
        const singleEvent = events.find(event => {
            return event.nid === id;
        })
        dispatch(fetchSingleEventSuccess(singleEvent));
    } else {
        dispatch(fetchSingleEventError('Error trying to fetch single event'));
    }
    // axios
    // .get(`${BASE_URL_SINGLE_NODE}node/${id}${FORMAT}`)
    // .then((res) => {
    //     const singleEvent = res.data;
    //     dispatch(fetchSingleEventSuccess(singleEvent));
    // })
    // .catch((err) => {
    //     console.log('Error fetch events', err);
    //     dispatch(fetchSingleEventError(err.message));
    // });
};

export const fetchSingleEventRequest = () => {
    return {
        type: FETCH_SINGLE_EVENT_REQUEST
    };
};

export const fetchSingleEventSuccess = (singleEvent) => {
    return {
        type: FETCH_SINGLE_EVENT_SUCCESS,
        payload: singleEvent
    };
};

export const fetchSingleEventError = (error) => {
    return {
        type: FETCH_SINGLE_EVENT_FAILURE,
        payload: error
    };
};
