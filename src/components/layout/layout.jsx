import home from '../../assets/img/house.png';
import dashboard from '../../assets/img/dashboard.png';
import downarrow from '../../assets/img/down-arrow.png';
import product from '../../assets/img/note.png';
import admin from '../../assets/img/settings.png';
import Pageroute from "../pages/pagesRoutes";
import menuicon from "../../assets/img/hamburger.png"
import searchicon from "../../assets/img/search.svg"
import downicon from "../../assets/img/chevron-down.svg"
import profileicon from "../../assets/img/profile-pic-01.jpg";
import usericon from "../../assets/img/user.svg";
import logout from "../../assets/img/log-out.svg";
import billing from "../../assets/img/file-text.svg";
import bell from "../../assets/img/bell.svg";
import { Dropdown, Space } from 'antd';
import { Layout, Menu, theme } from 'antd';
import { Input } from 'antd';
import React, { useState } from 'react';
const { Header, Sider, Content } = Layout;
export const LayoutContent = () => {
  const [collapsed, setCollapsed] = useState(false);
 
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const items = [
    {
      key: '0',
      label: <a>My Profile</a>,
      icon: <img src={usericon} alt="" />,
    },
    {
      key: '1',
      label: <a >Billing</a>,
      icon: <img src={billing} alt="" />,
    },
    {
      key: '3',
      label: <a>Logout</a>,
      icon: <img src={logout} alt="" />,

    },
  ];
  const itemsnof = [
    {
      key: '0',
      label: <a>My Profile</a>,
      icon: <img src={usericon} alt="" />,
    },
    {
      key: '1',
      label: <a >Billing</a>,
      icon: <img src={billing} alt="" />,
    },
    {
      key: '3',
      label: <a>Logout</a>,
      icon: <img src={logout} alt="" />,

    },
  ];
  return (
    <Layout>
      <Sider trigger={null}    collapsed={collapsed}>
          <div className="sidenav__logo">
            ACME
          </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <img src={home} alt="" />,
              label: 'Home',
            },
            {
              key: '2',
              icon: <img src={dashboard} alt="" />,
              label: 'Dashboard'
            },
            {
              key: '3',
              icon: <img src={downarrow} alt="" />,
              label: 'Inbox',
            },
            {
              key: '4',
              icon: <img src={product} alt="" />,
              label: 'Product',
            },
            {
              key: '5',
              icon: <img src={admin} alt="" />,
              label: 'Admin'
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <div className='header-bg'>
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
          >
            <div className='header-inner'>
              <div className='header-search'>
                <img className='menu-icon' src={menuicon} alt="" onClick={() => setCollapsed(!collapsed)} />
                <div>
                  <img className='search-icon' src={searchicon} alt="" />
                  <Input className='input-box' placeholder="Search transaction, invoices or help" />
                </div>
              </div>
              <div className='header-search'>
                {/* <Dropdown
                  menu={{
                    itemsnof,
                  }}
                  trigger={['click']}
                >
                  <a onClick={(e) => e.preventDefault()}>
                    <Space>
                     
                    </Space>
                  </a>
                </Dropdown> */}
                 <img className='search-icon' src={bell} alt="" />

                <Dropdown
                  menu={{
                    items,
                  }}
                  trigger={['click']}
                >
                  <a onClick={(e) => e.preventDefault()}>
                    <Space>
                      John Doe
                      <img src={downicon} alt="" />
                      <img className='profile-icon' src={profileicon} alt="" />
                    </Space>
                  </a>
                </Dropdown>
              </div>
            </div>


          </Header>
        </div>
        <Content>
          <div className='layout'>
          <Pageroute></Pageroute>
          </div>
  
        </Content>
      </Layout>
    </Layout>
  );
};