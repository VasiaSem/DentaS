import React, { useState } from 'react';
import { Button, message, Popconfirm, Space, Table, Tag } from 'antd';
import { DeleteOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const data = [
    {
        key: '1',
        title: 'Консультація',
        time: '30 хв',
        discount: 0,
        price: 300,
    },
    {
        key: '2',
        title: 'Онлайн консультація',
        time: 30,
        discount: 700,
        price: 560,
    },
    {
        key: '3',
        title: 'Відбілювання зубів ',
        time: '1 год',
        discount: 4500,
        price: 4000,
    },
    {
        key: '4',
        title: 'Видалення зуба мудрості',
        time: '40хв - 1,5год',
        discount: 0,
        price: '2300-3900',
    },
    {
        key: '5',
        title: 'Коронка E-max',
        time: '1год',
        discount: 12000,
        price: 10800,
    },
];

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
