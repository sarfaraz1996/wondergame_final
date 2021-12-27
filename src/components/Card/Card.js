import React from 'react';

const STYLES = ['card-md', 'card-lg']

export const Card = ({ children, cardStyle, cardMargin }) => {
    const checkCardStyle = STYLES.includes(cardStyle) ? cardStyle : '';

    return (
        <div className={`card text-center bg-light ${checkCardStyle} ${cardMargin}`}>
            {children}
        </div>
    )
};
