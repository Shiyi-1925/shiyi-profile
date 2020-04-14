import React from 'react';
import { 
    Typography,
    Col,
    Card,
    Row
  } from 'antd';

const { Title, Paragraph } = Typography;

const { Meta } = Card;

class Mecatro extends React.Component{
  
  render(){
        return(
            <div className="site-layout-background" id="mecatro" style={{ padding: 24, textAlign: 'left' }}>
              <Typography>
                  <Title>2020.03 以回收塑料制成的3D打印线材</Title>
                  <Title level={4}>Mines Paristech - Projet de Mécatronique</Title>
                  <Paragraph>
                    来自巴黎艺术装饰学院的客户希望回收废弃塑料碎片和废弃建筑材料，制成供3D打印使用的线材，用于打印初期的设计原型，减少材料浪费。
                  </Paragraph>
                  <Paragraph>
                    整个装置由发动机、切割机、搅拌机、电动线材卷盘等组成。
                  </Paragraph>
                  <Paragraph>
                    项目主页：<span><a href="https://sites.google.com/view/2019-2020-gr10/home" target="_blank" rel="noopener noreferrer">
                      https://sites.google.com/view/2019-2020-gr10/home</a></span>
                  </Paragraph>
              </Typography>

              <Row gutter={24} justify="center">
              <Col span={8}>
                <Card cover={<img src="broyeuse_entier.jpg"/>}>
                  <Meta title="切割机总布置图" style={{textAlign:"center"}} />
                </Card>
              </Col>
              <Col span={8}>
                <Card cover={<img src="extrudeuse.jpg"/>}>
                  <Meta title="搅拌机总布置图" style={{textAlign:"center"}}/>
                </Card>
              </Col>
              <Col span={8}>
                <Card cover={<img src="broyeuse_catia.png"/>}>
                  <Meta title="切割机 Catia 模型" style={{textAlign:"center"}}/>
                </Card>
              </Col>
              </Row>
            </div>
        )
    }
}

export default Mecatro