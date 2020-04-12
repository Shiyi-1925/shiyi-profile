import React from 'react';
import { 
    Layout, 
    Typography
  } from 'antd';

const { Content } = Layout;

const { Title, Paragraph } = Typography;

class Suspension extends React.Component{
    render(){
        return(
            <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
            <div className="site-layout-background" style={{ padding: 24, textAlign: 'left' }}>
              <Typography>
                  <Title>2019.01 麦弗逊悬架控制臂设计及仿真分析</Title>
                  <Paragraph>
                  麦弗逊独立式悬架的控制臂对悬架系统的弹性力学性能具有重大影响，它可以传递作用力以及引导力的方向。为了满足碳排放的要求，控制臂应设计得尽可能轻，同时要能抵抗瞬间撞击和交变应力。但是，轻巧的设计总是与强度和刚度矛盾。我们要做的是找到力学性能和能耗之间的平衡。
                  </Paragraph>
                </Typography>
                <img src="front_control_arm.png"/>
                //控制臂Catia模型
                <img src="Ansys_stress.png"/>
                //Ansys应力仿真
                <img src='front_control_arm_cad.jpg'/>
                //控制臂CAD设计图
            </div>
          </Content>
        )
    }
}

export default Suspension