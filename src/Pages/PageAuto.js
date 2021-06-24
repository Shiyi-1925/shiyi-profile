import React from 'react';
import intl from 'react-intl-universal';
import H4R from './CvModules/H4R';
import Bounce from './CvModules/Bounce';
import Nio from './CvModules/Nio';
// import Mecatro from './CvModules/Mecatro';
import Ramp from './CvModules/Ramp';
import Innov from './CvModules/Innov';
import Michelin from './CvModules/Michelin';
// import Suspension from './CvModules/Suspension';
// import Laplus from './CvModules/Laplus';
// import MecaDesign from './CvModules/MecaDesign';
import {
  Timeline,
} from 'antd';

class PageAuto extends React.Component {
  render() {
    return (
      <>
        <div className="site-layout-background" style={{ padding: 24, textAlign: 'left' }}>
          <Timeline mode='left'>
            <Timeline.Item label="2021. 03">{intl.get('H4R')}</Timeline.Item>
            <Timeline.Item label="2020. 09">{intl.get('BOUNCE')}</Timeline.Item>
            <Timeline.Item label="2020. 06">{intl.get('NIO')}</Timeline.Item>
            {/* <Timeline.Item label="2020. 03">以回收塑料制成的3D打印线材</Timeline.Item> */}
            <Timeline.Item label="2019. 06">{intl.get('RAMP')}</Timeline.Item>
            <Timeline.Item label="2019. 04">{intl.get('INNOV')}</Timeline.Item>
            <Timeline.Item label="2019. 02">{intl.get('MICHELIN')}</Timeline.Item>
            {/*<Timeline.Item label="2019. 01">{intl.get('SUSPENSION')}</Timeline.Item> */}
            {/* <Timeline.Item label="2017. 12">"LaPlus+ 新能源迷你巴士营销方案</Timeline.Item> */}
            {/* <Timeline.Item label="2016. 08">三轴线双级斜齿圆柱齿轮减速箱设计</Timeline.Item> */}
          </Timeline>
        </div>

        {/* <Mecatro /> */}
        <H4R />
        <Bounce />
        <Nio />
        <Ramp />
        <Innov />
        <Michelin />
        {/* <Suspension /> */}
        {/* <Laplus /> */}
        {/* <MecaDesign /> */}
      </>
    )
  }
}

export default PageAuto