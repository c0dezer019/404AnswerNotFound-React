import React from 'react';
import { Badge, IconButton, Menu, MenuItem } from '@material-ui/core';
import { AccountCircle, Notifications as NotificationsIcon } from '@material-ui/icons';

const ProfileMenu = ({ el, handleMenuClose, handleMenuOpen, handleMobileMenuClose, notifications, user }) => {
  const isMenuOpen = Boolean(el);
  const isMobileMenuOpen = Boolean(el);

  // Displays mobile menu or desktop menu depending on el.
  const menu = el === 'account-menu' ? (
    <Menu
      anchorEl={ el }
      anchorOrigin={ { vertical: 'top', horizontal: 'right' } }
      id="account-menu"
      keepMounted
      transformOrigin={ { vertical: 'top', horizontal: 'right' } }
      open={ isMenuOpen }
      onClose={ handleMenuClose }
    >
      <MenuItem onClick={ handleMenuClose }>Profile</MenuItem>
      <MenuItem onClick={ handleMenuClose }>Preferences</MenuItem>
    </Menu>
  ) : (
    <Menu
      anchorEl={ el }
      anchorOrigin={ { vertical: 'top', horizontal: 'right' } }
      id="mobile-account-menu"
      keepMounted
      transformOrigin={ { vertical: 'top', horizontal: 'right' } }
      open={ isMobileMenuOpen }
      onClose={ handleMobileMenuClose }
    >
      <MenuItem>
        <IconButton
          aria-label={ `show ${ notifications } new notifications` }
          color="inherit"
        >
          <Badge badgeContent={ notifications } color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onclick={ handleMenuOpen }>
        <IconButton
          aria-controls={ el.id }
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

  console.log(menu);

  return (
    { menu }
  );
};

export default ProfileMenu;
