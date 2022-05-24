import React from 'react';
import IMG from 'next/image';
import { Layout, Menu, Breadcrumb, Row, Col, Divider } from 'antd';
import st2 from "./layout2.module.css"
import Link from 'next/link';
import { WhatsAppOutlined, InstagramOutlined, GoogleOutlined } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;

function getItem(label, key, icon, children, type) {
  return { key,icon,children,label,type, };
}

const items = [
  getItem(<Link href='/'>خانه</Link>, '1'),
  getItem('فروشگاه ▼', '2', null, [getItem(<Link href='/shop'>فروشگاه مرات شاپ</Link>, '21'), getItem(<Link href='/cart'>سبد خرید</Link>, '22'), getItem('پرداخت', '23')]),
  getItem(<Link href='/nazarSanji'>نظرسنجی</Link>, '3'),
  getItem(<Link href='/ggg'>چت روم</Link>, '4'),
  getItem('پزشکی ▼', '5', null, [getItem('معاینات و چک آپ منظم پزشکی', '51'), getItem('ارتباط با درمانگاها', '52')]),
  getItem('آموزش ▼', '6', null, [getItem('مشاوره کسب و کار', '61'), getItem('مشاوره کنکور', '62')]),
  getItem('آکادمی فولاد ▼', '7', null, []),
  getItem(<Link href='/pricing'>باشگاه مشتریان</Link>, '8'),
  getItem('رزرو هتل ▼', '9', null, [getItem('هتل مرات مشهد', '91'), getItem('هتل ملیسا مشهد', '92')]),
  getItem(<Link href='/foolad'>پنل کاربری</Link>, '10'),
];

const Layout2 = ({ children }) => (
  <Layout className="layoutyyy">
    <Header className={st2.myheader}>
      <div className={st2.logo}>
          <IMG src={"/img/meratLogo.png"} width='170px' height='71px' alt='merat' ></IMG>
      </div>

      <Menu className={st2.mymenu} mode='horizontal' theme='dark' items={items} defaultSelectedKeys={['1']} />
      
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '6px 0', direction: 'rtl' }}>
        <Breadcrumb.Item>صفحه نخست</Breadcrumb.Item>
        <Breadcrumb.Item>آموزش</Breadcrumb.Item>
        <Breadcrumb.Item>مشاوره کسب و کار</Breadcrumb.Item>
      </Breadcrumb>
      <div className={st2.site_layout_content}>{ children }</div>
    </Content>
    <Footer style={{direction:'rtl',color:'white',backgroundColor:'black' }}>
      {/* <Divider style={{border:'2px solid blue'}} /> */}
      <Row>
        <Col span={6}>
          <p className={st2.ffont}>تماس با ما</p>
          <p>آدرس ایمیل : info@meratkish.ir</p>
          <p>شماره تلفن : ۶ -۸۸۷۵۴۹۴۴ (۰۲۱)</p>
          <p>نشانی : تهران - خیابان شهید احمد قصیر (بخارست) - خیابان هشتم - شماره ۱۵ - طبقه سوم</p>
        </Col>
        <Col span={6}>
          ستون دوم
        </Col>
        <Col span={6}>
          ستون سوم
        </Col>
        <Col span={6}>
          <p className={st2.ffont}>شبکه های اجتماعی</p>
          <p>
            <a href='#'>
              <WhatsAppOutlined style={{fontSize:'34px'}} />  واتس اپ
            </a>
          </p>
          <p>
            <a href='#'>
              <InstagramOutlined style={{fontSize:'34px'}} />  اینستاگرام
            </a>
          </p>
          <p>
            <a href='#'>
              <GoogleOutlined style={{fontSize:'34px'}} />  گوگل
            </a>
          </p>

        </Col>
      </Row>
      <Divider orientation='center' style={{fontSize:'small',color:'white'}} >تمامی حقوق سایت برای ( مرآت کیش ) محفوظ است</Divider>
    </Footer>
    
  </Layout>
);

export default Layout2;