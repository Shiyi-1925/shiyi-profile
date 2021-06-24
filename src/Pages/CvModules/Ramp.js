import { Card, Col, Row, Typography } from 'antd';
import React from 'react';
import intl from 'react-intl-universal';
import cost_f from '../../img/cost_f.jpg';
import ramp_mindmap from '../../img/ramp_mindmap.jpg';
import virtual_follow from '../../img/virtual_follow.gif';
import vmr_a from '../../img/vmr_a.jpg';
import vmr_v from '../../img/vmr_v.jpg';

const { Title, Paragraph } = Typography;

const { Meta } = Card;

class Ramp extends React.Component {
  render() {
    return (
      <div className="site-layout-background" id="ramp" style={{ padding: 24, textAlign: 'left' }}>
        <Typography >
          <Title>2019. 06 {intl.get('RAMP')}</Title>
          <Title level={4} >
            {intl.get('RAMP_DESC1')}
          </Title>
          <Paragraph>
            {intl.get('RAMP_DESC2')}
          </Paragraph>
          <Paragraph>
            {intl.get('RAMP_DESC3')}
          </Paragraph>
          <Paragraph>
            {intl.get('RAMP_DESC4')}
          </Paragraph>
          <Paragraph>
            {intl.get('RAMP_DESC5')}
          </Paragraph>
          <Paragraph>
            {intl.get('RAMP_DESC6')}
          </Paragraph>
        </Typography>

        <Row gutter={[16, 16]} justify="center">
          <Col span={16}>
            <Card cover={<img src={ramp_mindmap} alt="" />}>
              <Meta title={intl.get('RAMP_DESC7')} style={{ textAlign: "center" }} />
            </Card>
          </Col>
        </Row>

        <Row gutter={[16, 16]} justify="center">
          <Col span={16}>
            <Card cover={<img src={virtual_follow} alt="" />}>
              <Meta title={intl.get('RAMP_DESC8')} style={{ textAlign: "center" }} />
            </Card>
          </Col>
        </Row>

        <Row gutter={[16, 16]} justify="center">
          <Col span={10}>
            <Card cover={<img src={vmr_v} alt="" />}>
              <Meta title={intl.get('RAMP_DESC9')} style={{ textAlign: "center" }} />
            </Card>
          </Col>
          <Col span={10}>
            <Card cover={<img src={vmr_a} alt="" />}>
              <Meta title={intl.get('RAMP_DESC10')} style={{ textAlign: "center" }} />
            </Card>
          </Col>
        </Row>

        <Typography>
          <Paragraph>
            {intl.get('RAMP_DESC11')}
          </Paragraph>
        </Typography>

        <Row justify="center">
          <Col span={16}>
            <Card cover={<img src={cost_f} alt="" />}>
              <Meta title={intl.get('RAMP_DESC12')} style={{ textAlign: "center" }} description={intl.get('RAMP_DESC13')} />
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Ramp