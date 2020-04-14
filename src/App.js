import React from 'react';
import {BrowserRouter, Link} from 'react-router-dom';
import PageChange from './Pages/PageChange';
import './App.css';
import { 
  Layout, 
  Menu,
  BackTop,
  Row,
  Col,
} from 'antd';
import {
  PhoneOutlined,
  UserOutlined,
  CarOutlined,
  BulbOutlined,
} from '@ant-design/icons';

const { Header, Footer, Sider } = Layout;

class App extends React.Component{

  constructor(props){
    super(props);
    this.state={ defaultSelectedKeys: ['1']};
    document.title = '陈诗艺的个人主页';
  }

  render() {

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
            <Menu theme="dark" mode="vertical" defaultSelectedKeys={this.state.defaultSelectedKeys}>
              <Menu.Item key="1">
                <Link to={'/'}>
                  <UserOutlined />
                  <span className="nav-text">我的首页</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to={'/auto'}>
                  <CarOutlined />
                  <span className="nav-text">项目与实习经历</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to={'/design'}>
                  <BulbOutlined />
                  <span className="nav-text">设计创意灵感</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link to={'/contact'}>
                  <PhoneOutlined />
                  <span className="nav-text">联系我</span>
                </Link>
              </Menu.Item>
            </Menu>
          </Sider> 
          
          <Layout>
            <Header className="site-layout-background" style={{ padding: 0 }} />
            <PageChange/>
            <Footer style={{ textAlign:'center' }}>
              <Row>
                <Col xxl={10}>Shiyi Chen</Col>
                <Col xxl={4}>Version 1.0</Col>
                <Col xxl={10}>2020.04 </Col>
              </Row>
            </Footer>
          </Layout>

        </Layout>
      </BrowserRouter>
    );
  }
}

export default App