/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { AppBar, Badge, Toolbar, IconButton, InputBase } from '@material-ui/core';
import {
  AccountCircle,
  Menu as MenuIcon,
  Notifications as NotificationsIcon,
  Search as SearchIcon,
  MoreVert as MoreIcon,
} from '@material-ui/icons';
import headerStyles from '../styles/material-ui/headerStyles';
import logo from '../images/logo.png';
import logoDark from '../images/logo_dark.png';

// eslint-disable-next-line no-unused-vars
const Header = ({ user, mode }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [logoStyle, setLogoStyle] = useState(logo);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const [notifications, setNotifications] = useState([]);

  const headerClasses = headerStyles();

  useEffect(() => {
    if (mode === 'dark') setLogoStyle(logoDark);
  });

  useEffect(() => {
    if (mode === 'light') setLogoStyle(logo);
    else setLogoStyle(logoDark);
  }, [mode]);

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          aria-label="open drawer"
          className={ headerClasses.menuButton }
          color="inherit"
          edge="start"
        >
          <MenuIcon />
        </IconButton>
        <img className={ headerClasses.logo } src={ logoStyle } alt="Logo" />
        {/* Add search style */ }
        <div className={ headerClasses.grow } />
        <div className={ headerClasses.search }>
          {/* Add searchIcon style */ }
          <div className={ headerClasses.searchIcon }>
            <SearchIcon />
          </div>
          {/* Add mobile styles */ }
          <div>
            <InputBase
              classes={{
                root: headerClasses.inputRoot,
                input: headerClasses.inputInput,
              }}
              inputProps={ { 'aria-label': 'search' } }
              placeholder="Search"
            />
          </div>
        </div>
        <div className={ headerClasses.sectionDesktop }>
          <IconButton aria-label={ `show ${ notifications.length } new notifications` } color="inherit">
            <Badge badgeContent={ notifications.length } color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton>
            <AccountCircle />
          </IconButton>
        </div>
        <div className={ headerClasses.sectionMobile }>
          <IconButton
            aria-label="show more"
            aria-haspopup="true"
            color="inherit"
          >
            <MoreIcon />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes =
  {
    user: PropTypes.shape.isRequired,
    mode: PropTypes.string,
  };

Header.defaultProps =
  {
    mode: 'light',
  };

export default Header;
