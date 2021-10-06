import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNmoc } from '../../redux/actions/nmocActions';
import Spiner from '../UI/spiner';

function Nmoc() {
    const nmocData = useSelector((state) => state.nmoc);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchNmoc());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return nmocData.loading ? (
        <Spiner />
    ) : nmocData.error ? (
        <h2>Error {nmocData.error}</h2>
    ) : (
        <div>
            <h4>NMOC Ops</h4>
            {nmocData &&
                nmocData.items.map((nmoc, index) => (
                    <div key={nmoc?.field_link[0].uri}>
                        <span className='link'>
                            <a href={nmoc?.field_link[0].uri}>
                                {nmoc?.field_link[0].title ? nmoc.field_link[0].title : nmoc.title[0].value}
                            </a>
                        </span>
                    </div>
                ))}
        </div>
    );
}

export default Nmoc;
