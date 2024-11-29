import React, { useState } from 'react';
import {
  DesktopOutlined,
  FileOutlined,
  HomeFilled,
  InfoCircleFilled,
  PieChartOutlined,
  PlusCircleFilled,
  ProductFilled,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Link, Outlet } from 'react-router-dom';
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem('Home', '1', <HomeFilled/>),
  getItem('Products', '2', <ProductFilled />),
  getItem('About', '3', <InfoCircleFilled />),
  getItem('User', 'sub1', <UserOutlined />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  
];

const AppLayout = () => {

  
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />

        <Menu 
        theme="dark" 
        defaultSelectedKeys={['1']} 
        mode="inline" 
        // items={items} />
        items={[
          {
            key: '1',
            icon: <HomeFilled/>,
            label: <Link to="/">Home</Link>
          },
          {
            key: '2',
            icon: <ProductFilled/>,
            label: <Link to="/products">Products</Link>
          },
          {
            key: '3',
            icon: <PlusCircleFilled/>,
            label: <Link to="/create">Create Product</Link>
          },
          {
            key: '4',
            icon: <InfoCircleFilled/>,
            label: <Link to="/about">About</Link>
          },
        
      ]}
      />
      </Sider>

      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        <Content
          style={{
            margin: '0 16px',
          }}
        >
            <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
          <Breadcrumb
            style={{
              margin: 'px 0',
            }}
          >
          
            <Breadcrumb.Item>СТУДІЯ СТОМАТОЛОГІЇ</Breadcrumb.Item>
       
          </Breadcrumb>
          </div>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
           <Outlet/>
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
export default AppLayout;