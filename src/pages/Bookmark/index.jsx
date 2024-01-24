import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { connect, useDispatch } from 'react-redux';

import { Container, Grid, Typography } from '@mui/material';

import { createStructuredSelector } from 'reselect';
import Card from '../../components/Card';
import classes from './style.module.scss';
import { selectBookmark } from './selectors';
import { deleteBookmarkRequest, getBookmarkRequest } from './actions';

const Bookmark = ({ bookmark }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBookmarkRequest());
  }, [dispatch]);

  const deleteBookmarkHandler = (id) => {
    dispatch(
      deleteBookmarkRequest(id, () => {
        dispatch(getBookmarkRequest());
      })
    );
  };

  return (
    <Container className={classes.container}>
      <Typography variant="h5">
        <FormattedMessage id="app_bookmark_heading" />
      </Typography>
      <Grid container className={classes.grid_container} rowGap={5}>
        {bookmark?.data?.map((data) => {
          const formattedData = {
            idPost: data.idPost,
            imageUrl: data.postBookmarks.imageUrl,
            title: data.postBookmarks.title,
            timestamp: data.postBookmarks.timestamp,
            description: data.postBookmarks.description,
          };
          return (
            <Card data={formattedData} key={data.id} deleteBookmarkHandler={deleteBookmarkHandler} onBookmarkPage />
          );
        })}
      </Grid>
    </Container>
  );
};

Bookmark.propTypes = {
  bookmark: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  bookmark: selectBookmark,
});

export default connect(mapStateToProps)(Bookmark);
