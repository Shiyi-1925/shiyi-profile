import React from 'react';
import intl from 'react-intl-universal';
import { HashRouter, Link } from 'react-router-dom';
import PageChange from './Pages/PageChange';
import './App.css';
import {
  Layout,
  Menu,
  BackTop,
  Row,
  Col,
  Button,
  Dropdown,
} from 'antd';
import {
  PhoneOutlined,
  UserOutlined,
  CarOutlined,
  BulbOutlined,
} from '@ant-design/icons';

const { Header, Footer, Sider } = Layout;

const locales = {
  "en-US": require('./locales/en-US.json'),
  "zh-CN": require('./locales/zh-CN.json'),
};

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { defaultSelectedKeys: ['1'], initDone: false };
    document.title = intl.get('PAGENAME');
  }

  componentDidMount() {
    this.loadLocales();
  }

  loadLocales() {
    intl.init({
      currentLocale: 'en-US',
      locales,
    })
      .then(() => {
        this.setState({ initDone: true });
      });
  }

  render() {

    return (
      <HashRouter>
        <BackTop />
        <Layout className="site-layout" style={{ marginLeft: 300}}>
          <Sider
            width="300px"
            style={{
              overflow: 'auto',
              height: '100vh',
              position: 'fixed',
              left: 0
            }}
          >
            <Menu theme="dark" mode="vertical" defaultSelectedKeys={this.state.defaultSelectedKeys}>
              <Menu.Item key="1" /*style={{height: '80px'}}*/ >
                <Link to={'/'}>
                  <UserOutlined />
                  <span className="nav-text">{intl.get('LANDING_PAGE')}</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to={'/auto'}>
                  <CarOutlined />
                  <span className="nav-text">{intl.get('PROJECT')}</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to={'/design'}>
                  <BulbOutlined />
                  <span className="nav-text">{intl.get('DESIGN')}</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link to={'/contact'}>
                  <PhoneOutlined />
                  <span className="nav-text">{intl.get('CONTACT')}</span>
                </Link>
              </Menu.Item>
              {/* <Menu.Item key="5">
                <Dropdown overlay={
                  <Menu>
                    <Menu.Item key="1" onClick={intl.load({ currentLocale: 'zh-CN', locales })}>中文</Menu.Item>
                    <Menu.Item key="2" onClick={intl.load({ currentLocale: 'en-US', locales })}>English</Menu.Item>
                  </Menu>
                }>
                  <Button>
                    Language 语言
                  </Button>
                </Dropdown>
              </Menu.Item> */}
            </Menu>
          </Sider>

          <Layout>
            <Header className="site-layout-background" style={{ padding: 0 }} />
            <PageChange />
            <Footer style={{ textAlign: 'center' }}>
              <Row>
                <Col xl={10}>Shiyi Chen</Col>
                <Col xl={4}>Version 3.0</Col>
                <Col xl={10}>2021.06 </Col>
              </Row>
            </Footer>
          </Layout>

        </Layout>
      </HashRouter>
    );
  }
}

export default App