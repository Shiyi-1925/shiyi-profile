import React from 'react';
import { 
    Typography,
    Col,
    Row,
    Card
  } from 'antd';


const { Title, Paragraph } = Typography;

const { Meta } = Card;

class Ramp extends React.Component{
    render(){
        return(
            <div className="site-layout-background" id="ramp" style={{ padding: 24, textAlign: 'left' }}>
              <Typography>
                  <Title>2019.06 上匝道合流区车辆协同运动控制策略</Title>
                  <Title level={4} >
                    同济大学本科毕业设计
                  </Title>
                  <Paragraph>
                    高速公路上匝道合流区中，匝道车辆的汇入往往会扰乱主干道车流的秩序，造成车速起伏，车辆频繁起动、刹车和变道。
                  </Paragraph>
                  <Paragraph>
                    本文设计了由局域控制中心集中调控的自动驾驶车辆协同运动控制策略，以单车道汇入工况为研究对象，以IDM 模型状态预测、五次多项式轨迹、碰撞安全性判断、虚拟车跟驰模型等方法为基础规划最优汇入方案，保证匝道车辆汇入过程中的自身及相关车辆的行车安全和乘坐舒适度，并提升整个路网的通行效率。
                  </Paragraph>
                </Typography>

                <Row gutter={[16,16]} justify="center">
                  <Col span={16}>
                    <Card cover={<img src={require('../../img/图3.2 协同运动控制策略思路.jpg')} alt=""/>}>
                      <Meta title="协同运动控制策略思路" style={{textAlign:"center"}} />
                    </Card>
                  </Col>
                </Row>

                <Row gutter={[16,16]} justify="center">
                  <Col span={16}>
                    <Card cover={<img src={require('../../img/虚拟跟驰模型示意图.gif')} alt=""/>}>
                      <Meta title="虚拟跟驰模型示意图" style={{textAlign:"center"}} />
                    </Card>
                  </Col>
                </Row>

                <Row gutter={[16,16]} justify="center">
                  <Col span={10}>
                    <Card cover={<img src={require('../../img/图3.17a 过渡函数、虚拟车跟驰模型对VMR运动状态的修正.fig.jpg')} alt=""/>}>
                      <Meta title="不同方案下目标车辆的速度图线" style={{textAlign:"center"}} />
                    </Card>
                  </Col>
                  <Col span={10}>
                    <Card cover={<img src={require('../../img/图3.17b 过渡函数、虚拟车跟驰模型对VMR运动状态的修正.fig.jpg')} alt=""/>}>
                      <Meta title="不同方案下目标车辆的加速度图线" style={{textAlign:"center"}} />
                    </Card>
                  </Col>
                </Row>

                <Typography>
                    <Paragraph>
                      本文研究的虚拟车跟驰模型能有效减少匝道换道过程中车辆的速度起伏，防止较大冲击。
                    </Paragraph>
                </Typography>

                <Row justify="center">
                  <Col span={16}>
                    <Card cover={<img src={require('../../img/图3.18 支付函数等高线图.jpg')} alt=""/>}>
                      <Meta title="支付函数等高线图" style={{textAlign:"center"}} description="车辆安全性、通行效率、舒适性指标越高，支付函数越低。"/>
                    </Card>
                  </Col>
                </Row>
            </div>
        )
    }
}

export default Ramp