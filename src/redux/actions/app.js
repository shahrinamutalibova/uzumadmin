import {templateAction} from '../template';
import * as modal from '../actions/defult-actions';
import axios from 'axios';


export const getCourses = () => templateAction(`/courses`, 'get', 'courses');
export const addCourses = (data) => templateAction('/courses', 'post', null, data, [getCourses, modal.coursesModalToggle]);
export const editCourses = (data) => templateAction('/courses/' + data.id, 'put', null, data, [getCourses, modal.coursesModalToggle]);
export const deleteCourses = (id) => templateAction('/courses/'+ id, 'delete', null, null, [getCourses]);
export const changeCoursesStatus = (data) => templateAction('/courses/' + data.id, 'put', null, data, [getCourses]);



export const getWebinars = () => templateAction('/webinar', 'get', 'webinar');
export const addWebinars = data => templateAction('/webinar', 'post',null, data, [getWebinars]);
export const deleteWebinar = id => templateAction('/webinar/'+id, 'delete', null, null, [getWebinars]);
export const editWebinar = data => templateAction('/webinar/'+data.id, 'put', null, data, [getWebinars]);

export const getCertificate = () => templateAction('/certificate', 'get', 'certificate');
export const addCertificate = data => templateAction('/certificate','post',null,data,[getCertificate]);
export const deleteCertificate = id => templateAction('/certificate/'+id, 'delete', null,null,[getCertificate]);
export const editCertificate = data => templateAction('/certificate/'+data.id, 'put', null, data,[getCertificate]);


