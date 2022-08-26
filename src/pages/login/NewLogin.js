import { MailOutlined, UserOutlined, BankOutlined, CalendarOutlined, SolutionOutlined, LockOutlined } from "@ant-design/icons"
import { Button, Card, Col, Form, Input, Row } from "antd"
import { useNavigate } from 'react-router-dom'

const NewLogin = () => {
    const navigate = useNavigate()

    const onFinish = (values) => {
        console.log('Success:', values)
        navigate('/')
    }
    
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo)
    }

    return (
        <div style={{textAlign:"center", display:"flex", height:'100vh'}}>
            <Card
                style={{width:900, margin:'auto'}}
            >
                <Form
                    name="new_login"
                    className="new_login_form"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <p style={{margin:0}}>Ainda não sou cliente</p>
                    <p>Preencha as informações abaixo, por favor</p>
                    <Row
                        gutter={40}
                        style={{marginTop:50}}
                    >
                        <Col span={12}>
                            <Form.Item
                                name={['name']}
                            >
                                <Input prefix={<UserOutlined />} placeholder="Nome" />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name={['collage']}
                            >
                                <Input prefix={<BankOutlined />} placeholder="Faculdade" />
                            </Form.Item>
                        </Col>
                    
                    
                        <Col span={12}>
                            <Form.Item
                                name={['lastName']}
                            >
                                <Input prefix={<UserOutlined />} placeholder="Sobrenome" />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name={['yearFormation']}
                            >
                                <Input prefix={<CalendarOutlined />} placeholder="Ano formação"/>
                            </Form.Item>
                        </Col>
                    
                    
                        <Col span={12}>
                            <Form.Item
                                name={['email']}
                            >
                                <Input prefix={<MailOutlined />} placeholder="E-mail" />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name={['specialty']}
                            >
                                <Input prefix={<SolutionOutlined />} placeholder="Especialidade" />
                            </Form.Item>
                        </Col>
                    

                        <Col span={12}>
                            <Form.Item
                                name={['password']}
                            >
                                <Input.Password type='password' prefix={<LockOutlined />} placeholder="Senha" />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row justify="center">
                        <Button style={{width:'100%'}} type="primary" htmlType="submit">Cadastrar</Button>
                    </Row>
                </Form>
            </Card>
        </div>
    )
}

export default NewLogin