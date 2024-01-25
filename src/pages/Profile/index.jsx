import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { useNavigate } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { selectMyPost, selectProfile } from './selectors';

import Card from '../../components/Card';
import ProfileImage from '../../asset/profile.png';

import classes from './style.module.scss';
import { getMyPostRequest, getProfileRequest } from './actions';

const Profile = ({ profile, myPost }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getProfileRequest());
    dispatch(getMyPostRequest());
  }, [dispatch]);

  return (
    <Container className={classes.container}>
      <Typography variant="h5">
        <FormattedMessage id="app_profile_heading" />
      </Typography>
      <Box className={classes.profile_container}>
        <img src={ProfileImage} alt="Profile" />
        <Typography variant="body1" className={classes.profile_name}>
          {profile?.data?.profile?.fullname}
        </Typography>
        <Typography variant="body1" className={classes.profile_email}>
          {profile?.data?.profile?.email}
        </Typography>
        <Button variant="contained" onClick={() => navigate('/journey/create')}>
          Add New Post
        </Button>
      </Box>
      <Grid container className={classes.grid_container} rowGap={5}>
        {myPost?.data.map((data) => (
          <Card data={data} key={data.id} />
        ))}
      </Grid>
    </Container>
  );
};

Profile.propTypes = {
  profile: PropTypes.object,
  myPost: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  profile: selectProfile,
  myPost: selectMyPost,
});

export default connect(mapStateToProps)(Profile);
