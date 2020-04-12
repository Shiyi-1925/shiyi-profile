import React from 'react';
import { 
    Layout, 
    Typography
  } from 'antd';

const { Content } = Layout;

const { Title, Paragraph } = Typography;

class Laplus extends React.Component{
    render(){
        return(
            <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
            <div className="site-layout-background" style={{ padding: 24, textAlign: 'left' }}>
              <Typography>
                  <Title>2017.12 LaPlus+ 新能源迷你巴士营销方案</Title>
                  <Paragraph>
                    通过对新能源汽车政策和市场空缺的分析，在50万元级新能源汽车中，我们选择了8-10座迷你巴士作为推广产品。该车型适合用于政府、企业通勤接送高端客户，符合绿色环保的形象，且在同价位同类型汽车中竞争对手较少。
                  </Paragraph>
                </Typography>
                <img src="LaPlus_market.jpg"/>
                //前期市场分析
                <img src="LaPlus_target.jpg"/>
                //目标客户群体
                <img src="LaPlus_position.jpg"/>
                //产品市场定位
            </div>
          </Content>
        )
    }
}

export default Laplus