import {templateAuthAction, templateAction} from '../template';
import * as modal from '../actions/defult-actions';





export const signIn = (data) => templateAuthAction('/login', 'post', 'users', data);
export const checkSignIn = (data) => templateAction('/login', 'get', 'users', data);