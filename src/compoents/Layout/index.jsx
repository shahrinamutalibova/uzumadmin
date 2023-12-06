import React, {useState} from 'react';
import {items} from './items';
import {Layout, Menu} from 'antd';
import {LayoutPart} from "./styled";
import {Outlet, useNavigate} from 'react-router-dom';
import {DoubleRightOutlined, DoubleLeftOutlined} from '@ant-design/icons';


const {Sider, Content} = Layout;

const Ui_Layout = () => {
        const [collapsed, setCollapsed] = useState(false);
        const navigate = useNavigate();
        const toggle = () => setCollapsed(prevState => !prevState);
        
        return (
            <LayoutPart>
                <Sider className={'sider'} trigger={null} collapsible collapsed={collapsed}>
                    <div className="logo">
                        {collapsed ? <img width={80} src="https://devel.prom.uz/upload/ORGANIZATIONS/4c/d4/4cd4a93ee7d9f6e529f343d59cd78da4.jpg" alt=""/> : <img width={100} src="https://bekrav.uz/wp-content/uploads/2023/03/Click-0156-2048x743.png" alt=""/>}
                    </div>
                    <Menu className={'menu'} theme="light" mode="inline" onClick={({key}) => navigate(key)}
                          defaultSelectedKeys={[window.location.pathname]} items={items}/>
                    <div className={'collapse'}>
                        {collapsed ? <DoubleRightOutlined onClick={toggle}/> : <DoubleLeftOutlined onClick={toggle}/>}
                    </div>
                </Sider>
                <Layout className="site-layout">
                    <Content className={'content'}>
                        <Outlet/>
                    </Content>
                </Layout>
            </LayoutPart>
        );
    }
;
export default Ui_Layout;