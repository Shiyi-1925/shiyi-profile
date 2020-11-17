import React from 'react';
import intl from 'react-intl-universal';

import {
    Steps, Tag, Statistic, Avatar, Card, Col, Row, Typography
} from 'antd';

import {
    ToolOutlined,
    LaptopOutlined,
    ClearOutlined
  } from '@ant-design/icons';

const { Step } = Steps;

const { Paragraph, Title } = Typography;

const gridStyle = {
    width: '25%',
    textAlign: "center"
};

class PageProfile extends React.Component {
    render() {
        return (
            <>
                <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
                    <Row align="middle">
                        <Col span={4} >
                            <Avatar src={require('../img/Profilepic.jpg')} alt="" size={180} />
                        </Col>

                        <Col span={4}>
                            <Title strong="true">{intl.get('NAME')}</Title>
                        </Col>

                        <Col span={16} align="left">
                            <Steps direction="vertical" current={2}>
                                <Step title={intl.get('BACHELOR')} description={<p>{intl.get('BACHELOR_DESC')}{/*<br />本科期间还于复旦大学辅修新闻学专业*/}</p>} />
                                <Step title={intl.get('MASTER')} description={<p>{intl.get('MASTER_DESC1')}<br />{intl.get('MASTER_DESC2')}</p>} />
                                <Step title={intl.get('STAGE')} description={<p>{intl.get('STAGE_DESC')}</p>} />
                            </Steps>
                        </Col>
                    </Row>
                </div>

                <div className="site-layout-background" style={{ padding: 24, textAlign: 'left' }}>
                    <Card>
                        <Card.Grid hoverable={true} style={gridStyle} ><Title level={4}>{intl.get('ENGLISH')}</Title><Paragraph>TOEFL C1</Paragraph></Card.Grid>
                        <Card.Grid hoverable={true} style={gridStyle} ><Title level={4}>{intl.get('FRENCH')}</Title><Paragraph>TCF B2</Paragraph></Card.Grid>
                        <Card.Grid hoverable={true} style={gridStyle} ><Title level={4}>{intl.get('SPANISH')}</Title><Paragraph>{intl.get('SPANISH_LEVEL')}</Paragraph></Card.Grid>
                        <Card.Grid hoverable={true} style={gridStyle} ><Title level={4}>{intl.get('CHINESE')}</Title><Paragraph>{intl.get('CHINESE_LEVEL')}</Paragraph></Card.Grid>
                    </Card>
                </div>

                <div className="site-layout-background" style={{ padding: 24, textAlign: 'left' }}>
                    <Row gutter={[0, 48]} justify="center">
                        <Tag icon={<LaptopOutlined />} color="success">C++</Tag>
                        <Tag icon={<LaptopOutlined />} color="success">Java</Tag>
                        <Tag icon={<LaptopOutlined />} color="success">Python</Tag>
                        <Tag icon={<LaptopOutlined />} color="success">SQL</Tag>
                        <Tag icon={<LaptopOutlined />} color="success">Spring Framework</Tag>
                        <Tag icon={<LaptopOutlined />} color="success">React</Tag>
                        <Tag icon={<LaptopOutlined />} color="success">Vue</Tag>
                        <Tag icon={<LaptopOutlined />} color="success">Unity</Tag>
                    </Row>
                    <Row gutter={[0, 24]} justify="center">
                        <Tag icon={<ToolOutlined />} color="warning">Auto CAD</Tag>
                        <Tag icon={<ToolOutlined />} color="warning">Catia</Tag>
                        <Tag icon={<ToolOutlined />} color="warning">ANSYS</Tag>
                        <Tag icon={<ToolOutlined />} color="warning">Matlab</Tag>
                    </Row>
                    <Row justify="center">
                        <Tag icon={<ClearOutlined />} color="processing">Microsoft Office</Tag>
                        <Tag icon={<ClearOutlined />} color="processing">Adobe Photoshop</Tag>
                        <Tag icon={<ClearOutlined />} color="processing">Adobe InDesign</Tag>
                        <Tag icon={<ClearOutlined />} color="processing">Adobe Illustrator</Tag>
                        <Tag icon={<ClearOutlined />} color="processing">Adobe Premier</Tag>
                    </Row>
                </div>

                <div className="site-layout-background" style={{ padding: 24, textAlign: 'left' }}>
                    <Card hoverable="true">
                        <Row gutter={16}>
                            <Col span={4} align="center">
                                <Statistic title={<Title level={4}>{intl.get('BADMINTON')}</Title>} value={9} suffix={intl.get('YEAR')} />
                            </Col>
                            <Col span={20}>
                                <Paragraph strong="true">{intl.get('BADMINTON_DESC1')}</Paragraph>
                                {<Paragraph>{intl.get('BADMINTON_DESC2')}<br />{intl.get('BADMINTON_DESC3')}<br />{intl.get('BADMINTON_DESC4')}</Paragraph>}
                            </Col>
                        </Row>
                    </Card>
                    <Paragraph></Paragraph>
                    <Card hoverable="true">
                        <Row gutter={20}>
                            <Col span={4} align="center">
                                <Statistic title={<Title level={4}>{intl.get('FOOTBALL')}</Title>} value={3} suffix={intl.get('YEAR')} />
                            </Col>
                            <Col span={16}>
                                <Paragraph strong="true">{intl.get('FOOTBALL_DESC1')}</Paragraph>
                                <Paragraph>{intl.get('FOOTBALL_DESC2')}</Paragraph>
                            </Col>
                        </Row>
                    </Card>
                </div>
            </>
        )
    }
}

export default PageProfile