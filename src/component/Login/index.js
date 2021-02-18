import React, { Component } from 'react'
import { Button, Modal, Input, message } from 'antd';
import axios from 'axios'
// import { Card } from 'antd';

// 登录界面要判断登录的状态

class Login extends Component {

  constructor(props) {
    super(props);
    this.showModal = this.showModal.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.changeUser = this.changeUser.bind(this);
    this.changePassword = this.changePassword.bind(this)
    this.checkUser = this.checkUser.bind(this)
    this.logout = this.logout.bind(this)

    this.state = {
      isLogin: false,
      modal: false,
      user: '',
      password: ''
    }
  }

  showModal = () => {
    this.setState({
      modal: true,
    });
  };

  handleCancel = e => {
    this.setState({
      modal: false,
    });
  };

  changeUser = (e) => {
    const user = e.target.value;
    this.setState({
      user
    })
  }

  changePassword = (e) => {
    const password = e.target.value;
    this.setState({
      password
    })
  }

  checkUser = () => {
    const { user, password } = this.state;
    console.log(user, password)
    let url =  `http://www.dell-lee.com/react/api/login.json?user=${user}&password=${password}`
    axios.get(url, {
			withCredentials: true
		}).then((res) => {
      console.log(res)
      const { login } = res.data.data
      console.log(login)
      if(login){
        message.success('登录成功')
        this.setState({
          modal:false,
          isLogin: true
        })
      } else {
        message.error('账号或密码错误')
      }
    })
  }

  logout () {
    axios.get("http://www.dell-lee.com/react/api/logout.json",{
      withCredentials: true
    }).then((res) => {
      console.log(res)
      const { logout } = res.data;
      console.log(logout)
      if(logout) {
        this.setState({
          isLogin: false
        })
      }
    })
  }

  render() {
    const { isLogin } = this.state;
    return (
      <div>
        {
          isLogin ? <Button type="primary" style={{marginBottom: '10px'}} onClick={this.logout}>退出</Button> : <Button type="primary" style={{marginBottom: '10px'}} onClick={this.showModal}>登录</Button>
        }
        <Modal
          title="Basic Modal"
          visible={this.state.modal}
          onOk={this.checkUser}
          onCancel={this.handleCancel }
        >
          <span>账号：</span>
          <Input
            placeholder="请输入手机号或邮箱"
            value={this.state.user}
            onChange={this.changeUser}
          />
          <span>密码：</span>
          <Input
            placeholder="请输入密码"
            type="password"
            value={this.state.password}
            onChange={this.changePassword}
          />
        </Modal>
      </div>
    )
  }

  componentDidMount() {
    axios.get("http://www.dell-lee.com/react/api/isLogin.json",{
      withCredentials: true
    }).then((res) => {
      const { login } = res.data;
      this.setState({
        isLogin: login
      })
    })
  }
}

export default Login;