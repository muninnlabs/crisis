import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSingleEvent } from '../../redux/actions/singleNodeActions';
//use useParams 
import { useParams } from 'react-router-dom';
import Spiner from '../UI/spiner';
import moment from 'moment';


export default function () {
    const params = useParams();
    const id = params.id;
    const singleEventData = useSelector((state) => state.singleNode);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchSingleEvent(id));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    let links;
    let files;
    console.log('singleEventData.items', singleEventData)
    if(singleEventData.items){
        links = singleEventData.items.field_link
        files = singleEventData.items.field_file
        console.log(files)
        
    }

    return singleEventData.loading ? (
        <div className='event-content'>
            <Spiner />
        </div>
    ) : singleEventData.error ? (
        <div className='event-content'>
            <h2>Error {singleEventData.error}</h2>
        </div>
    ) : (
        <div className='single-node'>
            <h3>{singleEventData.items.title}</h3>
            <h5>
            {
                moment(singleEventData.items.field_event_date).format('MMMM Do YYYY, h:mm:ss a')
            }
            
            </h5>
            <img src={singleEventData.items.field_image} alt="" />
            <div  dangerouslySetInnerHTML={{__html: singleEventData.items.body}}></div>
            <dir className="row">
                <div className="col-xs-12 col-md-4">
                    {!!links && links.split(',').map( link => (
                        <span className='link' dangerouslySetInnerHTML={{__html: link}}></span>
                    ))}
                </div>
                <div className="col-xs-12 col-md-4">
                    {!!files && 
                        <span className="link"><a href={files}>{ files.split('/').pop()}</a></span>
                    }
                </div>
            </dir>
        </div>
    );
}
