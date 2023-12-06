import React from 'react';
import {API_BASE_URL} from '../../config/AppConfig';
import {TOKEN_PAYLOAD_KEY, AUTH_TOKEN} from '../../redux/constants/Auth';
import {InboxOutlined} from '@ant-design/icons';
import {Upload, message} from 'antd';



const UploadImages = ({ image, setImage }) => {
    const [messageApi, contextHolder] = message.useMessage();

    const props = {
        name: 'image',
        multiple: false,
        action: `${API_BASE_URL}/file`,
        headers: {
            'X-Auth-Token': localStorage.getItem(AUTH_TOKEN) || TOKEN_PAYLOAD_KEY,
            'apiKey': AUTH_TOKEN
        },
        onChange(info) {
            const {status} = info.file;
            if (status !== 'uploading') {
                if (info.file?.response?.url) setImage(info.file?.response?.url);
                else setImage(null);
            }
            if (status === 'done') {
                messageApi.open({ type: 'success', content: `${info.file.name} file uploaded successfully.`})
            } else if (status === 'error') {
                messageApi.open({ type: 'error', content: `${info.file.name} file upload failed.`})
            } else if (status === "removed") {
                setImage(null);
            }
        }
    };

    return (
        <>
            <Upload.Dragger {...props}>
                {image === null ?
                    <>
                        <p className="ant-upload-drag-icon">
                            <InboxOutlined />
                        </p>
                        <p className="ant-upload-text"> Rasm yuklash uchun ushbu hududga bosing </p>
                        <p className="ant-upload-hint"> Taqiqlangan fayllarni yuklash <br /> qat'iyan man etiladi. <br /> </p>
                    </> :
                    <img src={image} style={{width: '100%'}} alt='error'/>
                }
            </Upload.Dragger>
            {contextHolder}
        </>
    );
}

export default UploadImages;
