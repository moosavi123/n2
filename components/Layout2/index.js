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
  getItem('فروشگاه ▼', '2', null, [getItem('سبد خرید', '21'), getItem('پرداخت', '22')]),
  getItem(<Link href='/nazarSanji'>نظرسنجی</Link>, '3'),
  getItem(<Link href='/chatroom'>چت روم</Link>, '4'),
  getItem('پزشکی ▼', '5', null, [getItem('معاینات و چک آپ منظم پزشکی', '51'), getItem('ارتباط با درمانگاها', '52')]),
  getItem('آموزش ▼', '6', null, [getItem('مشاوره کسب و کار', '61'), getItem('مشاوره کنکور', '62')]),
  getItem('آکادمی فولاد ▼', '7', null, [getItem('سبد خرید', '71'), getItem('پرداخت', '72')]),
  getItem(<Link href='/chatroom'>باشگاه مشتریان</Link>, '8'),
  getItem('رزرو هتل ▼', '9', null, [getItem('هتل مرات مشهد', '91'), getItem('هتل ملیسا مشهد', '92')]),
  getItem(<Link href='/chatroom'>پنل کاربری</Link>, '10'),
];

const Layout2 = ({ children }) => (
  <Layout className="layoutyyy">
    <Header className={st2.myheader}>
      <div className={st2.logo}>
          <IMG src={"/img/meratLogo.png"} width='170px' height='71px' alt='merat' ></IMG>
      </div>

      <Menu className={st2.mymenu} mode='horizontal' theme='dark' items={items} />
      
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '6px 0', direction: 'rtl' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div className={st2.site_layout_content}>{ children }</div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>
);

export default Layout2;