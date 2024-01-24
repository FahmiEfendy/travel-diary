import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import { connect, useDispatch } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { selectDetail } from './selectors';
import { getPostDetailRequest } from './actions';

import classes from './style.module.scss';

const Detail = ({ detail }) => {
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostDetailRequest(id));
  }, [dispatch, id]);

  return (
    <Box className={classes.container}>
      <Box className={classes.wrapper_text}>
        <Typography variant="body1" className={classes.title}>
          {detail.data.title}
        </Typography>
        <Typography variant="body1" className={classes.user}>
          {detail?.data?.user?.fullname}
        </Typography>
      </Box>
      <Typography variant="body1" className={classes.timestamp}>
        {detail.data.timestamp}
      </Typography>
      <Box
        className={classes.image_background}
        sx={{
          backgroundImage: `url(${detail.data.imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <div dangerouslySetInnerHTML={{ __html: detail.data.description }} className={classes.description} />
    </Box>
  );
};

Detail.propTypes = {
  detail: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  detail: selectDetail,
});

export default connect(mapStateToProps)(Detail);
