import {Input, Form, Row, Col, Button} from 'antd'

export default function Body () {

    function handleFinish(a) {
        console.log(a)
    }

    return <>
        <Form
            layout='vertical'
            onFinish={handleFinish}
        >
            <Row gutter={24}>
                <Col span={24}>
                    <Form.Item
                        name={['fullname']}
                        label='Nome Completo'
                    >
                        <Input placeholder="Ex. Fulano da Silva" />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        name={['email']}
                        label='E-mail'
                    >
                        <Input placeholder="fulano@gmail.com" />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        name={['password']}
                        label='Senha'
                    >
                        <Input 
                            type='password'
                            placeholder="********" 
                        />
                    </Form.Item>
                </Col>
            </Row>
            <Row justify='end'>
                <Button type='primary' htmlType='submit'>
                    Salvar
                </Button>
            </Row>
        </Form>
    </>
} 

//20min