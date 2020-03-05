import React from 'react';
import  "./custombutton.styles.scss";



const CustomButton = ({children, signInWithGoogle, ...otherProps}) => (
    

        <button className={ `${signInWithGoogle ? 'sign-in-with-google': ''} custom-button`} {...otherProps}>
            {children}
        </button>
 
 
)
export default CustomButton;