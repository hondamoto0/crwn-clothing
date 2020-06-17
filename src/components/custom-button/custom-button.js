import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({children,isGoogleSignIn, ...otherProps}) => {
    const customButtonStyle = isGoogleSignIn ? 'google-sign-in' : '';
    return (
        <button className={`${customButtonStyle} custom-button`} {...otherProps} >
            {children}
        </button>    
    )
}
export default CustomButton;