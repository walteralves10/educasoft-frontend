import { Input, Form, Button, Select, Breadcrumb, Row } from 'antd'
import React from "react"

const Matter = () => {
    const onFinish = (values) => {
        console.log('Success:', values)
    }

    return (<>
        <Breadcrumb
            style={{
                margin: '16px 0',
            }}
        >
            <Breadcrumb.Item>Cadastrar Materias</Breadcrumb.Item>
        </Breadcrumb>
        <div
            className="site-layout-background"
            style={{
                background: '#fff',
                padding: 24,
                minHeight: 360,
            }}
        >
            <Form
                onFinish={onFinish}
            >
                <Form.Item
                    name={['name']}
                >
                    <Input placeholder='Nome Matéria: Ex. Equações de segundo grau' />
                </Form.Item>

                <Form.Item
                    name={['type']}
                >
                    <Select placeholder='Vincular disciplina'>
                        <Select.Option key='1' value='um'>um</Select.Option>
                        <Select.Option key='2' value='dois'>dois</Select.Option>
                        <Select.Option key='3' value='tres'>tres</Select.Option>
                    </Select>
                </Form.Item>
                <Row
                    justify='end'
                >
                    <Button type='primary' htmlType='submit'>Salvar</Button>
                </Row>
            </Form>
        </div>
    </>
    )
}

export default Matter