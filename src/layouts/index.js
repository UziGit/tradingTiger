import React from 'react';
import axios from 'axios';
import '../assets/reset.less';

class Index extends React.Component {
  render() {
    return <div className='layout'>{this.props.children}</div>;
  }
  componentDidMount() {
    axios.get('/api/h5/index/data').then(response => {
      console.log(response.data);
    });
  }
}

export default Index;
