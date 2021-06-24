import { Card, Col, Row, Typography } from 'antd';
import React from 'react';
import intl from 'react-intl-universal';
import cleat_opt_l_xdir from '../../img/cleat_opt_l_xdir.jpg';
import ftire_test from '../../img/ftire_test.gif';


const { Title, Paragraph } = Typography;

const { Meta } = Card;

class Michelin extends React.Component {
  render() {
    return (
      <div className="site-layout-background" id="michelin" style={{ padding: 24, textAlign: 'left' }}>
        <Typography>
          <Title>2019. 02 {intl.get('MICHELIN')}</Title>
          <Paragraph>
            {intl.get('MICHELIN_DESC1')}
          </Paragraph>
        </Typography>

        <Row gutter={[16, 16]} justify="center">
          <Col span={10}>
            <Card cover={<img src={ftire_test} alt="" />}>
              <Meta title={intl.get('MICHELIN_DESC2')} style={{ textAlign: "center" }} />
            </Card>
          </Col>
          <Col span={10}>
            <Card cover={<img src={cleat_opt_l_xdir} alt="" />}>
              <Meta title={intl.get('MICHELIN_DESC3')} style={{ textAlign: "center" }} />
            </Card>
          </Col>
        </Row>

      </div>
    )
  }
}

export default Michelin