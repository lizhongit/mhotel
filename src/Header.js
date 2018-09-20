import React, { Component } from 'react';

import {
  AppBar,
  Toolbar,
  Typography,
  Input,
  Badge,
} from '@material-ui/core';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';

class Header extends Component {
  state = {
    isMenuOpen: false,
  }

  render() {
    const { isMenuOpen } = this.state;

    return (
      <AppBar className="app-header" position="static">
        <Toolbar>
          <IconButton className="app-header-menu-button" color="inherit" aria-label="Open drawer">
            <MenuIcon />
          </IconButton>
          <Typography className="app-header-title" variant="title" color="inherit" noWrap>
            鸿祥酒店管理系统
          </Typography>
          <div />
          <div>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              aria-owns={isMenuOpen ? 'material-appbar' : null}
              aria-haspopup="true"
              onClick={this.handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
          <div>
            <IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
