import { Breadcrumb } from 'antd'
import Body from '../../components/body/Body';

const User = () => {
    return (<>
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>Cadastro do Usuário</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{
              background: '#fff',
              padding: 24,
              minHeight: 360,
            }}
          >
            <Body />
          </div>
          </>
    )
}

export default User