import React from 'react';
import { 
  Typography,
  Col,
  Row,
  Card
} from 'antd';


const { Title, Paragraph } = Typography;

const { Meta } = Card;

class Michelin extends React.Component{
    render(){
        return(
            <div className="site-layout-background" id="michelin" style={{ padding: 24, textAlign: 'left' }}>
              <Typography>
                  <Title>2019.02 米其林中国研发中心轮胎性能部NVH实习</Title>
                  <Paragraph>
                    主要研究汽车多体动力学仿真方法。在FTire、CarMaker平台上独立设计轮胎平顺性和操纵稳定性试验的仿真方案，对1/4整车模型进行频域分析，对比实际场地测试结果。
                  </Paragraph>
                </Typography>

                <Row gutter={[16,16]} justify="center">
                <Col span={10}>
                  <Card cover={<img src={require('../../img/ftire_test.gif')} alt=""/>}>
                    <Meta title="FTire中的1/4整车模型仿真" style={{textAlign:"center"}} />
                  </Card>
                </Col>
                <Col span={10}>
                  <Card cover={<img src={require('../../img/cleat_opt_L_xdir.jpg')} alt=""/>}>
                    <Meta title="某款轮胎通过不同宽度楔块测试的频域分析（X方向）" style={{textAlign:"center"}}/>
                  </Card>
                </Col>
                </Row>

            </div>
        )
    }
}

export default Michelin