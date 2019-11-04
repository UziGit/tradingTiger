import React from 'react';
import axios from 'axios';
// const Index = props => {
//   return <div>{props.children}</div>;
// };

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
