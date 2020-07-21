import React from 'react';
import intl from 'react-intl-universal';
import {
  Typography, Row, Col, Card
} from 'antd';

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
            <Card cover={<img src={require('../../img/sites.google.com_view_2019-2020-gr10_home(iPad Pro).png')} alt="" />}>
              <Meta title={intl.get('SITE_DESC3')} style={{ textAlign: "center" }} />
            </Card>
          </Col>
          <Col span={10} textAlign="center">
            <Card cover={<img src={require('../../img/Newsletter_3_Shiyi_V2.jpg')} alt="" />}>
              <Meta title={intl.get('SITE_DESC4')} style={{ textAlign: "center" }} />
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Site