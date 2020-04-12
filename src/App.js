import React from 'react';
import {BrowserRouter, Link} from 'react-router-dom';
import PageChange from './Pages/PageChange';
import './App.css';
import { 
  Layout, 
  Menu,
  BackTop
} from 'antd';
import {
  PhoneOutlined,
  UserOutlined,
  CarOutlined,
  BulbOutlined,
} from '@ant-design/icons';
import enUS from 'antd/es/locale/en_US';
import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';

moment.locale('en');

const { Header, Content, Footer, Sider } = Layout;

class App extends React.Component{
  
  constructor() {
    super();
    this.state = {
      locale: enUS,
    };
  }

  changeLocale = e => {
    const localeValue = e.target.value;
    this.setState({ locale: localeValue });
    if (!localeValue) {
      moment.locale('en');
    } else {
      moment.locale('zh-cn');
    }
  };

  render() {
    const { locale } = this.state;
    return (
      <BrowserRouter>
        <BackTop/>
        <Layout className="site-layout" style={{ marginLeft: 200 }}>
          <Sider
            style={{
              overflow: 'auto',
              height: '100vh',
              position: 'fixed',
              left: 0
            }}
          >
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
              <Menu.Item key="1">
                <Link to={'/profile'}>
                  <UserOutlined />
                  <span className="nav-text">About Shiyi</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to={'/auto'}>
                  <CarOutlined />
                  <span className="nav-text">Professional Experience</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to={'/design'}>
                  <BulbOutlined />
                  <span className="nav-text">Design Inspirations</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link to={'/contact'}>
                  <PhoneOutlined />
                  <span className="nav-text">Contact</span>
                </Link>
              </Menu.Item>
            </Menu>
          </Sider> 
          
          <Layout>
            <Header className="site-layout-background" style={{ padding: 0 }} />
            <PageChange/>
            <Footer style={{ textAlign: 'center' }}>Shiyi Chen</Footer>
          </Layout>

        </Layout>
      </BrowserRouter>
    );
  }
}

export default App