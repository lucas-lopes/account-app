import { UserOutlined } from '@ant-design/icons';
import { Input } from 'antd';

const InputItem = ({ placeholder, value }) => {
    return <Input size="large" placeholder={placeholder} value={value} prefix={<UserOutlined />} />;
}

export default InputItem;