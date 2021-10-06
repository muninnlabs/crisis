import React from 'react';
import Events from './events/events';
import EventType from './eventType/eventType';
import Facts from './facts/facts';

export default function MainPage() {
    return (
        <main>
            <section className='row'>
                <div className='col-md-6 events-wrapper'>
                    <Events />
                </div>
                <div className='col-md-6 facts'>
                    <Facts />
                </div>
            </section>
            <section className='row'>
                <EventType />
            </section>
        </main>
    );
}
