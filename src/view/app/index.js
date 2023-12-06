import React from 'react';
import {ConfigProvider, theme} from 'antd';
import Ui_Router from '../../Routes/routes';


const Cabinet = () => {
    return (
        <ConfigProvider theme={{algorithm: theme.darkAlgorithm}}>
            <Ui_Router/>
        </ConfigProvider>
    );
}

export default Cabinet;