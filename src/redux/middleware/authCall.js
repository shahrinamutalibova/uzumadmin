import axios from 'axios';
import {notification} from 'antd';
import history from '../../history';
import {updateState} from '../reducers';
import {API_BASE_URL, APP_PREFIX_PATH} from '../../config/AppConfig';
import {AUTH_TOKEN, TOKEN_PAYLOAD_KEY} from '../constants/Auth';



const authCall = ({dispatch}) => (next) => (action) => {
    if (action.type !== 'api/apiAuth') next(action);
    else {
        const {url, method, postData, stateName} = action.payload;
        try {
            axios({url: `${API_BASE_URL}${url}`, headers: {"apiKey":AUTH_TOKEN,"x-auth-token": TOKEN_PAYLOAD_KEY}, method, data: postData}).then((response) => {
                console.log(response);
                localStorage.setItem(AUTH_TOKEN, response.headers.get('X-Auth-Token'));
                if (stateName) {
                    dispatch(updateState({[stateName]: response.data}));
                }
                history.push(APP_PREFIX_PATH);
                window.location.reload();
            }).catch((error) => {
                notification.error({message: error.response.data});
            }).finally(() => {
                dispatch(updateState({loginLoader: false}));
            })
        } catch (error) {
            console.log(error);
        }
    }
}


export default authCall;