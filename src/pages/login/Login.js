import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { Button, Card, Form, Input } from 'antd'
import { useNavigate } from 'react-router-dom'
import React from 'react'


const Login = () => {
    const navigate = useNavigate()

    const onFinish = (values) => {
        console.log('Success:', values)
        navigate('/home')
    }
    
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo)
    }

      return (
        <div className='tiltado' style={{height:'100vh', display:'flex', textAlign:'center'}}>
            <Card style={{width: 450, margin:'auto'}}>
                <Form
                name="normal_login"
                className='login_form'
                
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                >
                <Form.Item
                    name="username"
                    rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                    ]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                </Form.Item>
            
                <Form.Item
                    name="password"
                    rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                    ]}
                >
                    <Input 
                        prefix={<LockOutlined className="site-form-item-icon"/>} 
                        type="password"
                        placeholder='password'
                    />
                </Form.Item>
            
                <Form.Item>
                    <Button style={{width:'100%'}} type="primary" size='large' htmlType="submit">
                    Entrar
                    </Button>
                </Form.Item>
                
                <Form.Item
                    style={{justifyContent:'center', marginBottom:0}}
                >
                    
                    <a href="/forgot">Esqueci minha senha </a>
                
                </Form.Item>
                <Form.Item
                    style={{justifyContent:'center', marginBottom:0}}
                >
                    
                    <a href="/newLogin">Ainda não sou cliente </a>
                    
                </Form.Item>

                </Form>
            </Card>
        </div>
      )
}

export default Login