import React from 'react'

export default function TeamCardsItem(props) {
    return (
        <>
            <div className='card-team'>
                <img src={props.imagePath}  alt='' className='image' />
                <div className='card-team-content'>
                    <h4 className='card-team-title'>{ props.teamName }</h4>
                    <div className='card-team-designation'>{ props.teamDesignation }</div>
                </div>
            </div>
        </>
    )
}
