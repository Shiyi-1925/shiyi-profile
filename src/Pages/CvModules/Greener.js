import React from 'react';
import { 
    Typography, Row, Card, Col
  } from 'antd';

const { Title, Paragraph} = Typography;

const{ Meta } = Card;

class Greener extends React.Component{
    render(){
        return(
            <div className="site-layout-background" id="greener" style={{ padding: 24, textAlign: 'left' }}>
              <Typography>
                <Title>2019.10 Go Greener 概念生态农场</Title>
                <Title level={4}>UX design sprint – Télécom ParisTech</Title>
                <Paragraph>设计工具：Figma</Paragraph>
              </Typography>
              
              <Row gutter={16} justify="space-around">
                <Col span={4} textAlign="center">
                  <Card cover={<img src="Go greener discovery.png" />}>
                    <Meta title="宣传网站原型" style={{textAlign:"center"}}/>
                  </Card>
                </Col>
                <Col span={16} textAlign="center">                 
                  <Card cover={<img src="02_EGGPLANT_CHEN SHIYI_REFINE_SKETCH.jpg" />}>
                    <Meta title="生态农场故事板" style={{textAlign:"center"}}/>
                  </Card>
                </Col>
              </Row>
            </div>
        )
    }
}

export default Greener