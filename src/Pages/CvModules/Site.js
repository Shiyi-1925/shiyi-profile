import React from 'react';
import { 
  Typography, Row, Col, Card
} from 'antd';

const { Title, Paragraph } = Typography;

const { Meta } = Card;

class Site extends React.Component{
    render(){
        return(
            <div className="site-layout-background" id="site" style={{ padding: 24, textAlign: 'left' }}>
              <Typography>
                <Title>2020.03 Mécatronique 网站设计</Title>
                <Paragraph>网站还在持续更新中：<span><a href="https://sites.google.com/view/2019-2020-gr10/home" target="_blank" rel="noopener noreferrer">https://sites.google.com/view/2019-2020-gr10/home</a></span></Paragraph>
                <Paragraph>设计工具：Google Site 框架</Paragraph>
              </Typography>
              <Row guttuer={16} justify="space-around" align="top">
                <Col span={10} textAlign="center">
                  <Card cover={<img src="sites.google.com_view_2019-2020-gr10_home(iPad Pro).png"/>}>
                    <Meta title="项目首页" style={{textAlign:"center"}}/>
                  </Card>
                </Col>
                <Col span={10} textAlign="center">
                  <Card cover={<img src="sites.google.com_view_2019-2020-gr10_marketing(iPad Pro).png"/>}>
                    <Meta title="新闻稿和宣传手册展示页面" style={{textAlign:"center"}}/>
                  </Card>
                </Col>
              </Row>
            </div>
        )
    }
}

export default Site