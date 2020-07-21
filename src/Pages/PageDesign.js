import React from 'react';
import intl from 'react-intl-universal';
import Site from './CvModules/Site';
import Greener from './CvModules/Greener';
import RubbishBin from './CvModules/RubbishBin';
import Badmin from './CvModules/Badmin';
import {
  Timeline
} from 'antd';


class PageDesign extends React.Component {
  render() {
    return (
      <>
        <div className="site-layout-background" style={{ padding: 24, textAlign: 'left' }}>
          <Timeline mode='left'>
            <Timeline.Item label="2020. 03">{intl.get('SITE')}</Timeline.Item>
            <Timeline.Item label="2019. 10">{intl.get('GREENER')}</Timeline.Item>
            <Timeline.Item label="2018. 07">{intl.get('BIN')}</Timeline.Item>
            <Timeline.Item label="2016. 09">{intl.get('BADMIN_DESIGN')}</Timeline.Item>
          </Timeline>
        </div>
        <Site />
        <Greener />
        <RubbishBin />
        <Badmin />
      </>
    )
  }
}

export default PageDesign