import React from 'react';
import intl from 'react-intl-universal';
import {
  Typography, Row, Col, Card
} from 'antd';

const { Title, Paragraph } = Typography;

const { Meta } = Card;

class RubbishBin extends React.Component {
  render() {
    return (
      <div className="site-layout-background" id="rubbishbin" style={{ padding: 24, textAlign: 'left' }}>
        <Typography>
          <Title>2018. 07 {intl.get('BIN')}</Title>
          <Title level={4}>{intl.get('BIN_DESC1')}</Title>
          <Paragraph>{intl.get('BIN_DESC2')}</Paragraph>
          <ul>
            <li>{intl.get('BIN_DESC3')}</li>
            <li>{intl.get('BIN_DESC4')}</li>
            <li>{intl.get('BIN_DESC5')}</li>
            <li>{intl.get('BIN_DESC6')}</li>
          </ul>
        </Typography>

        <Row gutter={24} justify="center">
          <Col span={10}>
            <Card cover={<img src={require('../../img/rubbish_1.JPG')} alt="" />}>
              <Meta title={intl.get('BIN_DESC7')} style={{ textAlign: "center" }} />
            </Card>
          </Col>
          <Col span={10}>
            <Card cover={<img src={require('../../img/rubbish_2.JPG')} alt="" />}>
              <Meta title={intl.get('BIN_DESC8')} style={{ textAlign: "center" }} />
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default RubbishBin