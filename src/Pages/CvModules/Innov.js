import React from 'react';
import { 
    Layout, 
    Typography
  } from 'antd';

const { Content } = Layout;

const { Title, Paragraph } = Typography;

class Innov extends React.Component{
    render(){
        return(
            <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
            <div className="site-layout-background" style={{ padding: 24, textAlign: 'left' }}>
              <Typography>
                  <Title>2019.04 LED可见光通信在智能驾驶领域的应用探究</Title>
                  <Paragraph>
                    国家大学生创新项目
                  </Paragraph>
                  <Paragraph>
                    LED 可见光通信是一种新兴的光通信技术，它能够利用LED 发出的高频明暗闪烁灯光实现信息的调制传输，而人眼无法察觉其闪烁。
                    LED 可见光通信相比较于传统通信方式，在多方面有显著优势。因而利用LiFi 通信可以针对现有传感器的弊端，对智能驾驶感知系统起到重要的补充作用，实现与周围车辆的即时通信。
                  </Paragraph>
                  <Paragraph>
                    因此，我们开发了一种基于普通车灯和硅光传感器的LED通信装置，个人负责接收端通信原理设计和电路板制作、数据分析处理等。
                    项目参与申请发明专利《一种基于车联网的智能交通场景模拟微缩模型》。
                  </Paragraph>
                </Typography>
                <img src="diagram_Lifi.png"/>
                //可见光通信原理，迟楠,卢星宇,王灿, 等.基于LED的高速可见光通信[J].中国激光,2017,44(3):1-12. DOI:10.3788/CJL201744.0300001.
                <img src="Lifi_test.png"/>
                //搭建在智能小车上的可见光通信装置
            </div>
          </Content>
        )
    }
}

export default Innov