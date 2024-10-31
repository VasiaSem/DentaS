import React from 'react';
import { Space, Table, Tag } from 'antd';
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
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
  },

  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Invite</a>
        <a>Delete</a>
      </Space>
    ),
  },
];
const data = [
  {
    key: '1',
    title: 'Консультація',
    time: '30 хв',
    discount: '-----------',
    price: 300,
  },
  {
    key: '2',
    title: 'Онлайн консультація',
    time: 30,
    discount: 'було 700',
    price: 560,
  },
  {
    key: '3',
    title: 'Відбілювання зубів ',
    time: '1 год',
    discount: 'було 4500',
    price: 4000,
  },
  {
    key: '4',
    title: 'Видалення зуба мудрості',
    time: '4хв - 1,5год',
    discount: '-----------',
    price: '2300-3900',
  },
  {
    key: '5',
    title: 'Коронка E-max',
    time: '1год',
    discount: 'було 12000',
    price: 10800,
  },
];
const ProductList = () => <Table columns={columns} dataSource={data} />;
export default ProductList;
