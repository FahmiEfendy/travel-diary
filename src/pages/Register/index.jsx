import { FormattedMessage } from 'react-intl';
import { Box, Button, Container, TextField, Typography } from '@mui/material';

import classes from './style.module.scss';

const Register = () => (
  <Container maxWidth="xs" className={classes.container}>
    <Typography variant="h5">
      <FormattedMessage id="app_register_header" />
    </Typography>
    <Box className={classes.input_container}>
      <Typography variant="body1">
        <FormattedMessage id="app_register_form_label_1" />
      </Typography>
      <TextField variant="outlined" type="text" fullWidth />
      <Typography variant="body1">Email</Typography>
      <TextField variant="outlined" type="email" fullWidth />
      <Typography variant="body1">
        <FormattedMessage id="app_register_form_label_2" />
      </Typography>
      <TextField variant="outlined" type="password " fullWidth />
    </Box>
    <Button variant="contained" className={classes.btn_regist}>
      <FormattedMessage id="app_register_button" />
    </Button>
  </Container>
);

export default Register;
