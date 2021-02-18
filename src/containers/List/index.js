import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { List } from 'antd';

class MyList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data:[]
    }
  }

  componentWillReceiveProps(nextProps) {
    const id = nextProps.match.params.id
    axios.get("http://www.dell-lee.com/react/api/list.json?id=" + id).then((res) => {
      const { data } = res.data;
      // console.log(res)
      this.setState({
        data
      })
    })
  }

  componentDidMount() {
    let url = "http://www.dell-lee.com/react/api/list.json"
    const id = this.props.match.params.id;
    if(id) {
      url = url + '?id=' + id;
    }
    axios.get(url).then((res) => {
      const { data } = res.data;
      this.setState({
        data
      })
    })
  }

  render() {
    // console.log(this.props)
    return (
      <List
      style={{backgroundColor:'#FFFFFF'}}
      bordered
      dataSource={this.state.data}
      renderItem={item =>
        <List.Item>
          <Link to={`/detail/${item.id}`}>
            {item.title}
          </Link>
        </List.Item>}
    />
    )
  }
}

export default MyList;