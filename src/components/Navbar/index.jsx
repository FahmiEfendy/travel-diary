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

const Navbar = ({ locale, login }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [menuPosition, setMenuPosition] = useState(null);

  const open = Boolean(menuPosition);

  const handleClick = (event) => {
    setMenuPosition(event.currentTarget);
  };

  const handleClose = () => {
    setMenuPosition(null);
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
  };

  return (
    <div className={login ? classes.headerWrapper_logged : classes.headerWrapper} data-testid="navbar">
      <div className={classes.contentWrapper}>
        <div className={classes.logoImage} onClick={goHome}>
          <img src={login ? LogoBlack : LogoWhite} alt="logo" className={classes.logo} />
        </div>
        {login ? (
          <div className={classes.toolbar} onClick={clearLogin}>
            <div className={classes.toggle} onClick={handleClick}>
              <Avatar className={classes.avatar} src={locale === 'id' ? '/id.png' : '/en.png'} />
              <div className={classes.lang}>{locale}</div>
              <ExpandMoreIcon />
            </div>
            <Profile />
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
