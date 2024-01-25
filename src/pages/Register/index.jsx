import { useState } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Container, FormLabel, TextField, Typography } from '@mui/material';

import { connect, useDispatch } from 'react-redux';
import encryptPayload from '@utils/encryptPayload';
import { createStructuredSelector } from 'reselect';
import { postRegisterRequest } from './actions';

import classes from './style.module.scss';
import { selectRegister } from './selectors';

const Register = ({ register }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [fullname, setFullname] = useState({ value: '', isError: false });
  const [email, setEmail] = useState({ value: '', isError: false });
  const [password, setPassword] = useState({ value: '', isError: false, isNotLength6: false });

  const loginValidation = () => {
    let isValid = true;

    if (fullname.value === '') {
      setFullname((prevState) => ({ ...prevState, isError: true }));
      isValid = false;
    }

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

  const registerHandler = () => {
    const isFormValid = loginValidation();

    if (!isFormValid) return;

    const registerData = {
      fullname: encryptPayload(fullname.value),
      email: encryptPayload(email.value),
      password: encryptPayload(password.value),
    };
    dispatch(postRegisterRequest(registerData));

    if (register.isError) return;

    navigate('/login');
  };

  return (
    // TODO: Show Error Message When User Input Wrong Email or Password
    <Container maxWidth="xs" className={classes.container}>
      <Typography variant="h5">
        <FormattedMessage id="app_register_header" />
      </Typography>
      <Box className={classes.input_container}>
        <Typography variant="body1">
          <FormattedMessage id="app_register_form_label_1" />
        </Typography>
        {fullname.isError && (
          <FormLabel className={classes.input_error}>
            <FormattedMessage id="app_register_fullname_empty" />
          </FormLabel>
        )}
        <TextField
          variant="outlined"
          type="text"
          fullWidth
          value={fullname.value}
          onChange={(e) => setFullname({ value: e.target.value, isError: e.target.value === '' })}
        />
        <Typography variant="body1">Email</Typography>
        {email.isError && (
          <FormLabel className={classes.input_error}>
            <FormattedMessage id="app_login_email_empty" />{' '}
          </FormLabel>
        )}
        <TextField
          variant="outlined"
          type="email"
          fullWidth
          value={email.value}
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
          variant="outlined"
          type="password"
          fullWidth
          value={password.value}
          onChange={(e) => setPassword({ value: e.target.value, isError: e.target.value === '' })}
        />
      </Box>
      <Button variant="contained" className={classes.btn_regist} onClick={registerHandler}>
        <FormattedMessage id="app_register_button" />
      </Button>
    </Container>
  );
};

Register.propTypes = {
  register: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  register: selectRegister,
});

export default connect(mapStateToProps)(Register);
