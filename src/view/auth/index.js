import React, {useEffect} from 'react';
import {AuthPage} from './style';
import history from '../../history';
import {Input, Form, Button} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {AUTH_TOKEN} from '../../redux/constants/Auth';
import {APP_PREFIX_PATH} from '../../config/AppConfig';
import {signIn, checkSignIn} from '../../redux/actions/auth';
import {updateState} from '../../redux/reducers';



const Auth = () => {
    const dispatch = useDispatch();
    const {users, loginLoader} = useSelector(state => state.app);

    useEffect(() => {
        if (users?.id && localStorage.getItem(AUTH_TOKEN)) {
            history.push(APP_PREFIX_PATH);
            window.location.reload();
        }
    }, [users]);

    useEffect(() => {
        if (localStorage.getItem(AUTH_TOKEN)) {
            dispatch(checkSignIn());
        }
    }, []);
    
    const Login = value => {
        console.log(value);
        dispatch(signIn(value));
        dispatch(updateState({loginLoader: true}))
    }

    return (
        <AuthPage>
            <div className={'card'}>
                <div className="logo">
                    <img src="https://bekrav.uz/wp-content/uploads/2023/03/Click-0156-2048x743.png" alt="" />
                </div>
                <Form onFinish={Login} >
                    <Form.Item name={'email'} 
                        rules={
                            [
                                {required: true, message: 'Please input your email address'},
                                {type: 'email', message: 'Please enter a validate email!'}
                            ]
                        }
                    >
                        <Input placeholder={'Email'} />
                    </Form.Item>
                    <Form.Item name={'password'}
                        rules={
                            [
                                {required: true, message: 'Please input your email address'},
                            ]
                        }
                    >
                        <Input placeholder={'Password'} type={'password'}/>
                    </Form.Item>
                    <Form.Item>
                        <Button className='btn' loading={loginLoader} htmlType="submit" > Kirish </Button>
                    </Form.Item>
                </Form>
            </div>
        </AuthPage>
    );
}

export default Auth;