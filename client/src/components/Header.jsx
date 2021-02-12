/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { AppBar, Badge, Toolbar, IconButton, InputBase, MenuItem, Menu } from '@material-ui/core';
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
  const [anchorEl, setAnchorEl] = useState({});
  const [logoStyle, setLogoStyle] = useState(logo);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState({});
  const [notifications, setNotifications] = useState([]);

  const headerClasses = headerStyles();
  const profileMenuId = 'account-menu';
  const profileMobileMenuId = 'mobile-account-menu';
  const isMenuOpen = Boolean(Object.keys(anchorEl).length > 0);
  const isMobileMenuOpen = Boolean(Object.keys(mobileMoreAnchorEl).length > 0);

  const handleAccountMenuOpen = e => {
    setAnchorEl(e.currentTarget);
    console.log(anchorEl);
  };

  const handleMobileAccountMenuOpen = e => {
    setMobileMoreAnchorEl(e.currentTarget);
  };

  const handleAccountMenuClose = () => {
    setAnchorEl({});
  };

  const handleMobileAccountMenuClose = () => {
    setMobileMoreAnchorEl({});
  };

  const accountMenu = (
    <Menu
      anchorEl={ anchorEl }
      anchorOrigin={ { vertical: 'top', horizontal: 'right' } }
      id="account-menu"
      keepMounted
      transformOrigin={ { vertical: 'top', horizontal: 'right' } }
      open={ isMenuOpen }
      onClose={ handleAccountMenuClose }
    >
      <MenuItem onClick={ handleAccountMenuClose }>Profile</MenuItem>
      <MenuItem onClick={ handleAccountMenuClose }>Preferences</MenuItem>
    </Menu>
  );

  const mobileAccountMenu = (
    <Menu
      anchorEl={ mobileMoreAnchorEl }
      anchorOrigin={ { vertical: 'top', horizontal: 'right' } }
      id="mobile-account-menu"
      keepMounted
      transformOrigin={ { vertical: 'top', horizontal: 'right' } }
      open={ isMobileMenuOpen }
      onClose={ handleMobileAccountMenuClose }
    >
      <MenuItem>
        <IconButton
          aria-label={ `show ${ notifications.length } new notifications` }
          color="inherit"
        >
          <Badge badgeContent={ notifications.length } color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onclick={ handleMobileAccountMenuOpen }>
        <IconButton
          aria-controls={ profileMobileMenuId }
          aria-haspopup="true"
          aria-label={ user !== '' ? `account of ${ user }` : 'no user logged in' }
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  useEffect(() => {
    if (mode === 'dark') setLogoStyle(logoDark);
  });

  useEffect(() => {
    if (mode === 'light') setLogoStyle(logo);
    else setLogoStyle(logoDark);
  }, [mode]);

  return (
    <div>
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
                classes={ {
                  root: headerClasses.inputRoot,
                  input: headerClasses.inputInput,
                } }
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
            <IconButton
              aria-controls={ profileMenuId }
              aria-haspopup="true"
              aria-label="account of current user"
              color="inherit"
              edge="end"
              id={ profileMenuId }
              onClick={ handleAccountMenuOpen }
            >
              <AccountCircle />
            </IconButton>
          </div>
          <div className={ headerClasses.sectionMobile }>
            <IconButton
              aria-controls={ profileMobileMenuId }
              aria-haspopup="true"
              aria-label="show more"
              color="inherit"
              id={ profileMobileMenuId }
              onClick={ handleMobileAccountMenuOpen }
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      { accountMenu }
      { mobileAccountMenu }
    </div>
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
