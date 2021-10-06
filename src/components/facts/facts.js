import React, { useEffect, useState } from 'react';
import { Button } from 'antd';
import 'antd/dist/antd.css';

export default function Facts() {
    const [mapId] = useState(new Date().getUTCMilliseconds());
    const [isInteractive, setIsInteractive] = useState(false);

    useEffect(() => {
        if ('nsv' in window) {
            //painter type: "TrajectoryPainter" or "PlanePainter"
            const options = {
                trajectoryProps: { painterType: 'PlanePainter' },
                regulationProps: {
                    airspaces: [false, false, true, true],
                    airports: [false, false, true, true]
                },
                background: 'MapTilerSatellite',
                boundingBox: [-10, 60, 30, 30]
            };
            window.nsv(`map-render-${mapId}`, options);
            setIsInteractive(true);
        }
    }, []); //eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <div className='button-wrapper'>
                <Button className='pull-right'>FACT24</Button>
            </div>
            <div className='free-text'>
                <h4>Title of the free text area</h4>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae est dignissimos hic libero, porro dolore labore
                    eligendi sint sapiente, ipsum neque cum fugiat recusandae autem? Saepe facere impedit officiis veniam.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae est dignissimos hic libero, porro dolore labore
                    eligendi sint sapiente, ipsum neque cum fugiat recusandae autem? Saepe facere impedit officiis veniam.
                </p>
            </div>
            <div className='map-wrapper'>
                <div
                    id={`map-render-${mapId}`}
                    style={{
                        width: 'calc(100% - 8px)',
                        height: '306px',
                        top: 8,
                        left: 8,
                        position: 'absolute',
                        overflow: 'hidden',
                        background: isInteractive ? '' : '#666'
                    }}
                ></div>
            </div>
        </div>
    );
}
