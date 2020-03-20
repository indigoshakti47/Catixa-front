import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Layout, Avatar} from 'antd';
import Title from 'antd/lib/typography/Title';
import {DesktopOutlined, PieChartOutlined,FileOutlined,TeamOutlined,UserOutlined} from '@ant-design/icons'

const { Header, Content, Footer, Sider } = Layout;

function App() {


  
  return(

    <div className="App">
      <Layout>
        <Header style={{padding:10}}>
        <Avatar style={{float:'right'}} icon={<UserOutlined />} />
          <Title style={{color:'white'}} level={3}>CATIXA</Title>
        </Header>
        <Layout>
          <Sider style={{background:'red'}}>Sider</Sider>
          <Layout>
            <Content>
              Content
            </Content>
            <Footer>Footer</Footer>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;





