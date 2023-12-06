import React, {useEffect} from 'react';
import AddCertificate from "./addCertificate";
import {deleteCertificate, editCertificate, getCertificate} from "../../../redux/actions/app";
import {updateState} from "../../../redux/reducers";
import {useDispatch, useSelector} from "react-redux";
import {Button, Popconfirm, Switch, Table} from "antd";
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";


function Certificate(props) {
    const {certificate} = useSelector(state => state.app);
    const dispatch = useDispatch();
    console.log(certificate)
    useEffect(()=>{
        dispatch(getCertificate());
    },[]);

    const confirm = (e) => {
        dispatch(deleteCertificate(e.id));
    }

    const columns = [
        {
            title:'N',
            render:(a,b,index) => index+1
        },
        {
            title: 'FISH',
            render:(item)=> <div className={'courseImg'}>
                <img src={item?.image} alt="no-img"/>
                <span>{item?.title}</span>
            </div>
        },
        {
            title: 'Lavozim',
            dataIndex: 'position',
        },
        {
            title: "Ma'lumot",
            dataIndex: "description",
        },
        {
            title: 'Holat',
            render:(e)=> <Switch onChange={(status)=> dispatch(editCertificate({...e,status})) } checked={e?.status} />
        },
        {

            render:(e)=> <div className={'actions'}>
                <Button onClick={()=>dispatch(updateState({isModal:true, editData:e}))} style={{padding: 0}} type={'primary'} > <EditOutlined /> </Button>
                <Popconfirm
                    title="Delete the task"
                    description="Are you sure to delete this task?"
                    onConfirm={()=>confirm(e)}
                    okText="Yes"
                    cancelText="No"
                    placement="leftTop"
                >
                    <Button  style={{padding: 0}}  type={'primary'} danger > <DeleteOutlined /> </Button>
                </Popconfirm>
            </div>
        }
    ]

    return (
        <div>
            <div className="Header">
                <h2 className={'titleColor'}> Staffs </h2>
                <div className="actions">
                    <AddCertificate/>
                </div>
            </div>
            <Table columns={columns} dataSource={certificate}/>
        </div>
    );
}

export default Certificate;