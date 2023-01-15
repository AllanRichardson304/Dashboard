import Pageroute from "../pages/pagesRoutes"
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import React, { useState } from 'react';
const { Header, Sider, Content } = Layout;
export const LayoutContent = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  // const MenuFoldOutlined ={
  //    minWidth:'290px'
  // }
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="sidenav__logo">
            ACME
        </div>
      <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'Home',
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: 'Dashboard'
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'Inbox',
            },
            {
              key: '4',
              icon: <UploadOutlined />,
              label: 'Product',
            },
            {
              key: '5',
              icon: <VideoCameraOutlined />,
              label: 'Admin'
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}
        </Header>
        <Content>
          <Pageroute></Pageroute>
        </Content>
      </Layout>
    </Layout>
  );
};