import React from 'react';
import { 
    Layout, 
    Typography
  } from 'antd';

const { Content } = Layout;

const { Title, Paragraph } = Typography;

class Mecatro extends React.Component{
    render(){
        return(
            <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
            <div className="site-layout-background" style={{ padding: 24, textAlign: 'left' }}>
              <Typography>
                  <Title>2020.03 以回收塑料制成的3D打印线材</Title>
                  <Paragraph>
                    Mines Paristech - Projet de Mécatronique
                  </Paragraph>
                  //修改文字描述
                  <Paragraph>
                    text
                    法语主页：https://sites.google.com/view/2019-2020-gr10/home
                  </Paragraph>
              </Typography>
              //图片间距 自动调整大小 加图片注释
              <img src="broyeuse_entier.jpg" height='300pt'/>
              //切割机总布置图
              <img src="extrudeuse.jpg" height='300pt'/>
              //搅拌机总布置图
              <img src="broyeuse_catia.png" height='300pt'/>
              //切割机Catia模型
              //搅拌机Catia模型
            </div>
          </Content>
        )
    }
}

export default Mecatro