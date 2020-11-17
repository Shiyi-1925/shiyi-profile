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

class Nio extends React.Component {
    render() {
      return (
        <div className="site-layout-background" id="nio" style={{ padding: 24, textAlign: 'left' }}>
          <Typography >
            <Title>2020. 06 {intl.get('NIO')}</Title>
            <Title level={4} >
              {intl.get('NIO_DESC1')}
            </Title>

            <Row gutter={[16, 16]} justify="center">
                <Col span={8}>
                <Card cover={<img src={require('../../img/PLM_1.png')} alt="" />}>
                    <Meta title={intl.get('NIO_DESC6')} style={{ textAlign: "center" }} />
                </Card>
                </Col>
                <Col span={10}>
                <Card cover={<img src={require('../../img/PLM_2.png')} alt="" />}>
                    <Meta title={intl.get('NIO_DESC7')} style={{ textAlign: "center" }} />
                </Card>
                </Col>
            </Row>

            <Paragraph>
              {intl.get('NIO_DESC2')}
            </Paragraph>
            <Paragraph>
              {intl.get('NIO_DESC3')}
            </Paragraph>
            <Paragraph>
              {intl.get('NIO_DESC4')}
            </Paragraph>
            <Paragraph>
              {intl.get('NIO_DESC5')}
            </Paragraph>
          </Typography>
        </div>
      )
    }
  }
  
  export default Nio