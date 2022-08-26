import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons'
//import './Style.css'
import { Layout, Menu } from 'antd'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const { Sider, Header, Content, Footer } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  }
}

const items = [
  getItem(<Link to='/home'>Início</Link>, '1', <PieChartOutlined />),
  getItem(<Link to='/user'>Usuários</Link>, '2', <DesktopOutlined />),
  getItem('Cadastros', 'sub1', <UserOutlined />, [
    getItem(<Link to='/discipline'>Disciplinas</Link>, '3'),
    getItem(<Link to='/matter'>Materias</Link>, '4'),
    getItem(<Link to='/question'>Perguntas</Link>, '5'),
    getItem(<Link to='/proof'>Provas</Link>, '6'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '7'), getItem('Team 2', '8')]),
  getItem('Files', '9', <FileOutlined />),
]

const Dashboard = ({children}) => {
  const [collapsed, setCollapsed] = useState(false)
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="logo" style={{height:'32px', margin:'16px', backgroundColor:'GrayText'}} />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout className="site-layout" >
        <Header
          className="site-layout-background"
          style={{
            background: '#fff',
            padding: 0,
          }}
        />
        <Content
          style={{
            margin: '0 16px',
          }}
        >
           {children}
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  )
}

export default Dashboard;

// #components-layout-demo-side .logo {
//   height: 32px;
//   margin: 16px;
//   background: rgba(255, 255, 255, 0.3);
// }

// .site-layout .site-layout-background {
//   background: #fff;
// }