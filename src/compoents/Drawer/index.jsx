import React, {useState} from 'react';
import {Drawer, Form, Input, InputNumber, Button, Select, Switch, Row, Col} from 'antd';
import {postCourses, getCourses, coursesModalToggle} from "../../Redux/actions";
import {useDispatch, useSelector} from "react-redux";
import Avatar from "antd/es/avatar";
import CameraOutlined from "@ant-design/icons/lib/icons/CameraOutlined";
import {PlusOutlined} from "@ant-design/icons";
import axios from 'axios';

function DrawerPage() {
    const {coursesModal} = useSelector(state => state.Modal)
    const dispatch = useDispatch()


    const layout = {
        labelCol: {span: 24,},
        wrapperCol: {span: 24,},
    };
    const validateMessages = {
        required: '${label} is required!',
        types: {
            email: '${label} is not a valid email!',
            number: '${label} is not a valid number!',
        },
        number: {range: '${label} must be between ${min} and ${max}',},
    };
    

    const onFinish = (values) => {
        dispatch(postCourses(values))
        dispatch(getCourses())
    };

    const uploadImg = e => {

    }



    return (
        <>
            <Button onClick={() => dispatch(coursesModalToggle({coursesModal: true}))} className={'addBtn'}><PlusOutlined /> Kurs qo'shish </Button>
            <Drawer width={400} title="Yangi kurs qo'shish" placement="right" className={'normalDark'} onClose={() => dispatch(coursesModalToggle({coursesModal: false}))}
                    open={coursesModal}>
                <Form {...layout} name="nest-messages" onFinish={onFinish} style={{maxWidth: 600,}}
                      validateMessages={validateMessages} className={'form'}>

                    <label htmlFor={"img"} className={'uploadLabel'}>
                        <Avatar size={80} src={<CameraOutlined/>} className={'upload'}/>
                        <div className={"avatar-text"}> Kurs rasmini yuklang <br/> <span/></div>
                    </label>
                    <input type="file" onChange={(e) => uploadImg(e.target.files[0])} id={'img'}
                           style={{display: 'none'}}/>
                    <Form.Item name={'img'} label="Img" rules={[{required: true,},]}>
                        <Input rootClassName={'inputDark'}/>
                    </Form.Item>
                    <Form.Item name={'name'} label="Name" rules={[{required: true,},]}>
                        <Input rootClassName={'inputDark'}/>
                    </Form.Item>
                    <Form.Item name={'category'} label="Category">
                        <Select rootClassName={'inputDark'}>
                            <Select.Option value="1"> 1 </Select.Option>
                            <Select.Option value="2"> 2 </Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item name={'description'} label="Description">
                        <Input.TextArea className={'inputDark'}/>
                    </Form.Item>
                    <Row justify={"space-between"}>
                        <Col span={15}>
                            <Form.Item name={'price'} label="Price">
                                <Input type={'number'} rootClassName={'inputDark'}/>
                            </Form.Item>
                        </Col>
                        <Col span={6}>
                            <Form.Item name={'status'} label="Status" valuePropName="checked">
                                <Switch style={{width: '60px'}} className={'switch'}/>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Form.Item name={'direction'} label="Direction">
                        <Input.TextArea className={'inputDark'}/>
                    </Form.Item>

                    <Form.Item wrapperCol={{...layout.wrapperCol, offset: 7}}>
                        <Button type="primary" htmlType="submit" style={{width: '60%'}}>
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Drawer>
        </>
    );
}

export default DrawerPage;