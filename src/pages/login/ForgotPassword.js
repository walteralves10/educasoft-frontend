import { MailOutlined } from '@ant-design/icons'
import { Card, Form, Button, Input } from 'antd'
import { useNavigate } from 'react-router-dom'

const ForgotPassword = () => {
    const navigate = useNavigate()

    const onFinish = (values) => {
        console.log('Success:', values)
        navigate('/')
    }
    
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo)
    }

    return (
        <div className='forgot-div' style={{height:'100vh', display:'flex', textAlign:'center'}}>
            <Card style={{width: 450, margin:'auto'}}>
                <Form
                name="normal_login"
                className='login_form'
                
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                >
                
                <Form.Item
                    name={['email']}
                >
                    <p>Esqueci minha senha</p>
                    <p style={{marginBottom:60}}>Confirme seu E-mail para continuar</p>
                    <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder='E-mail' />
                </Form.Item>
            
            
                <Form.Item>
                    <Button style={{width:'100%'}} type="primary" size='large' htmlType="submit">
                    Enviar
                    </Button>
                </Form.Item>

                </Form>
            </Card>
        </div>
    )
}

export default ForgotPassword