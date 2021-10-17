import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEvents } from '../../redux/actions/eventsActions';
import Spiner from '../UI/spiner';
import { Collapse, Typography } from 'antd';
import moment from 'moment';

import 'antd/dist/antd.css';
// import './events.css'

const { Panel } = Collapse;
const { Title } = Typography;

function Events() {
    const eventsData = useSelector((state) => state.events);
    const dispatch = useDispatch();
    const [groupedEvents, setGroupedEvents] = useState(null);

    useEffect(() => {
        dispatch(fetchEvents());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (!!eventsData) {
            setGroupedEvents(groupByDateEvents(eventsData.items));
        }
    }, [eventsData]);
    
    const groupByDateEvents = (eventsArray) => {
        return Object.entries(
            eventsArray.reduce(function (acc, obj) {
                const key = moment(obj.field_event_date).format('DD-MMM-YYYY');
                if (!acc[key]) {
                    acc[key] = [];
                }
                acc[key].push(obj);
                return acc;
            }, {})
            );
        };
    console.log('state', groupedEvents);

    return eventsData.loading ? (
        <div className='event-content'>
            <Spiner />
        </div>
    ) : eventsData.error ? (
        <div className='event-content'>
            <h2>Error {eventsData.error}</h2>
        </div>
    ) : (
        <div className='event-content'>
            <Title level={4}>Events</Title>
            {groupedEvents &&
                groupedEvents.map((date) => (
                    <div>
                        
                         <h5 className='upper-case accordion-subtitle'>
                            {date[0]}
                        </h5>
                        <Collapse accordion>
                        {date[1].length > 0 &&
                            date[1].map((event) => (
                                    <Panel
                                        header={moment(event.field_event_date).format('HH:mm') + ' - ' + event.title}
                                        key={event?.nid}
                                        className={event.field_tag.includes('alert') ? 'alert' : ''}
                                    >
                                        <p>
                                            <span>{event.body_1}</span>
                                        </p>
                                        <p>
                                            <a href={'event/' + event.nid}>see more</a>
                                        </p>
                                    </Panel>
                            ))}
                        </Collapse>
                    </div>
                ))}
        </div>
    );
}

export default Events;
