import React from 'react';

export const Progress = (props) => {
    const percentage = props.progressWidth + '%';
    return (
        <>
            <div className='progress secondary-gradient op-20'>
                <div className='progress-bar secondary-gradient' style={{ width: `${percentage}` }}></div>
            </div>
        </>
    );
};