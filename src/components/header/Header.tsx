import * as React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

const Header: React.SFC = () => (
  <header className="header">
    <NavLink exact to="/"  activeClassName="nav-active">
      推荐音乐
    </NavLink>
    {/* <NavLink to="/hot" activeClassName="nav-active">
      热歌榜
    </NavLink> */}
    <NavLink to="/search" activeClassName="nav-active">
      搜索
    </NavLink>
  </header>
)

export default Header
