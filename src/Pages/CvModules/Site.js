import { Card, Col, Row, Typography } from 'antd';
import React from 'react';
import intl from 'react-intl-universal';
import mecatro1 from '../../img/mecatro1.png';
import newsletter_v2 from '../../img/newsletter_v2.jpg';

const { Title, Paragraph } = Typography;

const { Meta } = Card;

class Site extends React.Component {
  render() {
    return (
      <div className="site-layout-background" id="site" style={{ padding: 24, textAlign: 'left' }}>
        <Typography>
          <Title>2020. 03 {intl.get('SITE')}</Title>
          <Paragraph>{intl.get('SITE_DESC1')}<span><a href="https://sites.google.com/view/2019-2020-gr10/home" target="_blank" rel="noopener noreferrer">https://sites.google.com/view/2019-2020-gr10/home</a></span></Paragraph>
          <Paragraph>{intl.get('SITE_DESC2')}</Paragraph>
        </Typography>
        <Row guttuer={16} justify="space-around" align="top">
          <Col span={10} textAlign="center">
            <Card cover={<img src={mecatro1} alt="" />}>
              <Meta title={intl.get('SITE_DESC3')} style={{ textAlign: "center" }} />
            </Card>
          </Col>
          <Col span={10} textAlign="center">
            <Card cover={<img src={newsletter_v2} alt="" />}>
              <Meta title={intl.get('SITE_DESC4')} style={{ textAlign: "center" }} />
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Site