import React from 'react';
import { 
    Layout, 
    Typography
  } from 'antd';

const { Content } = Layout;

const { Title, Paragraph } = Typography;

class Ramp extends React.Component{
    render(){
        return(
            <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
            <div className="site-layout-background" style={{ padding: 24, textAlign: 'left' }}>
              <Typography>
                  <Title>2019.06 上匝道合流区车辆协同运动控制策略</Title>
                  <Paragraph>
                    同济大学本科毕业设计
                  </Paragraph>
                  <Paragraph>
                    高速公路上匝道合流区中，匝道车辆的汇入往往会扰乱主干道车流的秩序，造成车速起伏，车辆频繁起动、刹车和变道。
                  </Paragraph>
                  <Paragraph>
                    本文设计了由局域控制中心集中调控的自动驾驶车辆协同运动控制策略，以单车道汇入工况为研究对象，以IDM 模型状态预测、五次多项式轨迹、碰撞安全性判断、虚拟车跟驰模型等方法为基础规划最优汇入方案，保证匝道车辆汇入过程中的自身及相关车辆的行车安全和乘坐舒适度，并提升整个路网的通行效率。
                  </Paragraph>
                </Typography>
                <img src="图3.2 协同运动控制策略思路.jpg"/>
                //协同运动控制策略思路                
                <img src="虚拟跟驰模型示意图.gif" width='1200pt'/>
                //虚拟跟驰模型示意图
                <img src="图3.17a 过渡函数、虚拟车跟驰模型对VMR运动状态的修正.fig.jpg"/>
                //注释
                <img src="图3.17b 过渡函数、虚拟车跟驰模型对VMR运动状态的修正.fig.jpg"/>
                //注释
                <img src="图3.18 支付函数等高线图.jpg"/>
                //注释
            </div>
          </Content>
        )
    }
}

export default Ramp