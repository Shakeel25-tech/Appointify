import React from 'react';
import "../styles/RegisterStyles.css";
import { Form,input} from 'antd'
import { Link } from 'react-router-dom';

const Register = () => {

  

  const onfinishHandler = (values) => {
    console.log(values);
  }
  return (
    <>
      <div className="form-container">
        <Form layout="vertical" onFinish={onfinishHandler} className="register-form">
          <h3>Register Form</h3>
          <Form.Item label="Name" name="name">
            <input type="text" required/>
          </Form.Item>
          <Form.Item label="Email" name="email">
            <input type="email" required/>
          </Form.Item>
          <Form.Item label="Password" name="password">
            <input type="password" required/>
          </Form.Item>
          <Link>Already user login here</Link>
          <Form.Item>
            <button className='btn btn-primary' type='submit'>Register</button>
          </Form.Item>

        </Form>

      </div>
    </>
  )
}

export default Register
 