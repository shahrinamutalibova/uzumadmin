import {createSlice} from "@reduxjs/toolkit";
import axios from "axios"

const initialState = {
    users: [],
    dashboard: [],
    courses: [],
    webinar: [],
    certificate: [],
    support: [],
    announcements: [],
    video: [],
    teams: [],
    contact: [],
    editCoursesData: {},
    editData: {},
    loginLoader: false,
    submitModalBtn: false,
    isLoading: false,
    coursesModal: false,
    isModal: false,
}

const Reducer = createSlice({
    name: 'reducer',
    initialState,
    reducers:{updateState: (state, action) => ({...state, ...action.payload})}
})
export const {updateState} = Reducer.actions;
export default Reducer.reducer;