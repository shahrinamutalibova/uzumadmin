import React, {useEffect, useState} from 'react';
import {Button, Drawer, Form, Input} from 'antd';
import {useDispatch, useSelector} from "react-redux";
import {updateState} from "../../../redux/reducers";
import UploadImages from "../../../compoents/uploadImage";
import {addCertificate, editCertificate} from "../../../redux/actions/app";

function AddCertificate() {
    const {isModal, isLoading, editData} = useSelector(state => state.app);
    const [image, setImage] = useState(null)

    const [form] = Form.useForm();
    const dispatch = useDispatch();
    const toggleModal = () => dispatch(updateState({isModal: !isModal}));

    const onFinish = value => {
        dispatch(updateState({isLoading:true}));
        if (editData?.id){
            dispatch(editCertificate({...value, image, id:editData.id}));
        } else {
            dispatch(addCertificate({...value, image}));
        }
    }
    useEffect(()=>{
        if (editData?.id){
            form.setFieldsValue(editData)
            setImage(editData.image)
        }
        if (!isModal){
            setImage(null)
            form.resetFields()
            dispatch(updateState({editData: {}}))
        }
    },[isModal])

    return (
        <div>
            <Button onClick={toggleModal} className={'addBtn'}> + Add Staffs </Button>
            <Drawer open={isModal} onClose={toggleModal} extra={<Button onClick={()=>form.submit()} loading={isLoading} className={'addBtn'}> Save </Button>}>
                <div><UploadImages image={image} setImage={setImage}/></div>
                <Form form={form} onFinish={onFinish} style={{marginTop: '20px'}} layout={"vertical"}>
                    <Form.Item name={'name'} label={'F.I.SH'} rules={[{required:true}]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item name={'code'} label={'Lavozim'} rules={[{required:true}]}>
                        <Input/>
                    </Form.Item>
                </Form>
            </Drawer>
        </div>
    );
}

export default AddCertificate;