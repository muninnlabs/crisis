import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEaccc } from '../../redux/actions/eacccActions';
import Spiner from '../UI/spiner';

function Eaccc() {
    const eacccData = useSelector((state) => state.eaccc);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchEaccc());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return eacccData.loading ? (
        <Spiner />
    ) : eacccData.error ? (
        <h2>Error {eacccData.error}</h2>
    ) : (
        <div>
            <h4>EACCC Admin</h4>
            {eacccData &&
                eacccData.items.map((eaccc, index) => (
                    <div key={eaccc?.nid[0]?.value}>
                        <span className='link' >
                            <a href={eaccc?.field_link[0].uri}>
                                {eaccc?.field_link[0].title ? eaccc.field_link[0].title : eaccc.title[0].value}
                            </a>
                        </span>
                    </div>
                ))}
        </div>
    );
}

export default Eaccc;
