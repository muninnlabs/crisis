import {
    FETCH_EVENTS_SUCCESS,
    FETCH_EVENTS_REQUEST,
    FETCH_EVENTS_FAILURE,
} from '../types';
// import { FORMAT, BASE_URL, BASE_URL_SINGLE_NODE } from '../../utils/constants';
// import axios from 'axios';
import events from '../../mockedData/events.json';


export const fetchEvents = () => (dispatch) => {

    dispatch(fetchEventsRequest());
    if(!!events) {
        dispatch(fetchEventsSuccess(events));
    }else{
        dispatch(fetchEventsError('Error while thying to fetch events'));
    }
    // axios
    //     .get(`${BASE_URL}events${FORMAT}`)
    //     .then((res) => {
    //         const events = res.data;
    //         dispatch(fetchEventsSuccess(events));
    //     })
    //     .catch((err) => {
    //         console.log('Error fetch events', err);
    //         dispatch(fetchEventsError(err.message));
    //     });
};

export const fetchEventsRequest = () => {
    return {
        type: FETCH_EVENTS_REQUEST
    };
};

export const fetchEventsSuccess = (events) => {
    console.log('state events',events)
    return {
        type: FETCH_EVENTS_SUCCESS,
        payload: events
    };
};

export const fetchEventsError = (error) => {
    return {
        type: FETCH_EVENTS_FAILURE,
        payload: error
    };
};
