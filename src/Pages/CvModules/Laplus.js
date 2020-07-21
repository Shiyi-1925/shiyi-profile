import React from 'react';
import {
  Typography,
  Col,
  Row,
  Card
} from 'antd';


const { Title, Paragraph } = Typography;

const { Meta } = Card;

class Laplus extends React.Component {
  render() {
    return (
      <div className="site-layout-background" id="laplus" style={{ padding: 24, textAlign: 'left' }}>
        <Typography>
          <Title>2017.12 LaPlus+ 新能源迷你巴士营销方案</Title>
          <Paragraph>
            通过对新能源汽车政策和市场空缺的分析，在50万元级新能源汽车中，我们选择了8-10座迷你巴士作为推广产品。
                    </Paragraph>
          <Paragraph>
            该车型适合用于政府、企业通勤接送高端客户，符合绿色环保的形象，且在同价位同类型汽车中竞争对手较少。
                  </Paragraph>
        </Typography>

        <Row gutter={16} justify="center">
          <Col span={8}>
            <Card cover={<img src={require('../../img/LaPlus_market.jpg')} alt="" />}>
              <Meta title="前期市场分析" style={{ textAlign: "center" }} />
            </Card>
          </Col>
          <Col span={8}>
            <Card cover={<img src={require('../../img/LaPlus_target.jpg')} alt="" />}>
              <Meta title="目标客户群体" style={{ textAlign: "center" }} />
            </Card>
          </Col>
          <Col span={8}>
            <Card cover={<img src={require('../../img/LaPlus_position.jpg')} alt="" />}>
              <Meta title="产品市场定位" style={{ textAlign: "center" }} />
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Laplus