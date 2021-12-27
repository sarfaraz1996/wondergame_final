import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../LinkButton/LinkButton'

export default function Footer() {
    return (
        <>
            <footer className='footer'>
                <div id='w-node-f7124c28-2fb4-5bc4-712a-b2c51d0b11c6-97b767ee' className='inline-links'>
                    <Link to='/' className='inline-link'>Privacy Policy   •  Terms of Use</Link>
                </div>
                <div id='w-node-_7963e9da-169e-51c2-2d0f-5f5c88a12622-97b767ee' className='footer-center'>
                    <img src={'./61c96f6e64049feb7e568779_Group 200.png'} alt='' />
                    <Button link='/'><div>Join Whitelist</div></Button>
                </div>
                <div id='w-node-_2f29f2fd-5552-7179-86f6-1efdad6b11f5-97b767ee' className='social-icons'>
                    <a href='/' className='social-item w-inline-block'>
                        <img src={'./61c9b03061253113136fc455_Group 227.png'} alt='' />
                    </a>
                    <a href='/' className='social-item w-inline-block'>
                        <img src={'./61c9b03064ac93d9db212329_Group 224.png'} alt='' />
                    </a>
                    <a href='/' className='social-item w-inline-block'>
                        <img src={'./61c9b03083c49a74024a05bb_Group 226.png'} alt='' />
                    </a>
                    <a href='/' className='social-item w-inline-block'>
                        <img src={'./61c9b0308041432c4c009744_Group 225.png'} alt='' />
                    </a>
                    <a href='/' className='social-item last w-inline-block'>
                        <img src={'./61c9b03064049fca6f57b6e1_Group 223.png'} alt='' />
                    </a>
                </div>
            </footer>
        </>
    )
}
