import React from 'react';

import { 
    Steps, Tag, Statistic, Avatar, Card, Col, Row, Typography
} from 'antd';

const { Step } = Steps;

const { Paragraph, Title} = Typography;

const gridStyle = {
    width: '25%',
    textAlign: "center"
  };

class PageProfile extends React.Component{  
    render() {
      return (
          <>
              <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
                <Row align="middle">
                        <Col span={4} >
                            <Avatar src={require('../img/Profilepic.jpg')} alt="" size={180}/>
                        </Col>

                        <Col span={4}>
                            <Title strong="true">陈诗艺</Title>
                        </Col>

                        <Col span={16} align="left">
                            <Steps direction="vertical" current={2}>
                                    <Step title="同济大学汽车学院车辆工程学士" description={<p>大四时参加巴黎中央理工学校（CentraleSupélec）为期六个月的交换项目<br/>本科期间还于复旦大学辅修新闻学专业</p>}/>
                                    <Step title="巴黎高科国立矿业学校 (Mines ParisTech) 工程师二年级" description={<p>法国工程师文凭，等同于硕士一年级在读<br/>专业方向为信息系统管理</p>}/>
                                    <Step title="寻找一份短期实习" description={<p>五月底可入职</p>}/>
                            </Steps>
                        </Col>
                    </Row>
                </div>

                <div className="site-layout-background" style={{ padding: 24, textAlign: 'left' }}>                   
                    <Card>
                        <Card.Grid hoverable={true} style={gridStyle} ><Title level={4}>英语</Title><Paragraph>TOEFL, CET-6</Paragraph></Card.Grid>
                        <Card.Grid hoverable={true} style={gridStyle} ><Title level={4}>法语</Title><Paragraph>TCF B2</Paragraph></Card.Grid>
                        <Card.Grid hoverable={true} style={gridStyle} ><Title level={4}>西班牙语</Title><Paragraph>初学七个月</Paragraph></Card.Grid>
                        <Card.Grid hoverable={true} style={gridStyle} ><Title level={4}>汉语</Title><Paragraph>母语</Paragraph></Card.Grid>
                    </Card>
                    <Paragraph></Paragraph>
                    <Card hoverable="true">
                        <Row gutter={16}>
                            <Col span={4} align="center">
                                <Statistic title={<Title level={4}>羽毛球</Title>} value={8} suffix="年" />
                            </Col>
                            <Col span={20}>
                                <Paragraph strong="true">同济大学嘉定校区羽毛球协会副会长、会长</Paragraph>
                                {<Paragraph>改进活动报名制度，协助开发社团微信公众号和报名小程序；<br/>组织羽毛球教学、国际赛事直播观看、裁判培训；<br/>协办校内主要羽毛球赛事和主办趣味羽毛球赛。任期内两次获校园十佳社团称号。</Paragraph>}
                            </Col>
                        </Row>
                    </Card>
                    <Paragraph></Paragraph>
                    <Card hoverable="true">
                        <Row gutter={20}>
                            <Col span={4} align="center">
                                <Statistic title={<Title level={4}>足球</Title>} value={3} suffix="年" />
                            </Col>
                            <Col span={16}>
                                <Paragraph strong="true">同济大学川渝足球队经理</Paragraph>
                                <Paragraph>负责组织团建活动，队内后勤事务。</Paragraph>
                            </Col>
                        </Row>
                    </Card>
                </div>

                <div className="site-layout-background" style={{ padding: 24, textAlign: 'left' }}>
                    <Row gutter={[0,16]}>
                        <Tag color="success">Microsoft Office</Tag>
                        <Tag color="success">C++</Tag>
                        <Tag color="success">C#</Tag>
                        <Tag color="success">Python</Tag>
                        <Tag color="success">SQL</Tag>
                        <Tag color="success">Android Studio</Tag>
                        <Tag color="success">React</Tag>
                        <Tag color="success">Auto CAD</Tag>
                        <Tag color="success">Catia</Tag>
                        <Tag color="success">ANSYS</Tag>
                        <Tag color="success">Matlab</Tag>
                    </Row>
                    <Row>
                        <Tag color="processing">Adobe Photoshop</Tag>
                        <Tag color="processing">Adobe InDesign</Tag>
                        <Tag color="processing">Adobe Illustrator</Tag>
                        <Tag color="processing">Adobe Premier</Tag>
                    </Row>
                </div>

              
            </>
      )
    }
}

export default PageProfile