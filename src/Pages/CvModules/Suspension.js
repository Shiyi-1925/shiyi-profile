import React from 'react';
import { 
  Typography,
  Col,
  Row,
  Card
} from 'antd';


const { Title, Paragraph } = Typography;

const { Meta } = Card;

class Suspension extends React.Component{
    render(){
        return(
            <div className="site-layout-background" id="suspension" style={{ padding: 24, textAlign: 'left' }}>
              <Typography>
                  <Title>2019.01 麦弗逊悬架控制臂设计及仿真分析</Title>
                  <Paragraph>
                  麦弗逊独立式悬架的控制臂对悬架系统的弹性力学性能具有重大影响，它可以传递作用力以及引导力的方向。为了满足碳排放的要求，控制臂应设计得尽可能轻，同时要能抵抗瞬间撞击和交变应力。但是，轻巧的设计总是与强度和刚度矛盾。我们要做的是找到力学性能和能耗之间的平衡。
                  </Paragraph>
                </Typography>

                <Row gutter={16} justify="center">
                  <Col span={8}>
                    <Card cover={<img src={require('../../img/front_control_arm.png')} alt=""/>}>
                      <Meta title="控制臂 Catia 模型" style={{textAlign:"center"}} />
                    </Card>
                  </Col>
                  <Col span={8}>
                    <Card cover={<img src={require('../../img/Ansys_stress.png')} alt=""/>}>
                      <Meta title="Ansys 应力仿真" style={{textAlign:"center"}} />
                    </Card>
                  </Col>
                  <Col span={8}>
                    <Card cover={<img src={require('../../img/front_control_arm_cad.jpg')} alt=""/>}>
                      <Meta title="控制臂 CAD 设计图" style={{textAlign:"center"}} />
                    </Card>
                  </Col>
                </Row>
            </div>
        )
    }
}

export default Suspension