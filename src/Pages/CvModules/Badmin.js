import React from 'react';
import { 
    Typography, Carousel, Row, Card, Col
  } from 'antd';
  
const { Title, Paragraph } = Typography;

const{ Meta } = Card;

class Badmin extends React.Component{
    render(){
        return(
            <div className="site-layout-background" id="badmin" style={{ padding: 24, textAlign: 'left' }}>
              <Typography>
                <Title>2016.09 同济大学羽毛球协会宣传品设计</Title>
                <Paragraph>设计工具：Adobe Illustrator, Adobe Photoshop</Paragraph>
              </Typography>

              <Row gutter={[16,16]} justify="center" align="middle">
                <Col span={12} textAlign="center">
                  <Carousel autoplay>
                    <Card cover={<img src={require('../../img/2016秋季嘉定羽协会员手册-外.jpg')} alt=""/>}>
                      <Meta title="2016秋季嘉定羽协会员手册封面" style={{textAlign:"center"}}/>
                    </Card>
                    <Card cover={<img src={require('../../img/2016秋季嘉定羽协会员手册-内.jpg')} alt=""/>}>
                      <Meta title="2016秋季嘉定羽协会员手册内页" style={{textAlign:"center"}}/>
                    </Card>
                  </Carousel>
                </Col>
              </Row>
              <Row gutter={[16,16]} justify="space-around">
                <Col span={8} textAlign="center">
                  <Card cover={<img src={require('../../img/2016嘉定羽协活动卡.jpg')} alt=""/>}>
                    <Meta title="2016嘉定羽协活动卡" style={{textAlign:"center"}}/>
                  </Card>
                </Col>
                <Col span={8} textAlign="center">                 
                  <Card cover={<img src={require('../../img/2016秋嘉定羽协招新海报.jpg')} alt=""/>}>
                    <Meta title="2016秋嘉定羽协招新海报" style={{textAlign:"center"}}/>
                  </Card>
                </Col>
              </Row>
            </div>
        )
    }
}

export default Badmin