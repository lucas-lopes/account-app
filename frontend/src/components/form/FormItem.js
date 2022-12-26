import { Form } from 'antd';
import InputItem from "./input/InputItem";

const FormItem = ({ label, tooltip, name, rules, placeholder, value }) => {
    return (
        <Form.Item label={label} tooltip={tooltip} name={name} rules={rules}>
            <InputItem placeholder={placeholder} value={value} />
        </Form.Item>
    )
}

export default FormItem;