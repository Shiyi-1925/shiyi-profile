import { Card, Carousel, Col, Row, Typography } from 'antd';
import React from 'react';
import intl from 'react-intl-universal';
import badm_card from '../../img/2016_badm_card.jpg';
import badm_handbook1 from '../../img/2016_badm_handbook1.jpg';
import badm_handbook2 from '../../img/2016_badm_handbook2.jpg';
import badm_poster from '../../img/2016_badm_poster.jpg';

const { Title, Paragraph } = Typography;

const { Meta } = Card;

class Badmin extends React.Component {
  render() {
    return (
      <div className="site-layout-background" id="badmin" style={{ padding: 24, textAlign: 'left' }}>
        <Typography>
          <Title>2016. 09 {intl.get('BADMIN_DESIGN')}</Title>
          <Paragraph>{intl.get('BADMIN_DESIGN_DESC1')}</Paragraph>
        </Typography>

        <Row gutter={[16, 16]} justify="center" align="middle">
          <Col span={12} textAlign="center">
            <Carousel autoplay>
              <Card cover={<img src={badm_handbook2} alt="" />}>
                <Meta title={intl.get('BADMIN_DESIGN_DESC2')} style={{ textAlign: "center" }} />
              </Card>
              <Card cover={<img src={badm_handbook1} alt="" />}>
                <Meta title={intl.get('BADMIN_DESIGN_DESC3')} style={{ textAlign: "center" }} />
              </Card>
            </Carousel>
          </Col>
        </Row>
        <Row gutter={[16, 16]} justify="space-around">
          <Col span={8} textAlign="center">
            <Card cover={<img src={badm_card} alt="" />}>
              <Meta title={intl.get('BADMIN_DESIGN_DESC4')} style={{ textAlign: "center" }} />
            </Card>
          </Col>
          <Col span={8} textAlign="center">
            <Card cover={<img src={badm_poster} alt="" />}>
              <Meta title={intl.get('BADMIN_DESIGN_DESC5')} style={{ textAlign: "center" }} />
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Badmin