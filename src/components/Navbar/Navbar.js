import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../LinkButton/LinkButton';

function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click); 
    const closeMobileMenu = () => setClick(false);

    return (
        <> 
            <div className='navbar secondary-gradient w-nav' data-collapse="medium">
                <div className='navbar-container container-2 w-container'>
                    <Link to='/' className='brand w-nav-brand'>
                        <img src={'./61c969f0c29e7d55a5b68b95_logo_Whitebg.png'} alt='' />
                    </Link>
                    <nav className={click ? 'nav-menu w-nav-menu w--open' : 'nav-menu w-nav-menu'}>
                        <Link to='/#claim' className='nav-link w-nav-link' onClick={closeMobileMenu}>Claim</Link>
                        <Link to='/#team' className='nav-link w-nav-link' onClick={closeMobileMenu}>Team</Link>
                        <Link to='/#roadmap' className='nav-link w-nav-link' onClick={closeMobileMenu}>Roadmap</Link>
                        <div className='div-block-1105'>
                            <Button link='/'><div>Join Whitelist</div></Button>
                        </div>
                    </nav>
                    <div className='menu-button w-nav-button' onClick={handleClick}>
                        <img src={click ? './group_1157.png' : './group_1143.png'} alt='' />
                    </div>
                    <div className='div-block-11'>
                        <Button link='/'><div>Join Whitelist</div></Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
