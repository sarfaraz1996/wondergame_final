import React from 'react'

export default function TimelineItem(props) {
    return (
        <>
            <div className='timeline-section'>
                <div className={`timeline-item ${props.margin}`}>
                    <h5 className='heading h5'>{ props.title }</h5>
                    <p className='paragraph'>{ props.description }</p>
                    <div className={`timeline-item-indicator ${props.indicatorPosition} ${props.indicatorStatus}`}>
                        <div className='timeline-item-indicator-inner'></div>
                    </div>
                </div>
            </div>
        </>
    )
}
