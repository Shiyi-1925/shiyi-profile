import React from 'react';
import { 
  Typography,
  Col,
  Row,
  Card,
  Descriptions
} from 'antd';


const { Title, Paragraph } = Typography;

const { Meta } = Card;

class Innov extends React.Component{
    render(){
        return(
            <div className="site-layout-background" id="innov" style={{ padding: 24, textAlign: 'left' }}>
              <Typography>
                  <Title>2019.04 LED可见光通信在智能驾驶领域的应用探究</Title>
                  <Title level={4}>
                    国家大学生创新项目
                  </Title>
                  <Paragraph>
                    LED 可见光通信是一种新兴的光通信技术，它能够利用LED 发出的高频明暗闪烁灯光实现信息的调制传输，而人眼无法察觉其闪烁。
                    LED 可见光通信相比较于传统通信方式，在多方面有显著优势。因而利用LiFi 通信可以针对现有传感器的弊端，对智能驾驶感知系统起到重要的补充作用，实现与周围车辆的即时通信。
                  </Paragraph>
                  <Paragraph>
                    我们开发了一种基于普通车灯和硅光传感器的LED通信装置，个人负责接收端通信原理设计和电路板制作、数据分析处理等。
                    项目参与申请发明专利《一种基于车联网的智能交通场景模拟微缩模型》。
                  </Paragraph>
                </Typography>

                <Row gutter={16} justify="center">
                  <Col span={10}>
                    <Card cover={<img src="diagram_Lifi.png"/>}>
                      <Meta title="可见光通信原理" style={{textAlign:"center"}} description=
                      "迟楠,卢星宇,王灿, 等.基于LED的高速可见光通信[J].中国激光,2017,44(3)"/>
                    </Card>
                  </Col>
                  <Col span={10}>
                    <Card cover={<img src="Lifi_test.png"/>}>
                      <Meta title="搭建在智能小车上的可见光通信装置" style={{textAlign:"center"}} />
                    </Card>
                  </Col>
                </Row>
            </div>
        )
    }
}

export default Innov