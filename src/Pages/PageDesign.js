import React from 'react';
import Site from './CvModules/Site';
import Greener from './CvModules/Greener';
import RubbishBin from './CvModules/RubbishBin';
import Badmin from './CvModules/Badmin';
import { 
    Timeline
  } from 'antd';


class PageDesign extends React.Component{  
    render() {
      return (       
        <Anchor>  
            <div className="site-layout-background" style={{ padding: 24, textAlign: 'left' }}>
              <Timeline mode='left'>
                <Timeline.Item label="2020.03">Mécatronique 网站设计</Timeline.Item>
                <Timeline.Item label="2019.10">Go Greener 概念生态农场</Timeline.Item>
                <Timeline.Item label="2018.07">公共垃圾桶设计</Timeline.Item>
                <Timeline.Item label="2016.09">同济大学羽毛球协会宣传品设计</Timeline.Item>
              </Timeline>
            </div>                    
          <Site/>
          <Greener/>
          <RubbishBin/>
          <Badmin/>
        </Anchor>
      )
    }
}

export default PageDesign