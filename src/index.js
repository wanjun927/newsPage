import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Layout } from 'antd';
import AppHeader from './component/Header/'
import Login from './component/Login/'
import MyList from './containers/List/'
import Detail from './containers/Detail/'
import 'antd/dist/antd.css';
import './style.css'

const { Header, Footer, Content } = Layout;

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout style={{ minWidth: 1300 , height: '100%'}}>
          <Header className="header">
            <AppHeader />
          </Header>
          <Content className="content">
            <Login />
            <Switch>
              <Route path="/detail/:id" component={Detail}></Route>
              <Route path="/:id?" component={MyList}></Route>
            </Switch>
          </Content>
          <Footer className="footer">Footer</Footer>
      </Layout>
    </BrowserRouter>
    )
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
