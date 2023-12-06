import React, {useEffect, useState} from 'react';
import {Drawer, Button, Form, Input} from 'antd';
import {useSelector, useDispatch} from 'react-redux';
import {updateState} from '../../../redux/reducers';
import UploadImages from '../../../compoents/uploadImage';
import {addCourses, editCourses} from '../../../redux/actions/app';
import axios from 'axios';

const AddModal = () => {
    const {coursesModal, submitModalBtn, editCoursesData} = useSelector(state => state.app);
    const [image, setImage] = useState(null);
    const [form] = Form.useForm();
    const dispatch = useDispatch();

    const resetForm = () => {
        form.resetFields();
        setImage(null);
    }

  

    useEffect(() => {
        if (!coursesModal) {
            dispatch(updateState({editCoursesData: {}}));
            resetForm()
        } else {
            if (!editCoursesData?.id) resetForm();
        }
        if (editCoursesData?.id) {
            form.setFieldsValue(editCoursesData);
            setImage(editCoursesData?.image)
        }
    }, [coursesModal]);

    const onFinish = value => {
        dispatch(updateState({submitModalBtn: true}));

        if (editCoursesData?.id) {
            dispatch(editCourses({...value, image, id: editCoursesData.id}));
        } else {
            dispatch(addCourses({...value, image}));
        }
    }
    

    return (
        <div>
            <Button onClick={() => dispatch(updateState({coursesModal: true}))} className={'addBtn'}> Add product </Button>
            <Drawer 
                title={"Yangi product qo'shish"}
                open={coursesModal} 
                name="file"
                onClose={() => dispatch(updateState({coursesModal: false}))}
                extra={<Button onClick={() => form.submit()} loading={submitModalBtn} className={'addBtn'}> Save </Button>}
            >
                <div>
                    <UploadImages image={image} setImage={setImage}/>
                </div>
                <br/>
                <Form name='webinars' form={form} layout="vertical" onFinish={onFinish}>
                    <Form.Item label="Kurs nomi" name={'name'} rules={[{required: true}]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item label="Kurs narxi" name={'price'} rules={[{required: true}]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item label="Yo'nalishi" name={'direction'} rules={[{required: true}]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item label="Category" name={'category'} rules={[{required: true}]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item label="Kurs haqida qisqa malumot" name={'description'} rules={[{required: true}]}>
                        <Input.TextArea/>
                    </Form.Item>
                </Form>
            </Drawer>
        </div>
    );
}

export default AddModal;