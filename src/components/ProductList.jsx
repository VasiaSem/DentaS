import React, { useState } from 'react';
import { Button, message, Popconfirm, Space, Table, Tag } from 'antd';
import { DeleteOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { data } from './Vmist';

const ProductList = () => {

    const [products, setProducts] = useState(data);

    const columns = [
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Time',
            dataIndex: 'time',
            key: 'time',
        },
        {
            title: 'Discount',
            key: 'discount',
            dataIndex: 'discount',
            render: (text, i) => <span> <Tag color="blue"><del>{i.discount}</del></Tag></span>
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
        },
    
        {
            title: 'Action',
            id: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <Link to={`/details/${record.key}`}>
                    <Button color primary icon={<InfoCircleOutlined />} />
                    </Link>
                    <Popconfirm
                        title="Delete the product?"
                        description={`Are you sure to delete ${record.title}?`}
                        onConfirm={() => onDelete(record.key)}
                        okText="Yes"
                        cancelText="No"
                    >
                          <Button color danger icon={<DeleteOutlined />} />
                    </Popconfirm>
                </Space>
            ),
        },
    ];
   
    
    const onDelete = (id) => {
        const index = products.findIndex(x => x.key === id);
        if(index !== -1){
           // fetch(api + id,{
             //   method: "DELETE"
            //}).then(res => {
              //  if (res.status === 200)
               // {
                    setProducts(products.filter((_, i) => i !== index))
                    message.success('Product deleted successfully!');
                }
                //else
                //message.error('Something went wrong!');
         //   })
       //}
       else
       message.error('Product does not found!');
    }

    return (<Table columns={columns} dataSource={products} />)

}


export default ProductList;
