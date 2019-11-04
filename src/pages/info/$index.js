import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Search from '../../components/Search/Search';
class Info extends React.Component {
  render() {
    return (
      <div className="info">
        {/* nar组件 */}
        <NavBar>
          <span>王者荣耀</span>
        </NavBar>
        {/* 搜索栏组件 */}
        <Search></Search>
      </div>
    );
  }
}
export default Info;
