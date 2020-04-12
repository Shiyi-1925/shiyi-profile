import React from 'react';
import { 
    Layout, 
    Typography
  } from 'antd';

const { Content } = Layout;

const { Title } = Typography;

class RubbishBin extends React.Component{
    render(){
        return(
            <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
            <div className="site-layout-background" style={{ padding: 24, textAlign: 'left' }}>
              <Typography>
                <Title>2018.07 公共垃圾桶设计</Title>
                心形不锈钢彩色分类垃圾桶
                弧顶 防止行人将垃圾堆放在顶上
                投入口屋檐设计引导雨水
                新颖外形 四面均贴有回收标志
              </Typography>
              <img src="rubbish_1.jpg"/>
              //三维建模图
              <img src="rubbish_2.jpg"/>
              //投入口细节图
            </div>
          </Content>
        )
    }
}

export default RubbishBin