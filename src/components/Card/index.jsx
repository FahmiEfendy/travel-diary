import PropTypes from 'prop-types';

import { Grid, Box, Typography } from '@mui/material';

import { stringFormatter } from '@utils/stringFormatter';
import classes from './style.module.scss';
import BookmarkIcon from '../../asset/bookmark-icon.svg';

const Card = ({ data, createBookmarkHandler }) => (
  <Grid item xs={3} key={data.id} className={classes.grid_item}>
    <img src={data.imageUrl} alt={data.title} className={classes.grid_img} />
    <Box
      onClick={() => {
        createBookmarkHandler(data.id);
      }}
    >
      <img src={BookmarkIcon} alt="Bookmark Icon" className={classes.bookmark_icon} />
    </Box>
    <Box className={classes.detail_wrapper}>
      <Typography variant="body1" className={classes.grid_title}>
        {data.title}
      </Typography>
      <Typography variant="body1" className={classes.grid_date}>
        {data.timestamp}
      </Typography>
      <Typography variant="body1" className={classes.grid_description}>
        {stringFormatter(data.description)}
      </Typography>
    </Box>
  </Grid>
);

Card.propTypes = {
  data: PropTypes.object,
  createBookmarkHandler: PropTypes.func,
};

export default Card;
