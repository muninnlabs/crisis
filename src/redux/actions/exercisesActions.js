import { FETCH_EXERCISES_SUCCESS, FETCH_EXERCISES_REQUEST, FETCH_EXERCISES_FAILURE } from '../types';
import { FORMAT, BASE_URL } from '../../utils/constants';
import axios from 'axios';
import exercises from '../../mockedData/exercises.json';

export const fetchExercises = () => (dispatch) => {
    dispatch(fetchExercisesRequest());
    if (!!exercises) {
        dispatch(fetchExercisesSuccess(exercises));
    } else {
        dispatch(fetchExercisesError('Error trying to fetch the exercises'));
    }

    // axios
    //     .get(`${ BASE_URL }exercises${ FORMAT }`)
    //     .then((res) => {
    //         const exercises = res.data;
    //         dispatch(fetchExercisesSuccess(exercises));
    //     })
    //     .catch((err) => {
    //         console.log('Error fetch exercises', err);
    //         dispatch(fetchExercisesError(err.message));
    //     });
};

export const fetchExercisesRequest = () => {
    return {
        type: FETCH_EXERCISES_REQUEST
    };
};

export const fetchExercisesSuccess = (exercises) => {
    return {
        type: FETCH_EXERCISES_SUCCESS,
        payload: exercises
    };
};

export const fetchExercisesError = (error) => {
    return {
        type: FETCH_EXERCISES_FAILURE,
        payload: error
    };
};
