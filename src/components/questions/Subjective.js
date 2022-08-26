import { Row, Col, Form, Input, Button, Space, } from 'antd'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons'

const Subjective = () => {
    const onFinish = (values) => {
        console.log('Received values of form:', values)
    }

    return (<>
        <Form style={{marginTop:10}} name="dynamic_form_nest_item" onFinish={onFinish} autoComplete="off">
            <Form.List name="users">
                {(fields, { add, remove }) => (
                    <>
                        {fields.map(({ key, name, ...restField }) => (
                            <Space
                                key={key}
                                style={{
                                    display: 'flex',
                                    marginBottom: 8,
                                }}
                                align="baseline"
                            >

                                <Row gutter={5}>
                                    <Col span={24}>
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'question']}
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Missing question',
                                                },
                                            ]}
                                        >
                                            <Input.TextArea placeholder="Enunciado da pergunta" />

                                        </Form.Item>
                                    </Col>

                                    <Col span={22}>

                                        <Form.Item
                                            {...restField}
                                            name={[name, 'response']}
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Missing response',
                                                },
                                            ]}
                                        >
                                            <Input.TextArea placeholder='Resposta' />

                                        </Form.Item>

                                    </Col>

                                    <Col span={2}>
                                        <MinusCircleOutlined onClick={() => remove(name)} />
                                    </Col>

                                </Row>

                            </Space>
                        ))}
                        <Form.Item>
                            <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                Adicionar Subjetiva
                            </Button>
                        </Form.Item>
                    </>
                )}
            </Form.List>
            <Row justify='end'>
                <Button type="primary" htmlType="submit">
                    Salvar
                </Button>
            </Row >
        </Form>
    </>)
}

export default Subjective