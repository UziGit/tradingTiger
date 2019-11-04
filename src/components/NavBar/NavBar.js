import React from 'react';
import { NavBar, Icon } from 'antd-mobile';
import './narbar.less';

class NavBars extends React.Component {
  constructor() {
    super();
    this.state = {
      isClick: true,
      navList: [
        { title: '首页', icon: 'icon-shouye' },
        { title: '个人中心', icon: 'icon-ziyuan1' },
        { title: '我要卖', icon: 'icon-qianbao' },
        {
          title: '去收货',
          icon: 'icon-weibiaoti-1',
        },
      ],
    };
  }
  IconClick = () => {
    this.setState({
      isClick: !this.state.isClick,
    });
  };
  render() {
    let cssObj = {
      transform: this.state.isClick ? 'rotate(0deg)' : 'rotate(90deg)',
      transition: 'all .3s',
    };
    let navCss = {
      right: !this.state.isClick ? '15px' : '-130px',
      opacity: !this.state.isClick ? '1' : '0',
      transition: 'all .6s',
    };
    return (
      <div className="narbar">
        <NavBar
          mode="light"
          icon={<Icon type="left" size="lg" />}
          onLeftClick={() => console.log('onLeftClick')}
          rightContent={[
            <i
              className="iconfont icon-ziyuan2"
              key="i1"
              style={cssObj}
              onClick={this.IconClick}
            ></i>,
          ]}
        >
          <span>{this.props.children}</span>
        </NavBar>
        <ul className="navList" style={navCss}>
          {this.state.navList.map((item, index) => {
            return (
              <li key={index}>
                <i className={`iconfont ${item.icon}`}></i>
                <a>{item.title}</a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default NavBars;
