import React from 'react';
import Mecatro from './CvModules/Mecatro';
import Ramp from './CvModules/Ramp';
import Innov from './CvModules/Innov';
import Michelin from './CvModules/Michelin';
import Suspension from './CvModules/Suspension';
import Laplus from './CvModules/Laplus';
import MecaDesign from './CvModules/MecaDesign';
import { 
    Timeline,
  } from 'antd';

class PageAuto extends React.Component{  
    render() {
      return (
            <>
              <div className="site-layout-background" style={{ padding: 24, textAlign: 'left'}}>
                <Timeline mode='left'>
                  <Timeline.Item label="2020.03">以回收塑料制成的3D打印线材</Timeline.Item>
                  <Timeline.Item label="2019.06">上匝道合流区车辆协同运动控制策略</Timeline.Item>
                  <Timeline.Item label="2019.04">LED可见光通信在智能驾驶领域的应用探究</Timeline.Item>
                  <Timeline.Item label="2019.02">米其林中国研发中心轮胎性能部NVH实习</Timeline.Item>
                  <Timeline.Item label="2019.01">麦弗逊悬架控制臂设计及仿真分析</Timeline.Item>
                  <Timeline.Item label="2017.12">"LaPlus+ 新能源迷你巴士营销方案</Timeline.Item>
                  <Timeline.Item label="2016.08">三轴线双级斜齿圆柱齿轮减速箱设计</Timeline.Item>
                </Timeline>
              </div>

            <Mecatro />
            <Ramp />
            <Innov />
            <Michelin />
            <Suspension />
            <Laplus />
            <MecaDesign />
          </>
        )
    }
}

export default PageAuto