import React from 'react';
import IMG from 'next/image';
import { Layout, Menu, Breadcrumb } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import st2 from "./layout2.module.css"
const { Header, Content, Footer } = Layout;

export default ({ children }) => (
  <Layout className="layoutyyy">
    <Header className={st2.myheader}>
      <div className={st2.logo}>
          <IMG src={"/img/meratLogo.png"} width='170px' height='71px' ></IMG>
      </div>
      <Menu className={st2.mymenu} 
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        items={[
            {
              label: ' فروشگاه ', icon:<MailOutlined /> ,
              children: [{ label: 'فروشگاه مرآت شاپ' },{ label: 'سبد خرید' },{ label: 'پرداخت' }],
            },
            { label: 'نظرسنجی', disabled: true, },
            { label: 'گفتگو' },
          ]}
      />
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div className={st2.site_layout_content}>{ children }</div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>
);