import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { connect, useDispatch } from 'react-redux';
import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material';

import { createStructuredSelector } from 'reselect';
import { selectBookmark } from '@pages/Bookmark/selectors';
import { createBookmarkRequest, getBookmarkRequest } from '@pages/Bookmark/actions';
import Card from '../../components/Card';
import classes from './style.module.scss';
import { getPostRequest } from './actions';
import { selectPost } from './selectors';

const Home = ({ post, bookmark }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostRequest());
    dispatch(getBookmarkRequest());
  }, [dispatch]);

  const createBookmarkHandler = (id) => {
    dispatch(createBookmarkRequest({ postId: id }));
  };

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
        {post.data.map((data) => {
          const isBookmarked = bookmark.data.some((d) => d.idPost === data.id);
          return (
            <Card data={data} key={data.id} isBookmarked={isBookmarked} createBookmarkHandler={createBookmarkHandler} />
          );
        })}
      </Grid>
    </Container>
  );
};

Home.propTypes = {
  post: PropTypes.object,
  bookmark: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  post: selectPost,
  bookmark: selectBookmark,
});

export default connect(mapStateToProps)(Home);
