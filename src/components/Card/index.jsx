import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Grid, Box, Typography } from '@mui/material';

import { getPostRequest } from '@pages/Home/actions';
import { createBookmarkRequest, deleteBookmarkRequest, getBookmarkRequest } from '@pages/Bookmark/actions';
import classes from './style.module.scss';
import BookmarkIcon from '../../asset/bookmark-icon.svg';

const Card = ({ data, isBookmarked, onBookmarkPage = false }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const deleteBookmarkHandler = (id) => {
    dispatch(
      deleteBookmarkRequest(id, () => {
        dispatch(getBookmarkRequest());
      })
    );
  };

  // TODO: Update BookmarkIcon Color When Bookmark Added
  const createBookmarkHandler = (id) => {
    dispatch(createBookmarkRequest({ postId: id }), () => {
      dispatch(getBookmarkRequest());
      dispatch(getPostRequest());
    });
  };

  return (
    <Grid item xs={3} key={data.id} className={classes.grid_item}>
      <img src={data.imageUrl} alt={data.title} className={classes.grid_img} />
      <Box
        onClick={() => {
          isBookmarked ? deleteBookmarkHandler(data.id) : createBookmarkHandler(data.id);
        }}
      >
        <img
          src={BookmarkIcon}
          alt="Bookmark Icon"
          className={isBookmarked ? classes.bookmark_icon_active : classes.bookmark_icon}
        />
      </Box>
      <Box
        className={classes.detail_wrapper}
        onClick={() => {
          navigate(`/journey/${onBookmarkPage ? data.idPost : data.id}`);
        }}
      >
        <Typography variant="body1" className={classes.grid_title}>
          {data.title}
        </Typography>
        <Typography variant="body1" className={classes.grid_date}>
          {data.timestamp}
        </Typography>
        <Typography variant="body1" className={classes.grid_description}>
          {data.shortDesc}
        </Typography>
      </Box>
    </Grid>
  );
};

Card.propTypes = {
  data: PropTypes.object,
  isBookmarked: PropTypes.bool,
  onBookmarkPage: PropTypes.bool,
};

export default Card;
