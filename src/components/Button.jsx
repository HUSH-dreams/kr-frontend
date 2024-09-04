import React from 'react';
import {Link} from "react-router-dom";

const Button = ({to, children, click, isVisible}) => {
    return (
        <Link className="menu-button" to={to} style={{color: isVisible ? '#d18e5c' : 'white', transform: isVisible ? 'scale(1.1)' : 'scale(1.0)'}} onClick={click}>
            {children}
        </Link>
    );
};

export default Button;