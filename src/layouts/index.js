import React from 'react';
import axios from 'axios';
import { Button } from 'antd-mobile';

class Index extends React.Component {
  render() {
    return <div>{this.props.children}</div>;
  }
  componentDidMount() {
    axios.get('/api/h5/index/data').then(response => {
      console.log(response.data);
    });
  }
}

export default Index;
