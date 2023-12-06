import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import Cabinet from './app';
import Auth from './auth';
import NotFound from '../compoents/notFound/404';
import {AUTH_PREFIX_PATH, APP_PREFIX_PATH} from '../config/AppConfig';


const View = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Navigate to={APP_PREFIX_PATH + '/home'}/>}/>
            <Route path={APP_PREFIX_PATH} element={<Navigate to={APP_PREFIX_PATH + '/home'}/>}/>
            <Route path={`${APP_PREFIX_PATH}/*`} element={<Cabinet/>}/>
            <Route path={AUTH_PREFIX_PATH} element={<Auth/>}/>
            <Route path='*' element={<NotFound />}/>
        </Routes>
    );
}

export default View;