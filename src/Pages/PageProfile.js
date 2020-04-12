import React from 'react';

import { 
    Layout, Steps,Tag, Statistic, Avatar, Card, Col, Row
} from 'antd';

import {
CustomerServiceOutlined,
} from '@ant-design/icons';
  
const { Content } = Layout;

const { Step } = Steps;

class PageProfile extends React.Component{  
    render() {
      return (
          <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
              <Row gutter={0}>
                    <Col span={6}>
                        <div className="site-layout-background" style={{ padding: 24, textAlign: 'left' }}>
                            <Avatar src="Profilepic.jpg" size={200}/>
                            陈诗艺
                        </div>
                    </Col>

                    <Col span={18}>
                        <div className="site-layout-background" style={{ padding: 24, textAlign: 'left' }}>
                            <Steps direction="vertical" current={1}>
                                <Step title="同济大学汽车学院车辆工程学士" description="大四时参加巴黎中央理工学校（CentraleSupélec）为期六个月的交换项目。本科期间还于复旦大学辅修新闻学专业。"/>
                                <Step title="巴黎高科国立矿业学校 (Mines ParisTech) 工程师二年级" description="法国工程师文凭，等同于硕士一年级在读。专业方向为信息系统管理。"/>
                                <Step title="寻找一份短期实习" description="Web前端开发、App开发、数据分析和开发类实习岗位，五月底可入职。"/>
                            </Steps>
                        </div>
                    </Col>
                </Row>
                
              <div className="site-card-wrapper" style={{ padding: 24, textAlign: 'left' }}>
                <Row gutter={16}>
                    <Col span={4}>
                        <Card size="small" title="英语" hoverable={true} >
                            TOEFL 99, CET-6
                        </Card>
                    </Col>
                    <Col span={4}>
                        <Card size="small" title="法语" hoverable={true} >
                            TCF B2
                        </Card>
                    </Col>
                    <Col span={4}>
                        <Card size="small" title="西班牙语" hoverable={true} >
                            初学七个月
                        </Card>
                    </Col>
                    <Col span={4}>
                        <Card size="small" title="汉语" hoverable={true} >
                            母语
                        </Card>
                    </Col>
                </Row>
              </div>

              <div className="site-layout-background" style={{ padding: 24, textAlign: 'left' }}>
                <Row gutter={[16,16]}>
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
                <Row gutter={16}>
                    <Tag color="processing">Adobe Photoshop</Tag>
                    <Tag color="processing">Adobe InDesign</Tag>
                    <Tag color="processing">Adobe Illustrator</Tag>
                    <Tag color="processing">Adobe Premier</Tag>
                </Row>
              </div>

              <div className="site-layout-background" style={{ padding: 24, textAlign: 'left' }}>
              <Row gutter={16}>
                <Col span={4}>
                    <Statistic title="羽毛球" value={8} prefix={<CustomerServiceOutlined />} suffix="年" />
                </Col>
                <Col span={4}>
                    <Statistic title="足球" value={3} suffix="年" />
                </Col>
              </Row>
              </div>
          </Content>

      )
    }
}

export default PageProfile