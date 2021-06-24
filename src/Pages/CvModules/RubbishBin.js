import { Card, Col, Row, Typography } from 'antd';
import React from 'react';
import intl from 'react-intl-universal';
import rubbish_1 from '../../img/rubbish_1.jpg';
import rubbish_2 from '../../img/rubbish_2.jpg';

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
            <Card cover={<img src={rubbish_1} alt="" />}>
              <Meta title={intl.get('BIN_DESC7')} style={{ textAlign: "center" }} />
            </Card>
          </Col>
          <Col span={10}>
            <Card cover={<img src={rubbish_2} alt="" />}>
              <Meta title={intl.get('BIN_DESC8')} style={{ textAlign: "center" }} />
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default RubbishBin