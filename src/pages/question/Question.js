import { Col, Row, Breadcrumb, Radio, Select, Card } from 'antd'
import React, { useState } from 'react'

import Subjective from '../../components/questions/Subjective'
import Objective from '../../components/questions/Objective'

const Question = () => {
    const [valueTypeQuestion, setValueTypeQuestion] = useState(1)

    const onChangeTypeQuestion = (e) => {
        setValueTypeQuestion(e.target.value)
    }

    return (<>
        <Breadcrumb
            style={{
                margin: '16px 0',
            }}
        >
            <Breadcrumb.Item>Cadastrar Perguntas</Breadcrumb.Item>
        </Breadcrumb>
        <div
            className="site-layout-background"
            style={{
                background: '#fff',
                padding: 24,
                minHeight: 360,
            }}
        >

            <Card style={{ textAlign: 'center' }}>
                <Row>
                    <Col span={8}>
                        <Select style={{ width: 300 }} placeholder='Disciplina'>
                            <Select.Option key='1'>Matemática</Select.Option>
                        </Select>
                    </Col>

                    <Col span={8}>
                        <Select style={{ width: 300 }} placeholder='Materia'>
                            <Select.Option key='1'>Equação do segundo grau</Select.Option>
                        </Select>
                    </Col>

                    <Col span={8}>
                        <Radio.Group onChange={onChangeTypeQuestion} value={valueTypeQuestion}>
                            <Radio value={1}>Objetiva</Radio>
                            <Radio value={2}>Subjetiva</Radio>
                        </Radio.Group>
                    </Col>
                </Row>
            </Card>

            {valueTypeQuestion === 1 ? <Objective /> : <Subjective />}

        </div>
    </>
    )
}

export default Question