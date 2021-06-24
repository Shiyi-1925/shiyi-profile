import React from 'react';
import intl from 'react-intl-universal';
import {
  Typography,
  Col,
  Row,
  Card
} from 'antd';


const { Title, Paragraph } = Typography;

const { Meta } = Card;

class H4R extends React.Component {
    render() {
      return (
        <div className="site-layout-background" id="h4r" style={{ padding: 24, textAlign: 'left' }}>
          <Typography >
            <Title>2021. 03 {intl.get('H4R')}</Title>
            <Title level={4} >
              {intl.get('H4R_DESC1')}
            </Title>
            <Paragraph>
              {intl.get('H4R_DESC2')}
            </Paragraph>
            <Paragraph>
              {intl.get('H4R_DESC3')}
            </Paragraph>
          </Typography>
        </div>
      )
    }
  }
  
  export default H4R