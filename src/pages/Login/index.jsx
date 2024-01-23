import { useState } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { useNavigate } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import { Box, Button, Container, Link, TextField, Typography } from '@mui/material';

import encryptPayload from '@utils/encryptPayload';
import { createStructuredSelector } from 'reselect';
import { setLogin, setToken } from '@containers/Client/actions';
import { postLoginRequest } from './actions';
import { selectLogin } from './selectors';

import classes from './style.module.scss';

const Login = ({ login }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginHandler = () => {
    const loginData = {
      email: encryptPayload(email),
      password: encryptPayload(password),
    };

    dispatch(postLoginRequest(loginData));

    if (login.data.token) {
      dispatch(setLogin(true));
      dispatch(setToken(login.data.token));
    }

    if (!login.isError) navigate('/');
  };

  return (
    // TODO: Validation = All Fields Required and Password Min. 6 Char
    // TODO: Show Error Message When User Input Wrong Email or Password
    <Container maxWidth="xs" className={classes.container}>
      <Typography variant="h5">Login</Typography>
      <Box className={classes.input_container}>
        <Typography variant="body1">Email</Typography>
        <TextField variant="outlined" type="email" fullWidth onChange={(e) => setEmail(e.target.value)} />
        <Typography variant="body1">
          <FormattedMessage id="app_register_form_label_2" />
        </Typography>
        <TextField variant="outlined" type="password" fullWidth onChange={(e) => setPassword(e.target.value)} />
      </Box>
      <Button variant="contained" className={classes.btn_login} onClick={loginHandler}>
        <FormattedMessage id="app_login_button" />
      </Button>
      <Box className={classes.footer_container}>
        <Typography variant="body1" className={classes.footer_text}>
          <FormattedMessage id="app_register_footer" />
        </Typography>
        <Link href="/register" className={classes.footer_link}>
          <FormattedMessage id="app_register_footer_link" />
        </Link>
      </Box>
    </Container>
  );
};

Login.propTypes = {
  login: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  login: selectLogin,
});

export default connect(mapStateToProps)(Login);
