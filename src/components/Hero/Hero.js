import React from 'react';
import { Link } from 'react-router-dom';


export default function Hero() {
    return (
        <>
            <header id='hero-overlay' className='hero-overlay wf-section' style={{ backgroundImage: `url('./12c9b69137197e19e732d3ae_hero_bg.jpg')` }}>
                <div className='centered-container w-container'>
                    <img src={'./61c96f6e64049feb7e568779_Group 200.png'} alt='' />
                    <div className='div-block-2'>
                        <img src={'./61c96fac0afbca64e712ba28_Group 240.png'} alt='' />
                    </div>
                    <div className='div-block-12'>
                        <Link to='/' className='link-block w-inline-block'>
                            <div className='div-block'></div>
                        </Link>
                    </div>
                </div>
            </header>
        </>
    )
}
