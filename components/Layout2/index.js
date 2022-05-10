import React from 'react';
import IMG from 'next/image';
import { Layout, Menu, Breadcrumb } from 'antd';
import st2 from "./layout2.module.css"
import Link from 'next/link';
const { Header, Content, Footer } = Layout;

function getItem(label, key, icon, children, type) {
  return { key,icon,children,label,type, };
}

const items = [
  getItem(<Link href='/'>خانه</Link>, '1'),
  
  getItem(<Link href='/nazarSanji'>نظرسنجی</Link>, '2')

];

export default ({ children }) => (
  <Layout className="layoutyyy">
    <Header className={st2.myheader}>
      <div className={st2.logo}>
          <IMG src={"/img/meratLogo.png"} width='170px' height='71px' ></IMG>
      </div>
      <Menu className={st2.mymenu} mode="horizontal">
        <Menu.Item key={1}><Link href='/'>خانه</Link></Menu.Item>
        <Menu.SubMenu key={2} title="فروشگاه">
          <Menu.Item key={3}>سبد خرید</Menu.Item>
          <Menu.Item key={4}>پرداخت</Menu.Item>
        </Menu.SubMenu>
        <Menu.Item key={5}>
          <Link href='/nazarSanji'>نظرسنجی</Link>
        </Menu.Item>
        <Menu.Item key={6}>چت روم</Menu.Item>
      </Menu>

      <Menu mode='horizontal' theme='light' items={items} />
      
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