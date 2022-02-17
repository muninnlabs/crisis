import { FETCH_EVENTS_SUCCESS, FETCH_EVENTS_REQUEST, FETCH_EVENTS_FAILURE } from '../types';
import { BASE_URL } from '../../utils/constants';
import axios from 'axios';
import events from '../../mockedData/events.json';

export const fetchEvents = () => (dispatch) => {
    dispatch(fetchEventsRequest());
    if (!!events) {
        dispatch(fetchEventsSuccess(events));
    } else {
        dispatch(fetchEventsError('Error while thying to fetch events'));
    }
    // axios
    //     .get(`${BASE_URL}events`)
    //     .then((res) => {
    //         const events = res.data;
    //         // console.log('api call response', events)
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
    console.log('state events', events);
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
