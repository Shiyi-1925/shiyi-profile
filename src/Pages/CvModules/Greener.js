import React from 'react';
import { 
    Layout, 
    Typography
  } from 'antd';

const { Content } = Layout;

const { Title } = Typography;

class Greener extends React.Component{
    render(){
        return(
            <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
            <div className="site-layout-background" style={{ padding: 24, textAlign: 'left' }}>
              <Typography>
                <Title>2019.10 Go Greener 概念生态农场</Title>
              </Typography>
              <img src="Go greener discovery.png" height="800pt"/>
              //宣传网站原型
              <img src="02_EGGPLANT_CHEN SHIYI_REFINE_SKETCH.jpg" height="800pt"/>
              //生态农场故事板
            </div>
          </Content>
        )
    }
}

export default Greener