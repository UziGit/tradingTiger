import React from 'react';
import './search.less';
const Search = () => {
  return (
    <div className="search">
      <label className="search-name">
        <i className="iconfont icon-sousuo1"></i>
        <input placeholder="请输入关键字" />
      </label>
      <span>搜索</span>
    </div>
  );
};
export default Search;
