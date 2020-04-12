import React from 'react';
import { 
    Layout, 
    Typography
  } from 'antd';

const { Content } = Layout;

const { Title } = Typography;

class Badmin extends React.Component{
    render(){
        return(
            <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
            <div className="site-layout-background" style={{ padding: 24, textAlign: 'left' }}>
              <Typography>
                <Title>2016.09 同济大学羽毛球协会宣传品设计</Title>
              </Typography>
              <img src="2016秋季嘉定羽协会员手册-外.jpg"/>
              <img src="2016秋季嘉定羽协会员手册-内.jpg"/>
              <img src="2016嘉定羽协活动卡.jpg"/>
              <img src="2016秋嘉定羽协招新海报.jpg"/>
            </div>
          </Content>
        )
    }
}

export default Badmin