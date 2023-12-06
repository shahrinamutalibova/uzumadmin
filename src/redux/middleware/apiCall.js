import call from '../../config/FetchInterceptor';
import {notification} from 'antd';
import {updateState} from '../reducers';
import {AUTH_TOKEN, TOKEN_PAYLOAD_KEY} from '../constants/Auth';


const apiCall = ({dispatch}) => (next) => (action) => {
    if (action.type !== 'api/api-call') next(action); 
    else {
        const {url, method, postData, nextAction, stateName} = action.payload;
try{
            call({url: `https://f-07-backend.vercel.app/api/v1/product`, headers: {"apiKey":AUTH_TOKEN,"x-auth-token": TOKEN_PAYLOAD_KEY}, method, data: postData}).then((data) => {
                if (stateName) dispatch(updateState({[stateName]: data}));
                if (nextAction?.length) for(let afterAction of nextAction) dispatch(afterAction());
                if (data.message) notification.success({message: data.message});
                dispatch(updateState({isModal: false}))
            }).catch((error) => {
                console.log(error)
            }).finally(() => dispatch(updateState({isLoading: false})));
        } catch(err) {
            console.log(err);
        }
    }
}

export default apiCall;