import React from 'react';
import { Link } from 'react-router-dom';

const PNF = () => {
    return (
        <div>
            Page not found.
            <br />
            <Link to='/'>Return Home</Link>
        </div>
    );
};

export default PNF;