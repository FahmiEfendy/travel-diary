import PropTypes from 'prop-types';
import { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { connect, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Button, Typography } from '@mui/material';

import Profile from '@components/Profile';
import { setLocale } from '@containers/App/actions';
import { selectLogin } from '@containers/Client/selectors';
import { setLogin, setToken } from '@containers/Client/actions';

import classes from './style.module.scss';
import LogoWhite from '../../asset/logo-white.png';
import LogoBlack from '../../asset/logo-black.png';
import BookmarkIcon from '../../asset/bookmark.svg';
import LogoutIcon from '../../asset/logout-icon.svg';
import ProfileIcon from '../../asset/profile-icon.svg';
import NewJourneyIcon from '../../asset/new-journey.svg';

const Navbar = ({ locale, login }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [menuPosition, setMenuPosition] = useState(null);
  const [dropdownPosition, setDropdownPosition] = useState(null);

  const open = Boolean(menuPosition);
  const isDropdownOpen = Boolean(dropdownPosition);

  const handleClick = (event) => {
    setMenuPosition(event.currentTarget);
  };

  const dropdownClickHandler = (e) => {
    setDropdownPosition(e.currentTarget);
  };

  const handleClose = () => {
    setMenuPosition(null);
  };

  const dropdownCloseHandler = () => {
    setDropdownPosition(null);
  };

  const onSelectLang = (lang) => {
    if (lang !== locale) {
      dispatch(setLocale(lang));
    }
    handleClose();
  };

  const goHome = () => {
    navigate('/');
  };

  const clearLogin = () => {
    dispatch(setToken(null));
    dispatch(setLogin(false));
    dropdownCloseHandler();
  };

  return (
    <>
      <div className={login ? classes.headerWrapper_logged : classes.headerWrapper} data-testid="navbar">
        <div className={classes.contentWrapper}>
          <div className={classes.logoImage} onClick={goHome}>
            <img src={login ? LogoBlack : LogoWhite} alt="logo" className={classes.logo} />
          </div>
          {login ? (
            <div className={classes.toolbar}>
              <div className={classes.toggle} onClick={handleClick}>
                <Avatar className={classes.avatar} src={locale === 'id' ? '/id.png' : '/en.png'} />
                <div className={classes.lang}>{locale}</div>
                <ExpandMoreIcon />
              </div>
              <div className={classes.toggle_dropdown} onClick={dropdownClickHandler}>
                <Profile />
              </div>
            </div>
          ) : (
            <Box className={classes.container_button}>
              <Button variant="outlined" className={classes.button_login} onClick={() => navigate('/login')}>
                Login
              </Button>
              <Button variant="contained" className={classes.button_register} onClick={() => navigate('/register')}>
                Register
              </Button>
            </Box>
          )}
          <Menu open={open} anchorEl={menuPosition} onClose={handleClose}>
            <MenuItem onClick={() => onSelectLang('id')} selected={locale === 'id'}>
              <div className={classes.menu}>
                <Avatar className={classes.menuAvatar} src="/id.png" />
                <div className={classes.menuLang}>
                  <FormattedMessage id="app_lang_id" />
                </div>
              </div>
            </MenuItem>
            <MenuItem onClick={() => onSelectLang('en')} selected={locale === 'en'}>
              <div className={classes.menu}>
                <Avatar className={classes.menuAvatar} src="/en.png" />
                <div className={classes.menuLang}>
                  <FormattedMessage id="app_lang_en" />
                </div>
              </div>
            </MenuItem>
          </Menu>
        </div>
        {!login && (
          <Box className={classes.header_container}>
            <Typography variant="h4">
              <FormattedMessage id="app_journey_header_text" />
            </Typography>
            <Typography variant="body1">
              <FormattedMessage id="app_journey_header_sub_text" />
            </Typography>
          </Box>
        )}
        {!login && <Box className={classes.backdrop} />}
      </div>
      {login && (
        <Menu open={isDropdownOpen} anchorEl={dropdownPosition} onClose={dropdownCloseHandler}>
          <MenuItem
            onClick={() => {
              navigate('/profile');
              dropdownCloseHandler();
            }}
          >
            <div className={classes.dropdown}>
              <div className={classes.menu_icon}>
                <img src={ProfileIcon} alt="Profile" />
              </div>
              <div className={classes.menu_list}>
                <FormattedMessage id="app_dropdown_profile" />
              </div>
            </div>
          </MenuItem>
          <MenuItem
            onClick={() => {
              navigate('/journey/create');
              dropdownCloseHandler();
            }}
          >
            <div className={classes.dropdown}>
              <div className={classes.menu_icon}>
                <img src={NewJourneyIcon} alt="New Journey" />
              </div>
              <div className={classes.menu_list}>
                <FormattedMessage id="app_dropdown_new_journey" />
              </div>
            </div>
          </MenuItem>
          <MenuItem
            onClick={() => {
              navigate('/bookmark');
              dropdownCloseHandler();
            }}
          >
            <div className={classes.dropdown}>
              <div className={classes.menu_icon}>
                <img src={BookmarkIcon} alt="Bookmark" />
              </div>
              <div className={classes.menu_list}>
                <FormattedMessage id="app_dropdown_bookmark" />
              </div>
            </div>
          </MenuItem>
          <MenuItem onClick={clearLogin} onClose={dropdownCloseHandler}>
            <div className={classes.dropdown}>
              <div className={classes.menu_icon}>
                <img src={LogoutIcon} alt="Logout" />
              </div>
              <div className={classes.menu_list}>
                <FormattedMessage id="app_dropdown_logout" />
              </div>
            </div>
          </MenuItem>
        </Menu>
      )}
    </>
  );
};

Navbar.propTypes = {
  locale: PropTypes.string.isRequired,
  login: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  login: selectLogin,
});

export default connect(mapStateToProps)(Navbar);
