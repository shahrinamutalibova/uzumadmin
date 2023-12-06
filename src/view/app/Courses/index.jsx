import React, {useEffect, useState} from 'react';
import AddModal from './addModal';
import {CoursePage} from './styled';
import {Input, Button, Table, Switch} from 'antd';
import {useSelector, useDispatch} from "react-redux";
import {deleteCourses, getCourses, changeCoursesStatus} from '../../../redux/actions/app';
import {DeleteOutlined, EditOutlined} from '@ant-design/icons';
import { updateState } from '../../../redux/reducers';


function Courses() {
    const {courses, editCoursesData} = useSelector(state => state.app)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getCourses())
    },[])

    const deleteCourseItem = (id) => {
        dispatch(deleteCourses(id));
    }

    const handleStatus = (item, status) => {
        dispatch(changeCoursesStatus({...item, status}));
    }

    const editCourse = (item) => {
        dispatch(updateState({coursesModal: true, editCoursesData: item}));
    }

    const columns = [
        {   
            title: "N",
            width: '50px',
            align: 'center',
            render: (item, index, number) => number + 1
        },
        {
            title: 'Kurs nomi', 
            render: (item) => 
                <div className={'courseImg'}>
                    <img src={item.image} alt="no foto"/> 
                    <span>{item.name}</span> 
                </div>, 
        },
        {
            title: 'Category', 
            dataIndex: 'category', 
        },
        {
            title: 'Narx', 
            dataIndex: 'price', 
            render:(item) => new Intl.NumberFormat().format(item)
        },
        {
            title: "Yo'nalish", 
            dataIndex: 'direction', 
        },
        {
            title: 'Tavsif', 
            dataIndex: 'description', 
            width: '250px',
            render: (record) => <p style={{fontSize: '12px'}}>{record}</p>
        },
        {
            title: 'Holat', 
            render:(item) => <Switch onChange={(e) => handleStatus(item, e)} checked={item.status}/>
        },
        {
            align: 'center',
            render:(e)=> <div className={'actions'}>
                <Button onClick={() => editCourse(e)} style={{padding: 0}} type={'primary'} > <EditOutlined /> </Button>
                <Button style={{padding: 0}}  type={'primary'} danger onClick={() => deleteCourseItem(e.id)} > <DeleteOutlined /> </Button>
            </div>
        }
    ];

    return (
        <CoursePage>
            <div className={'Header'}>
                <h2 className={'titleColor'}> Products </h2>
                <div className="actions">
                    <Input rootClassName={'search'} placeholder="Search"/>
                    <AddModal/>
                </div>
            </div>
            <Table 
                bordered
                rowKey={'id'} 
                mode={'dark'} 
                size={'small'} 
                columns={columns} 
                dataSource={courses} 
            />
        </CoursePage>
    );
}

export default Courses;