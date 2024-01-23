import { useState } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Container, TextField, Typography } from '@mui/material';

import { connect, useDispatch } from 'react-redux';
import encryptPayload from '@utils/encryptPayload';
import { createStructuredSelector } from 'reselect';
import { postRegisterRequest } from './actions';

import classes from './style.module.scss';
import { selectRegister } from './selectors';

const Register = ({ register }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const registerHandler = () => {
    const registerData = {
      fullname: encryptPayload(fullname),
      email: encryptPayload(email),
      password: encryptPayload(password),
    };
    dispatch(postRegisterRequest(registerData));

    if (register.isError) return;

    // TODO: Fix Navigate to Login on First Register Clicked
    navigate('/login');
  };

  return (
    // TODO: Validation = All Fields Required and Password Min. 6 Char
    // TODO: Show Error Message When User Input Wrong Email or Password
    <Container maxWidth="xs" className={classes.container}>
      <Typography variant="h5">
        <FormattedMessage id="app_register_header" />
      </Typography>
      <Box className={classes.input_container}>
        <Typography variant="body1">
          <FormattedMessage id="app_register_form_label_1" />
        </Typography>
        <TextField variant="outlined" type="text" fullWidth onChange={(e) => setFullname(e.target.value)} />
        <Typography variant="body1">Email</Typography>
        <TextField variant="outlined" type="email" fullWidth onChange={(e) => setEmail(e.target.value)} />
        <Typography variant="body1">
          <FormattedMessage id="app_register_form_label_2" />
        </Typography>
        <TextField variant="outlined" type="password" fullWidth onChange={(e) => setPassword(e.target.value)} />
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
