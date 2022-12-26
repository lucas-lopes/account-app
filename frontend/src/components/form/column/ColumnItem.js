import { Col } from 'antd';

import FormItem from '../FormItem';

const ColumnItem = ({ span, label, tooltip, name, rules, placeholder, value }) => {
    return (
        <Col span={span}>
            <FormItem 
                label={label} 
                tooltip={tooltip} 
                name={name} 
                rules={rules} 
                placeholder={placeholder} 
                value={value} 
            />
        </Col>
    )
}

export default ColumnItem;