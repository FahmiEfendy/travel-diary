import PropTypes from 'prop-types';
import { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Button, Typography } from '@mui/material';

import Profile from '@components/Profile';
import { setLocale } from '@containers/App/actions';

import classes from './style.module.scss';
import LogoWhite from '../../asset/logo-white.png';
import LogoBlack from '../../asset/logo-black.png';

const Navbar = ({ locale }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [menuPosition, setMenuPosition] = useState(null);
  const open = Boolean(menuPosition);

  // TODO: Get Value From Global State
  const [isLogin, setIsLogin] = useState(true);

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

  return (
    <div className={isLogin ? classes.headerWrapper_logged : classes.headerWrapper} data-testid="navbar">
      <div className={classes.contentWrapper}>
        <div className={classes.logoImage} onClick={goHome}>
          <img src={isLogin ? LogoBlack : LogoWhite} alt="logo" className={classes.logo} />
        </div>
        {isLogin ? (
          <div className={classes.toolbar}>
            <div className={classes.toggle} onClick={handleClick}>
              <Avatar className={classes.avatar} src={locale === 'id' ? '/id.png' : '/en.png'} />
              <div className={classes.lang}>{locale}</div>
              <ExpandMoreIcon />
            </div>
            <Profile />
          </div>
        ) : (
          <Button className={classes.container_button}>
            <Button variant="outlined" className={classes.button_login}>
              Login
            </Button>
            <Button variant="contained" className={classes.button_register}>
              Register
            </Button>
          </Button>
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
      {!isLogin && (
        <Box className={classes.header_container}>
          <Typography variant="h4">
            <FormattedMessage id="app_journey_header_text" />
          </Typography>
          <Typography variant="body1">
            <FormattedMessage id="app_journey_header_sub_text" />
          </Typography>
        </Box>
      )}
      {!isLogin && <Box className={classes.backdrop} />}
    </div>
  );
};

Navbar.propTypes = {
  locale: PropTypes.string.isRequired,
};

export default Navbar;
