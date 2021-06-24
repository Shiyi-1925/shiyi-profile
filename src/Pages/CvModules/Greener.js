import { Card, Col, Row, Typography } from 'antd';
import React from 'react';
import intl from 'react-intl-universal';
import go_greener_discovery from '../../img/go_greener_discovery.png';
import go_greener_sketch from '../../img/go_greener_sketch.jpg';

const { Title, Paragraph } = Typography;

const { Meta } = Card;

class Greener extends React.Component {
  render() {
    return (
      <div className="site-layout-background" id="greener" style={{ padding: 24, textAlign: 'left' }}>
        <Typography>
          <Title>2019. 10 {intl.get('GREENER')}</Title>
          <Title level={4}>UX design sprint – Télécom ParisTech</Title>
          <Paragraph>{intl.get('GREENER_DESC1')}</Paragraph>
        </Typography>

        <Row gutter={16} justify="space-around">
          <Col span={4} textAlign="center">
            <Card cover={<img src={go_greener_discovery} alt="" />}>
              <Meta title={intl.get('GREENER_DESC2')} style={{ textAlign: "center" }} />
            </Card>
          </Col>
          <Col span={16} textAlign="center">
            <Card cover={<img src={go_greener_sketch} alt="" />}>
              <Meta title={intl.get('GREENER_DESC3')} style={{ textAlign: "center" }} />
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Greener