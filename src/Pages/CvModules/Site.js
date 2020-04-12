import React from 'react';
import { 
    Layout, 
    Typography
  } from 'antd';

const { Content } = Layout;

const { Title } = Typography;

class Site extends React.Component{
    render(){
        return(
            <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
            <div className="site-layout-background" style={{ padding: 24, textAlign: 'left' }}>
              <Typography>
                <Title>2020.03 Mécatronique 网站及周报设计</Title>
                https://sites.google.com/view/2019-2020-gr10/home
                Newsletter?
              </Typography>
              <img src="sites.google.com_view_2019-2020-gr10_home(iPad Pro).png" height="800pt"/>
              <img src="sites.google.com_view_2019-2020-gr10_marketing(iPad Pro).png" height="800pt"/>
            </div>
          </Content>
        )
    }
}

export default Site