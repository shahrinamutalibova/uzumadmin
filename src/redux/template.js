import {createAction} from '@reduxjs/toolkit';


const apiCall = createAction('api/api-call');
const authCall = createAction('api/apiAuth');


export const templateAction = (url, method, stateName, postData, nextAction) => apiCall({
    url, 
    method, 
    stateName,
    postData,
    nextAction,
});


export const templateAuthAction = (url, method, stateName, postData) => authCall({
    url, 
    method, 
    postData,
    stateName,
})

