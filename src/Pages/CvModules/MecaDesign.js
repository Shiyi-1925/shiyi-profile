import { Card, Col, Row, Typography } from 'antd';
import React from 'react';
import assembly from '../../img/assembly.png';
import gearbox from '../../img/gearbox.png';


const { Title } = Typography;

const { Meta } = Card;

class MecaDesign extends React.Component {
  render() {
    return (
      <div className="site-layout-background" id="mecadesign" style={{ padding: 24, textAlign: 'left' }}>
        <Typography>
          <Title>2016.08 三轴线双级斜齿圆柱齿轮减速箱设计</Title>
          <Title level={4}>机械设计课程设计</Title>
        </Typography>

        <Row gutter={16} justify="center">
          <Col span={8}>
            <Card cover={<img src={assembly} alt="" />}>
              <Meta title="减速箱装配图" style={{ textAlign: "center" }} />
            </Card>
          </Col>
          <Col span={8}>
            <Card cover={<img src={gearbox} alt="" />}>
              <Meta title="减速箱SolidWorks建模" style={{ textAlign: "center" }} />
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default MecaDesign