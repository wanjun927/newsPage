import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Icon } from 'antd';
import axios from 'axios'
import logo from '../../img/logo.png'
import './style.css'

class AppHeader extends Component {

  constructor(props) {
    super(props);
    this.state = {
     list: []
    }
  }

  getMenuItem() {
    return this.state.list.map(item => {
      return (
        <Menu.Item key={item.id}>
          <Link to={`/${item.id}`}>
            <Icon type={item.icon} />
            {item.title}
          </Link>
        </Menu.Item>
      )
    })
  }

  // react需要在生命周期函数中发送阿贾克斯请求
  componentDidMount() {
    axios.get('http://www.dell-lee.com/react/api/header.json').then((res) => {
      const { data } = res.data
      this.setState({
        list: data
      })
    })
  }

  render() {
    return <div>
      <Link to="/">
      <img src={logo} className="app__header__logo"/>
      </Link>
      <Menu  mode="horizontal" className="app__header__menu">
        { this.getMenuItem() }
      </Menu>
      
    </div>
  }
}

export default AppHeader;