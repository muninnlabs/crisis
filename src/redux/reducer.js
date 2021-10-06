import { combineReducers } from 'redux';
import eacccReducer from './reducers/eacccReducers';
import eventsReducer from './reducers/eventsReducers';
import eventTypeReducer from './reducers/eventTypeReducers';
import exercisesReducer from './reducers/exercisesReducers';
import nmocReducer from './reducers/nmocReducers';
import singleNodeReducer from './reducers/singleNodeReducers';

export default combineReducers({
    eaccc: eacccReducer,
    events: eventsReducer,
    eventType: eventTypeReducer,
    exercises: exercisesReducer,
    nmoc: nmocReducer,
    singleNode: singleNodeReducer
});
