import { useState } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { useNavigate } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import { Box, Button, Container, FormLabel, Link, TextField, Typography } from '@mui/material';

import encryptPayload from '@utils/encryptPayload';
import { createStructuredSelector } from 'reselect';
import { setLogin, setToken } from '@containers/Client/actions';
import { postLoginRequest } from './actions';
import { selectLogin } from './selectors';

import classes from './style.module.scss';

const Login = ({ login }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState({ value: '', isError: false });
  const [password, setPassword] = useState({ value: '', isError: false, isNotLength6: false });

  const loginValidation = () => {
    let isValid = true;

    if (email.value === '') {
      setEmail((prevState) => ({ ...prevState, isError: true }));
      isValid = false;
    }

    if (password.value === '') {
      setPassword((prevState) => ({ ...prevState, isError: true }));
      isValid = false;
    }

    if (password.value.length < 6) {
      setPassword((prevState) => ({ ...prevState, isNotLength6: true }));
      isValid = false;
    }

    return isValid;
  };

  const loginHandler = () => {
    const isFormValid = loginValidation();

    if (!isFormValid) return;

    const loginData = {
      email: encryptPayload(email.value),
      password: encryptPayload(password.value),
    };

    dispatch(postLoginRequest(loginData));

    if (login.data.token) {
      dispatch(setLogin(true));
      dispatch(setToken(login.data.token));
    }

    if (!login.isError) navigate('/');
  };
  return (
    // TODO: Show Error Message When User Input Wrong Email or Password
    <Container maxWidth="xs" className={classes.container}>
      <Typography variant="h5">Login</Typography>
      <Box className={classes.input_container}>
        <Typography variant="body1">Email</Typography>
        {email.isError && (
          <FormLabel className={classes.input_error}>
            <FormattedMessage id="app_login_email_empty" />{' '}
          </FormLabel>
        )}
        <TextField
          required
          variant="outlined"
          type="email"
          fullWidth
          onChange={(e) => setEmail({ value: e.target.value, isError: e.target.value === '' })}
        />
        <Typography variant="body1">
          <FormattedMessage id="app_register_form_label_2" />
        </Typography>
        {password.isError ? (
          <FormLabel className={classes.input_error}>
            <FormattedMessage id="app_login_password_empty" />
          </FormLabel>
        ) : (
          password.isNotLength6 && (
            <FormLabel className={classes.input_error}>
              <FormattedMessage id="app_login_passowrd_is_not_6_char" />
            </FormLabel>
          )
        )}
        <TextField
          required
          variant="outlined"
          type="password"
          fullWidth
          onChange={(e) => setPassword({ value: e.target.value, isError: e.target.value === '' })}
        />
      </Box>
      <Button variant="contained" className={classes.btn_login} onClick={loginHandler}>
        <FormattedMessage id="app_login_button" />
      </Button>
      <Box className={classes.footer_container}>
        <Typography variant="body1" className={classes.footer_text}>
          <FormattedMessage id="app_login_footer" />
        </Typography>
        <Link href="/register" className={classes.footer_link}>
          <FormattedMessage id="app_login_footer_link" />
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
