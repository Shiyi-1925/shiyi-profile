import React from 'react';
import intl from 'react-intl-universal';
import {
  Typography,
  Col,
  Row,
  Card
} from 'antd';


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
            <Card cover={<img src={require('../../img/图3.2 协同运动控制策略思路.jpg')} alt="" />}>
              <Meta title={intl.get('RAMP_DESC7')} style={{ textAlign: "center" }} />
            </Card>
          </Col>
        </Row>

        <Row gutter={[16, 16]} justify="center">
          <Col span={16}>
            <Card cover={<img src={require('../../img/虚拟跟驰模型示意图.gif')} alt="" />}>
              <Meta title={intl.get('RAMP_DESC8')} style={{ textAlign: "center" }} />
            </Card>
          </Col>
        </Row>

        <Row gutter={[16, 16]} justify="center">
          <Col span={10}>
            <Card cover={<img src={require('../../img/图3.17a 过渡函数、虚拟车跟驰模型对VMR运动状态的修正.fig.jpg')} alt="" />}>
              <Meta title={intl.get('RAMP_DESC9')} style={{ textAlign: "center" }} />
            </Card>
          </Col>
          <Col span={10}>
            <Card cover={<img src={require('../../img/图3.17b 过渡函数、虚拟车跟驰模型对VMR运动状态的修正.fig.jpg')} alt="" />}>
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
            <Card cover={<img src={require('../../img/图3.18 支付函数等高线图.jpg')} alt="" />}>
              <Meta title={intl.get('RAMP_DESC12')} style={{ textAlign: "center" }} description="车辆安全性、通行效率、舒适性指标越高，支付函数越低。" />
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Ramp