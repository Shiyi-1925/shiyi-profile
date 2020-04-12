import React from 'react';

import { 
    Layout, Descriptions,
  } from 'antd';
  
const { Content } = Layout;

const Tel = "+86 18930719839";
const Address = "shiyi.chen@mines-paristech.fr";
const LinkedInAddress = "www.linkedin.com/in/shiyi-chen-090ab7167";

class PageContact extends React.Component{  
    render() {
      return ( 
        <Content style={{ margin: '24pt 16pt 0', overflow: 'initial' }}>
            <div className="site-layout-background" style={{ padding: 24, textAlign: 'left' }}>
                <Descriptions title="联系方式" bordered>
                <Descriptions.Item label="联系电话" span={2}>{Tel}</Descriptions.Item>
                    <Descriptions.Item label="E-mail" span={2}>
                        <a href="mailto:"Address>{Address}</a>
                    </Descriptions.Item>
                    <Descriptions.Item label="LinkedIn" span={4}>{LinkedInAddress}</Descriptions.Item>
                    <Descriptions.Item label="GitHub" span={4}></Descriptions.Item>
                </Descriptions>
            </div>    
        </Content>                
        )
    }
}

export default PageContact