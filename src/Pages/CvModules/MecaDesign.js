import React from 'react';
import { 
    Layout, 
    Typography
  } from 'antd';

const { Content } = Layout;

const { Title, Paragraph } = Typography;

class MecaDesign extends React.Component{
    render(){
        return(
            <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
            <div className="site-layout-background" style={{ padding: 24, textAlign: 'left' }}>
              <Typography>
                  <Title>2016.08 三轴线双级斜齿圆柱齿轮减速箱设计</Title>
                  <Paragraph>
                    机械设计课程设计
                  </Paragraph>
                </Typography>
                <img src="front_control_arm.png"/>
                //控制臂Catia模型
                <img src="assembly.png"/>
                //减速箱装配图
                <img src='减速箱建模.jpg'/>
                //减速箱SolidWorks建模
            </div>
          </Content>
        )
    }
}

export default MecaDesign