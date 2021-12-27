import React from 'react';

export const TimelineProgress = (props) => {
    const percentage = props.progressHeight + '%';
    return (
        <>
            <div className='timeline-progress timeline-progres'>
                <div className='timeline-progress-bar primary-gradient' style={{ height: `${percentage}` }}></div>
            </div>
        </>
    );
};