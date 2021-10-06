import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEventType } from '../../redux/actions/eventTypeActions';
import Spiner from '../UI/spiner';

function EventType() {
    const eventTypeData = useSelector((state) => state.eventType);
    const dispatch = useDispatch();
    const [eventTypeDescription, setEventTypeDescription] = useState('');

    useEffect(() => {
        dispatch(fetchEventType());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        selectEventType(eventTypeData.items[0]);
    }, [eventTypeData]);

    const selectEventType = (eventType) => {
        if (eventType) {
            let links = [];
            if (eventType.field_link.length > 0) {
                eventType.field_link.map((link) => {
                    links.push({
                        title: link.title,
                        uri: link.uri
                    });
                });
            }

            setEventTypeDescription({
                title: eventType?.title[0].value,
                body: eventType?.body[0].processed,
                links: links
            });
        }
    };

    return eventTypeData.loading ? (
        <div className='col-md-12'>
            <div className='event-type'>
                <Spiner />
            </div>
        </div>
    ) : eventTypeData.error ? (
        <div className='col-md-12'>
            <div className='event-type'>
                <h2>Error {eventTypeData.error}</h2>
            </div>
        </div>
    ) : (
        <div className='col-md-12'>
            <div className='event-type'>
                <div className='col-xs-12'>
                    <h4>Information about the types of events/crisis</h4>
                </div>
                <div className='col-xs-12 col-md-7 event-icons-wrapper'>
                    {eventTypeData &&
                        eventTypeData.items.map((eventType, index) => (
                            <div
                                key={eventType?.nid[0]?.value}
                                className='type-of-event'
                                onClick={() => {
                                    selectEventType(eventType);
                                }}
                            >
                                <img src={eventType.field_image[0].url} alt={eventType.field_image[0].alt} className='event-type-icon' />
                                <p>{eventType.title[0].value}</p>
                            </div>
                        ))}
                </div>
                <div className='col-md-4 col-xs-12 event-type-description-wrapper'>
                    <h4>{eventTypeDescription.title}</h4>
                    <div className='event-type-description' dangerouslySetInnerHTML={{ __html: eventTypeDescription.body }}></div>
                </div>
                <div className='col-md-2 col-xs-12'>
                    {eventTypeDescription.links &&
                        eventTypeDescription.links.length > 0 &&
                        eventTypeDescription.links.map((link) => (
                            <span className='link'>
                                <a href={link.uri}>{link.title ? link.title : link.uri}</a>
                            </span>
                        ))}
                </div>
            </div>
        </div>
    );
}

export default EventType;
