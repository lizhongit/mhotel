import React, { Component } from 'react';
import {
  MenuList,
  MenuItem,
  ListItemText,
  ListItemIcon,
  Typography,
} from '@material-ui/core';

import Settings from '@material-ui/icons/Settings';
import AccountCircle from '@material-ui/icons/AccountCircle';
import AccountBox from '@material-ui/icons/AccountBox';
import Assignment from '@material-ui/icons/Assignment';
import Home from '@material-ui/icons/Home';
import BarChart from '@material-ui/icons/BarChart';

import { Link } from 'react-router-dom';

class Sidebar extends Component {
  state = {
    isMenuOpen: false,
  }

  render() {
    return (
      <div className="app-sidebar">
        <div className="app-sidebar-userinfo">
          <AccountCircle className="app-sidebar-userinfo-icon" />
        </div>

        <MenuList>
          <Link to="/zoom/overview">
            <MenuItem>
              
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText inset primary="入住预定" />
            </MenuItem>
          </Link>

          <MenuItem>
            <ListItemIcon>
              <Assignment />
            </ListItemIcon>
            <ListItemText inset primary="开房记录" />
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <BarChart />
            </ListItemIcon>
            <ListItemText inset primary="汇总报表" />
          </MenuItem>

          <MenuItem>
            <ListItemIcon>
              <AccountBox />
            </ListItemIcon>
            <ListItemText inset primary="个人中心" />
          </MenuItem>

          <MenuItem>
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            <ListItemText inset primary="系统设置" />
          </MenuItem>
        </MenuList>
      </div>
    );
  }
}

export default Sidebar;
