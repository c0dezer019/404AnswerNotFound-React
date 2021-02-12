import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { AppBar, Badge, Menu, MenuItem, Toolbar, IconButton, InputBase} from '@material-ui/core';
import { AccountCircle, MenuIcon, MoreIcon, NotificationsIcon, SearchIcon } from '@material-ui/icons';
import logo from '../images/logo.png';
import logoDark from '../images/logo_dark.png';

// eslint-disable-next-line no-unused-vars
const Header = ({ user, mode }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [logoStyle, setLogoStyle] = useState(logo);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const [notifications, setNotifications] = useState([]);

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
        {/* Add menuButton style */}
        <IconButton
          aria-label="open drawer"
          color="inherit"
          edge="start"
        >
          <MenuIcon />
        </IconButton>
        <img src={ logoStyle } alt="Logo" />
        {/* Add search style */}
        <div>
          {/* Add searchIcon style */}
          <div>
            <SearchIcon />
          </div>
          {/* Add mobile styles */}
          <div>
            {/* Add root and input styles */}
            <InputBase
              inputProps={{ 'aria-label': 'search' }}
              placeholder="Search"
            />
          </div>
        </div>
        {/* classes.grow goes here */}
        <div />
        {/* Add sectionDesktop style */}
        <div>
          <IconButton aria-label={ `show ${ notifications.length } new notifications` } color="inherit">
            <Badge badgeContent={ notifications.length } color="secondary">
              <NotificationsIcon />
            </Badge>
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
