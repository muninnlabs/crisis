import React from 'react';
import Exercises from './exercises';
import Nmoc from './nmoc';
import Eaccc from './eaccc';

export default function Footer() {
    return (
        <footer>
            <div className='row'>
                <div className='col-xs-12 col-md-4'>
                    <div className='links-wrapper'>
                        <Nmoc />
                    </div>
                </div>
                <div className='col-xs-12 col-md-4'>
                    <div className='links-wrapper'>
                        <Exercises />
                    </div>
                </div>
                <div className='col-xs-12 col-md-4'>
                    <div className='links-wrapper'>
                        <Eaccc />
                    </div>
                </div>
            </div>
        </footer>
    );
}
