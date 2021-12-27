import React from 'react';
import { Link } from 'react-router-dom';

const STYLES = ['btn-primary', 'btn-secondary']

export const Button = ({ children, type, onClick, buttonStyle, link }) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

    return (
        <Link to={link} className={`btn w-inline-block ${checkButtonStyle}`} onClick={onClick} type={type}>
            {children}
        </Link>
    )
};
