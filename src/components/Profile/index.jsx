import { Box } from '@mui/material';

import classes from './style.module.scss';
import ProfileImage from '../../asset/profile.png';

const Profile = () => (
  <Box className={classes.container}>
    <img src={ProfileImage} alt="Profile" />
  </Box>
);

export default Profile;
