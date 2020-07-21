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
            <Card cover={<img src={require('../../img/front_control_arm.png')} alt="" />}>
              <Meta title={intl.get('SUSPENSION_DESC4')} style={{ textAlign: "center" }} />
            </Card>
          </Col>
          <Col span={8}>
            <Card cover={<img src={require('../../img/Ansys_stress.png')} alt="" />}>
              <Meta title={intl.get('SUSPENSION_DESC5')} style={{ textAlign: "center" }} />
            </Card>
          </Col>
          <Col span={8}>
            <Card cover={<img src={require('../../img/front_control_arm_cad.jpg')} alt="" />}>
              <Meta title={intl.get('SUSPENSION_DESC6')} style={{ textAlign: "center" }} />
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Suspension