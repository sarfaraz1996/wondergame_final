import React from 'react';
import { Button } from '../LinkButton/LinkButton';
import { Progress } from '../Progress/Progress';


export default function SectionTwo() {
    return (
        <>
            <div className='section-2 primary-gradient wf-section' style={{ backgroundImage: `url('./11c9b69137197e19e732d3ae_bg_pattern.png'), linear-gradient(62deg,#eda01f,#f7dc4d)` }}>
                <div className='container w-container'>
                    <div className='grid-2'>
                        <div className='div-block-8'>
                            <div className='div-block-6'>
                                <h2 className='heading h1'>Claim Your Avatar</h2>
                                <div className='div-block-7'>
                                    <p className='paragraph'>
                                        <strong>White Rabbits</strong> and <strong>Mad Hatters </strong>
                                        will soon be available for minting. These are the highly desirable foundations of
                                        the WonderGame Metaverse.
                                    </p>
                                </div>
                            </div>
                            <div>
                                <div className='div-block-9'>
                                    <h6 className='h6'>10,000 To Mint</h6>
                                    <div className='progress-group'>
                                        <Progress progressWidth={'40'} />
                                        <Progress progressWidth={'0'} />
                                        <Progress progressWidth={'0'} />
                                        <Progress progressWidth={'0'} />
                                        <Progress progressWidth={'0'} />
                                    </div>
                                </div>
                                <Button buttonStyle={'btn-secondary'} link='/'><div>Join Whitelist</div></Button>
                            </div>
                        </div>
                        <div>
                            <img src={'./61c99b554575ca208e89eecb_Rectangle 119.png'} alt='' className='image-5' />
                        </div>
                    </div>
                </div>

                <div className='shape shape-7'>
                    <img src={'./61c99e539ca45643ff9cbb93_4.png'} alt='' />
                </div>
                <div className='shape shape-8'>
                    <img src={'./61c99ee16125314b246f7455_6.png'} alt='' />
                </div>
            </div>
        </>
    )
}
