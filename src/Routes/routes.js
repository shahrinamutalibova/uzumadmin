import React, {lazy,Suspense} from "react";
import {Routes, Route} from 'react-router-dom';
import Ui_Layout from "../compoents/Layout";
import Loader from "../compoents/Loader";

const Certificate = lazy(() => import('../view/app/Certificate'));
const Courses = lazy(() => import('../view/app/Courses'));
const Dashboard = lazy(() => import('../view/app/Dashboard'));
const NotFound = lazy(() => import('../compoents/notFound/404'));


const Ui_Router = () =>{
    return (
        <Suspense fallback={<Loader/>}>
            <Routes>
                <Route path={'/'} element={<Ui_Layout/>}>
                    <Route path={'/home'} element={<Dashboard/>}/>
                    <Route path={'/courses'} element={<Courses/>}/>
                    <Route path={'/certificate'} element={<Certificate/>}/>
                </Route>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
        </Suspense>
    )
}

export default Ui_Router;