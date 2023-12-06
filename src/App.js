import React from 'react';
import View from './view';
import {ConfigProvider, theme} from 'antd';
import {BrowserRouter} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <ConfigProvider theme={{algorithm: theme.darkAlgorithm}}>
                <View/>
            </ConfigProvider>
        </BrowserRouter>
    );
}

export default App;