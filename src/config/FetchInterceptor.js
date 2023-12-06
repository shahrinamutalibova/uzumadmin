import axios from 'axios'
import {API_BASE_URL, AUTH_PREFIX_PATH} from './AppConfig';
import history from '../history';
import {AUTH_TOKEN, TOKEN_PAYLOAD_KEY} from '../redux/constants/Auth';
import {notification} from 'antd';

const service = axios.create({
    baseURL: API_BASE_URL,
    timeout: 60000
})


service.interceptors.request.use(config => {
    const jwtToken = localStorage.getItem(AUTH_TOKEN);

    if (jwtToken) {
        config.headers[TOKEN_PAYLOAD_KEY] = jwtToken;
    }

    return config;
}, error => {
    notification.error({message: 'Error'});
    Promise.reject(error);
})

service.interceptors.response.use((response) => {
    return response.data
}, (error) => {
    let notificationParam = {message: ""};
    notificationParam.message = error.response.data.message;

    if (error.response.status === 400 || error.response.status === 403 || error.response.status === 401) {
        notificationParam.message = 'Authentication Fail';
        notificationParam.description = 'Please login again';
        localStorage.removeItem(AUTH_TOKEN);
        history.push(AUTH_PREFIX_PATH);
        // window.location.reload();
    }

    if (error.response.status === 404) notificationParam.message = 'Not Found';
    if (error.response.status === 500) notificationParam.message = "Interval server error";
    if (error.response.status === 508) notificationParam.message = 'Time Out';
    if (notificationParam.message) notification.error(notificationParam)

    return Promise.reject(error);
});

export default service;