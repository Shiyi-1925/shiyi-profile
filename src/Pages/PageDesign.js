import React from 'react';
import Site from './CvModules/Site';
import Greener from './CvModules/Greener';
import RubbishBin from './CvModules/RubbishBin';
import Badmin from './CvModules/Badmin';

import { 
    Layout,
    Timeline,
  } from 'antd';
  
const { Content } = Layout;

class PageDesign extends React.Component{  
    render() {
      return (       
        <>  
          <Content style={{ margin: '24px 16pt 0', overflow: 'initial' }}>
            <div className="site-layout-background" style={{ padding: 24, textAlign: 'left' }}>
              <Timeline mode='left'>
                <Timeline.Item label="2020.03">Mécatronique 网站及周报设计</Timeline.Item>
                <Timeline.Item label="2019.10">Go Greener 概念生态农场</Timeline.Item>
                <Timeline.Item label="2018.07">公共垃圾桶设计</Timeline.Item>
                <Timeline.Item label="2016.09">同济大学羽毛球协会宣传品设计</Timeline.Item>
              </Timeline>
            </div>                    
          </Content>

          <Site/>
          <Greener/>
          <RubbishBin/>
          <Badmin/>
        </>
      )
    }
}

export default PageDesign