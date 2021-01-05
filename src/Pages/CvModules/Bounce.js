import React from 'react';
import intl from 'react-intl-universal';
import Unity, { UnityContext } from "react-unity-webgl";

import {
  Typography,
  Col,
  Row,
  Card
} from 'antd';

const { Title, Paragraph } = Typography;

const { Meta } = Card;

const UnityGameAddress = "https://play.unity.com/mg/other/untitled-33855";

const unityContext = new UnityContext({
  loaderUrl: "./Build/BounceBounce.loader.js",
  dataUrl: "./Build/BounceBounce.data",
  frameworkUrl: "./Build/BounceBounce.framework.js",
  codeUrl: "./Build/BounceBounce.wasm",
});

class Bounce extends React.Component {
  render() {
    return (
      <div className="site-layout-background" id="bounce" style={{ padding: 24, textAlign: 'left' }}>
        <Typography >
          <Title>2020. 09 {intl.get('BOUNCE')}</Title>
          <Title level={4} >
            {intl.get('BOUNCE_DESC1')}
          </Title>
          <Paragraph>
            {intl.get('BOUNCE_DESC2')}
          </Paragraph>
        </Typography>

        <Row gutter={[16, 16]} justify="center">
          <Col span={16}>
            {/* <Card cover={<img src={require('../../img/Bounce_screenshot.png')} alt="" />}>
                <Meta title={intl.get('BOUNCE_DESC3')} style={{ textAlign: "center" }} 
                    description={<a href={UnityGameAddress} target="_blank" rel="noopener noreferrer">{UnityGameAddress}</a>}/>
            </Card> */}
            <Unity unityContext={unityContext} />
          </Col>
        </Row>     
      </div>
    )
  }
}

export default Bounce