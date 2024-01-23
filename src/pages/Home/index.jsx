import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material';

import { ping } from '@containers/App/actions';
import { stringFormatter } from '@utils/stringFormatter';

import classes from './style.module.scss';
import BookmarkIcon from '../../asset/bookmark-icon.svg';

const Home = () => {
  const [isLogin, setIsLogin] = useState(false);

  const journeyArr = [
    {
      id: 1,
      title: 'Bersemayam di tanah Dewata',
      date: '29 July 2020, Cipto',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a ultrices odio. Nunc sem tellus, faucibus sit amet sapien sit amet, malesuada sagittis turpis. Pellentesque vestibulum justo nec libero sodales elementum. Etiam id auctor lectus. Donec pellentesque lectus eget eros condimentum faucibus. Aliquam ac nisl turpis. Donec placerat ex dui, at gravida urna aliquam non. Maecenas eleifend nibh posuere lectus eleifend accumsan. Curabitur et ligula elementum, vulputate felis id, feugiat ipsum. Nullam sodales, ipsum et tincidunt mattis, nibh odio tempus augue, id egestas nisl tellus vel tortor. Vestibulum nibh erat, malesuada vitae velit vitae, tristique pretium mauris. Etiam eu dictum dolor, non interdum leo. Maecenas bibendum urna at leo blandit ullamcorper. Nunc vel ipsum et dui suscipit blandit.',
    },
    {
      id: 2,
      title: 'Bersemayam di tanah Dewata',
      date: '29 July 2020, Cipto',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a ultrices odio. Nunc sem tellus, faucibus sit amet sapien sit amet, malesuada sagittis turpis. Pellentesque vestibulum justo nec libero sodales elementum. Etiam id auctor lectus. Donec pellentesque lectus eget eros condimentum faucibus. Aliquam ac nisl turpis. Donec placerat ex dui, at gravida urna aliquam non. Maecenas eleifend nibh posuere lectus eleifend accumsan. Curabitur et ligula elementum, vulputate felis id, feugiat ipsum. Nullam sodales, ipsum et tincidunt mattis, nibh odio tempus augue, id egestas nisl tellus vel tortor. Vestibulum nibh erat, malesuada vitae velit vitae, tristique pretium mauris. Etiam eu dictum dolor, non interdum leo. Maecenas bibendum urna at leo blandit ullamcorper. Nunc vel ipsum et dui suscipit blandit.',
    },
    {
      id: 3,
      title: 'Bersemayam di tanah Dewata',
      date: '29 July 2020, Cipto',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a ultrices odio. Nunc sem tellus, faucibus sit amet sapien sit amet, malesuada sagittis turpis. Pellentesque vestibulum justo nec libero sodales elementum. Etiam id auctor lectus. Donec pellentesque lectus eget eros condimentum faucibus. Aliquam ac nisl turpis. Donec placerat ex dui, at gravida urna aliquam non. Maecenas eleifend nibh posuere lectus eleifend accumsan. Curabitur et ligula elementum, vulputate felis id, feugiat ipsum. Nullam sodales, ipsum et tincidunt mattis, nibh odio tempus augue, id egestas nisl tellus vel tortor. Vestibulum nibh erat, malesuada vitae velit vitae, tristique pretium mauris. Etiam eu dictum dolor, non interdum leo. Maecenas bibendum urna at leo blandit ullamcorper. Nunc vel ipsum et dui suscipit blandit.',
    },
    {
      id: 4,
      title: 'Bersemayam di tanah Dewata',
      date: '29 July 2020, Cipto',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a ultrices odio. Nunc sem tellus, faucibus sit amet sapien sit amet, malesuada sagittis turpis. Pellentesque vestibulum justo nec libero sodales elementum. Etiam id auctor lectus. Donec pellentesque lectus eget eros condimentum faucibus. Aliquam ac nisl turpis. Donec placerat ex dui, at gravida urna aliquam non. Maecenas eleifend nibh posuere lectus eleifend accumsan. Curabitur et ligula elementum, vulputate felis id, feugiat ipsum. Nullam sodales, ipsum et tincidunt mattis, nibh odio tempus augue, id egestas nisl tellus vel tortor. Vestibulum nibh erat, malesuada vitae velit vitae, tristique pretium mauris. Etiam eu dictum dolor, non interdum leo. Maecenas bibendum urna at leo blandit ullamcorper. Nunc vel ipsum et dui suscipit blandit.',
    },
    {
      id: 5,
      title: 'Bersemayam di tanah Dewata',
      date: '29 July 2020, Cipto',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a ultrices odio. Nunc sem tellus, faucibus sit amet sapien sit amet, malesuada sagittis turpis. Pellentesque vestibulum justo nec libero sodales elementum. Etiam id auctor lectus. Donec pellentesque lectus eget eros condimentum faucibus. Aliquam ac nisl turpis. Donec placerat ex dui, at gravida urna aliquam non. Maecenas eleifend nibh posuere lectus eleifend accumsan. Curabitur et ligula elementum, vulputate felis id, feugiat ipsum. Nullam sodales, ipsum et tincidunt mattis, nibh odio tempus augue, id egestas nisl tellus vel tortor. Vestibulum nibh erat, malesuada vitae velit vitae, tristique pretium mauris. Etiam eu dictum dolor, non interdum leo. Maecenas bibendum urna at leo blandit ullamcorper. Nunc vel ipsum et dui suscipit blandit.',
    },
    {
      id: 6,
      title: 'Bersemayam di tanah Dewata',
      date: '29 July 2020, Cipto',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a ultrices odio. Nunc sem tellus, faucibus sit amet sapien sit amet, malesuada sagittis turpis. Pellentesque vestibulum justo nec libero sodales elementum. Etiam id auctor lectus. Donec pellentesque lectus eget eros condimentum faucibus. Aliquam ac nisl turpis. Donec placerat ex dui, at gravida urna aliquam non. Maecenas eleifend nibh posuere lectus eleifend accumsan. Curabitur et ligula elementum, vulputate felis id, feugiat ipsum. Nullam sodales, ipsum et tincidunt mattis, nibh odio tempus augue, id egestas nisl tellus vel tortor. Vestibulum nibh erat, malesuada vitae velit vitae, tristique pretium mauris. Etiam eu dictum dolor, non interdum leo. Maecenas bibendum urna at leo blandit ullamcorper. Nunc vel ipsum et dui suscipit blandit.',
    },
    {
      id: 7,
      title: 'Bersemayam di tanah Dewata',
      date: '29 July 2020, Cipto',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a ultrices odio. Nunc sem tellus, faucibus sit amet sapien sit amet, malesuada sagittis turpis. Pellentesque vestibulum justo nec libero sodales elementum. Etiam id auctor lectus. Donec pellentesque lectus eget eros condimentum faucibus. Aliquam ac nisl turpis. Donec placerat ex dui, at gravida urna aliquam non. Maecenas eleifend nibh posuere lectus eleifend accumsan. Curabitur et ligula elementum, vulputate felis id, feugiat ipsum. Nullam sodales, ipsum et tincidunt mattis, nibh odio tempus augue, id egestas nisl tellus vel tortor. Vestibulum nibh erat, malesuada vitae velit vitae, tristique pretium mauris. Etiam eu dictum dolor, non interdum leo. Maecenas bibendum urna at leo blandit ullamcorper. Nunc vel ipsum et dui suscipit blandit.',
    },
    {
      id: 8,
      title: 'Bersemayam di tanah Dewata',
      date: '29 July 2020, Cipto',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a ultrices odio. Nunc sem tellus, faucibus sit amet sapien sit amet, malesuada sagittis turpis. Pellentesque vestibulum justo nec libero sodales elementum. Etiam id auctor lectus. Donec pellentesque lectus eget eros condimentum faucibus. Aliquam ac nisl turpis. Donec placerat ex dui, at gravida urna aliquam non. Maecenas eleifend nibh posuere lectus eleifend accumsan. Curabitur et ligula elementum, vulputate felis id, feugiat ipsum. Nullam sodales, ipsum et tincidunt mattis, nibh odio tempus augue, id egestas nisl tellus vel tortor. Vestibulum nibh erat, malesuada vitae velit vitae, tristique pretium mauris. Etiam eu dictum dolor, non interdum leo. Maecenas bibendum urna at leo blandit ullamcorper. Nunc vel ipsum et dui suscipit blandit.',
    },
  ];

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ping());
  }, [dispatch]);

  return (
    <Container className={classes.container}>
      {/* TODO: Get From Global State */}
      {!isLogin && (
        <Box className={classes.header_container}>
          <Typography variant="h4">
            <FormattedMessage id="app_journey_header_text" />
          </Typography>
          <Typography variant="body1">
            <FormattedMessage id="app_journey_header_sub_text" />
          </Typography>
          <Box className={classes.header_backdrop} />
        </Box>
      )}
      <Typography variant="h5">
        <FormattedMessage id="app_journey_heading" />
      </Typography>
      <Box className={classes.input_container}>
        <TextField fullWidth type="text" placeholder="Find journey..." />
        <Button variant="contained">Search</Button>
      </Box>
      <Grid container className={classes.grid_container} rowGap={5}>
        {/* TODO: Fetch Real Data */}
        {journeyArr.map((data) => (
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
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
