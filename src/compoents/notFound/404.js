import React from 'react';
import {Link} from 'react-router-dom';
import {APP_PREFIX_PATH} from '../../config/AppConfig';


const NotFound = () => {
    return (
        <div style={{textAlign: 'center'}}>
            <h1> Page not found </h1>
            <Link to={APP_PREFIX_PATH}>
                <button> back to home </button>
            </Link>
        </div>
    );
}

export default NotFound;
