import { FormattedMessage } from 'react-intl';
import { Box, Button, Container, Link, TextField, Typography } from '@mui/material';

import classes from './style.module.scss';

const Login = () => (
  // TODO: Validation = All Fields Required and Password Min. 6 Char
  // TODO: Show Error Message When User Input Wrong Email or Password
  <Container maxWidth="xs" className={classes.container}>
    <Typography variant="h5">Login</Typography>
    <Box className={classes.input_container}>
      <Typography variant="body1">Email</Typography>
      <TextField variant="outlined" type="email" fullWidth />
      <Typography variant="body1">
        <FormattedMessage id="app_register_form_label_2" />
      </Typography>
      <TextField variant="outlined" type="password " fullWidth />
    </Box>
    <Button variant="contained" className={classes.btn_login}>
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

export default Login;
