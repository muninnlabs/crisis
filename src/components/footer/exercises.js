import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchExercises } from '../../redux/actions/exercisesActions';
import Spiner from '../UI/spiner';

function Exercises() {
    const exercisesData = useSelector((state) => state.exercises);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchExercises());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return exercisesData.loading ? (
        <Spiner />
    ) : exercisesData.error ? (
        <h2>Error {exercisesData.error}</h2>
    ) : (
        <div>
            <h4>Exercises and training</h4>
            {exercisesData &&
                exercisesData.items.map((exercises, index) => (
                    <div key={exercises?.nid[0]?.value}>
                        <span className='link'>
                            <a href={exercises?.field_link[0].uri}>
                                {exercises?.field_link[0].title ? exercises.field_link[0].title : exercises.title[0].value}
                            </a>
                        </span>
                    </div>
                ))}
        </div>
    );
}

export default Exercises;
