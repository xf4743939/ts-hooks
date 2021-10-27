import React, { FC } from 'react';
import { Form, Input, Button, Card } from 'antd'
// import useFetch from '../../hooks/UseFetch'
// import {apiLogin} from '../../api/index';

interface Space {
  span: number,
  offset?: number
}

interface Layout {
  labelCol?: Space,
  wrapperCol: Space
}

const layout: Layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
}
const tailLayout: Layout = {
  wrapperCol: { offset: 8, span: 16 }
}


const Login: FC = () => {


  const onFinish = (values: any): void => {
    console.log('success', values)
    const { username, password } = values
    // const { 
    //   response,
    //   error,
    //   isLoading,} = useFetch(apiLogin,{
    //   method: 'POST',
    //   headers:{
    //     "Content-type":"application/json"
    //   },
    //   body:JSON.stringify({username,password})
    // })
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Card style={{ width: 400 }}>
        <Form
          labelCol={{ span: 6 }}
          name="basic"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label='用户名'
            name='username'
            rules={[{ required: true, message: '请输入用户名' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label='密码'
            name='password'
            rules={[{ required: true, message: '请输入密码' }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>

    </div>

  )
}

export default Login