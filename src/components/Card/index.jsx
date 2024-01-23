import PropTypes from 'prop-types';

import { Grid, Box, Typography } from '@mui/material';

import { stringFormatter } from '@utils/stringFormatter';
import classes from './style.module.scss';
import BookmarkIcon from '../../asset/bookmark-icon.svg';

const Card = ({ data }) => (
  <Grid item xs={3} key={data.id} className={classes.grid_item}>
    {/* TODO: Insert Image */}
    <Box className={classes.grid_img} />
    <img src={BookmarkIcon} alt="Bookmark Icon" className={classes.bookmark_icon} />
    <Box className={classes.detail_wrapper}>
      <Typography variant="body1" className={classes.grid_title}>
        {data.title}
      </Typography>
      <Typography variant="body1" className={classes.grid_date}>
        {data.date}
      </Typography>
      <Typography variant="body1" className={classes.grid_description}>
        {stringFormatter(data.description)}
      </Typography>
    </Box>
  </Grid>
);

Card.propTypes = {
  data: PropTypes.object,
};

export default Card;
