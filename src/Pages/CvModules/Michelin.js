import React from 'react';
import { 
    Layout, 
    Typography
  } from 'antd';

const { Content } = Layout;

const { Title, Paragraph } = Typography;

class Michelin extends React.Component{
    render(){
        return(
            <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
            <div className="site-layout-background" style={{ padding: 24, textAlign: 'left' }}>
              <Typography>
                  <Title>2019.02 米其林中国研发中心轮胎性能部NVH实习</Title>
                  <Paragraph>
                    主要研究汽车多体动力学仿真方法。在FTire、CarMaker平台上独立设计轮胎平顺性和操纵稳定性试验的仿真方案，对1/4整车模型进行频域分析，对比实际场地测试结果。
                  </Paragraph>
                </Typography>
                <img src="michelin_rapport_cover.jpg" width='600pt'/>
                //内部报告
                <img src="ftire_test.gif"/>
                //FTire中的1/4整车模型仿真
                <img src="cleat_opt_L_xdir.jpg"/>
                //某款轮胎通过不同宽度楔块测试的频域分析（X方向）
                
            </div>
          </Content>
        )
    }
}

export default Michelin