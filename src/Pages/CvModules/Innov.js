import React from 'react';
import intl from 'react-intl-universal';
import {
  Typography,
  Col,
  Row,
  Card,
} from 'antd';


const { Title, Paragraph } = Typography;

const { Meta } = Card;

class Innov extends React.Component {
  render() {
    return (
      <div className="site-layout-background" id="innov" style={{ padding: 24, textAlign: 'left' }}>
        <Typography>
          <Title>2019. 04 {intl.get('INNOV')}</Title>
          <Title level={4}>
            {intl.get('INNOV_DESC1')}
          </Title>
          <Paragraph>
            {intl.get('INNOV_DESC2')}
          </Paragraph>
          <Paragraph>
            {intl.get('INNOV_DESC3')}
          </Paragraph>
          <Paragraph>
            {intl.get('INNOV_DESC4')}
          </Paragraph>
          <Paragraph>
            {intl.get('INNOV_DESC5')}
          </Paragraph>
        </Typography>

        <Row gutter={16} justify="center">
          <Col span={10}>
            <Card cover={<img src={require('../../img/diagram_Lifi.png')} alt="" />}>
              <Meta title={intl.get('INNOV_DESC6')} style={{ textAlign: "center" }} description=
                {intl.get('INNOV_DESC7')} />
            </Card>
          </Col>
          <Col span={10}>
            <Card cover={<img src={require('../../img/Lifi_test.png')} alt="" />}>
              <Meta title={intl.get('INNOV_DESC8')} style={{ textAlign: "center" }} />
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Innov