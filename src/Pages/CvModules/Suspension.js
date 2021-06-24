import { Card, Col, Row, Typography } from 'antd';
import React from 'react';
import intl from 'react-intl-universal';
import ansys_stress from '../../img/ansys_stress.png';
import front_control_arm from '../../img/front_control_arm.png';
import front_control_arm_cad from '../../img/front_control_arm_cad.jpg';

const { Title, Paragraph } = Typography;

const { Meta } = Card;

class Suspension extends React.Component {
  render() {
    return (
      <div className="site-layout-background" id="suspension" style={{ padding: 24, textAlign: 'left' }}>
        <Typography>
          <Title>2019. 01 {intl.get('SUSPENSION')}</Title>
          <Paragraph>
            {intl.get('SUSPENSION_DESC1')}
          </Paragraph>
          <Paragraph>
            {intl.get('SUSPENSION_DESC2')}
          </Paragraph>
          <Paragraph>
            {intl.get('SUSPENSION_DESC3')}
          </Paragraph>
        </Typography>

        <Row gutter={16} justify="center">
          <Col span={8}>
            <Card cover={<img src={front_control_arm} alt="" />}>
              <Meta title={intl.get('SUSPENSION_DESC4')} style={{ textAlign: "center" }} />
            </Card>
          </Col>
          <Col span={8}>
            <Card cover={<img src={ansys_stress} alt="" />}>
              <Meta title={intl.get('SUSPENSION_DESC5')} style={{ textAlign: "center" }} />
            </Card>
          </Col>
          <Col span={8}>
            <Card cover={<img src={front_control_arm_cad} alt="" />}>
              <Meta title={intl.get('SUSPENSION_DESC6')} style={{ textAlign: "center" }} />
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Suspension