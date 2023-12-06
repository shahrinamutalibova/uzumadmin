import {configureStore} from "@reduxjs/toolkit";
import Reducer from './reducers';
import apiCall from './middleware/apiCall';
import authCall from "./middleware/authCall";

export default configureStore({
    reducer: {app: Reducer},
    middleware: [apiCall, authCall]
});