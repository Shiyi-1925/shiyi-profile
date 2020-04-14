import React from 'react';
import { 
    Typography, Row, Col, Card
  } from 'antd';

const { Title, Paragraph } = Typography;

const { Meta } = Card;

class RubbishBin extends React.Component{
    render(){
        return(
            <div className="site-layout-background" id="rubbishbin" style={{ padding: 24, textAlign: 'left' }}>
              <Typography>
                <Title>2018.07 公共垃圾桶设计</Title>
                <Title level={4}>香港理工大学暑期课程《人本设计》项目</Title>
                <Paragraph>建模工具：SolidWorks</Paragraph>
                  <ul>
                    <li>心形不锈钢彩色分类垃圾桶</li>
                    <li>弧顶：防止行人将垃圾堆放在顶上</li>
                    <li>投入口屋檐设计引导雨水</li>
                    <li>新颖外形，四面均贴有回收标志</li>
                  </ul>
              </Typography>

              <Row gutter={24} justify="center">
              <Col span={10}>
                <Card cover={<img src="rubbish_1.jpg"/>}>
                  <Meta title="三维建模图" style={{textAlign:"center"}} />
                </Card>
              </Col>
              <Col span={10}>
                <Card cover={<img src="rubbish_2.jpg"/>}>
                  <Meta title="投入口细节图" style={{textAlign:"center"}}/>
                </Card>
              </Col>
              </Row>
            </div>
        )
    }
}

export default RubbishBin