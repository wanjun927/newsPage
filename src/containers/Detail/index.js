import React, { Component } from 'react'
import axios from 'axios'
import { Card } from 'antd';
import './style.css'



class Detail extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title:"title",
      content:"content"
    }
  }

  render() {
    return (
      <Card title={this.state.title}>
        <div className="detail" dangerouslySetInnerHTML= {{__html:this.state.content}}/>
    </Card>
    )
  }

  componentDidMount() {
    const id = this.props.match.params.id
    axios.get("http://www.dell-lee.com/react/api/detail.json?id=" + id).then((res) => {
      const { title, content } = res.data.data
      this.setState({
        title,
        content
      })
    })
  }
}

export default Detail;