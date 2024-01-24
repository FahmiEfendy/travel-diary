import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { connect, useDispatch } from 'react-redux';
import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material';

import { createStructuredSelector } from 'reselect';
import Card from '../../components/Card';
import classes from './style.module.scss';
import { getPostRequest } from './actions';
import { selectPost } from './selectors';

const Home = ({ post }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostRequest());
  }, [dispatch]);

  return (
    // TODO: Fix Styling When Logout
    <Container className={classes.container}>
      <Typography variant="h5">
        <FormattedMessage id="app_journey_heading" />
      </Typography>
      <Box className={classes.input_container}>
        <TextField fullWidth type="text" placeholder="Find journey..." />
        <Button variant="contained">Search</Button>
      </Box>
      <Grid container className={classes.grid_container} rowGap={5}>
        {post.data.map((data) => (
          <Card data={data} key={data.id} />
        ))}
      </Grid>
    </Container>
  );
};

Home.propTypes = {
  post: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  post: selectPost,
});

export default connect(mapStateToProps)(Home);
