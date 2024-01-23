import { FormattedMessage } from 'react-intl';

import { Container, Grid, Typography } from '@mui/material';

import Card from '../../components/Card';
import classes from './style.module.scss';

const Bookmark = () => {
  // TODO: Fetch Real Data
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

  return (
    <Container className={classes.container}>
      <Typography variant="h5">
        <FormattedMessage id="app_bookmark_heading" />
      </Typography>
      <Grid container className={classes.grid_container} rowGap={5}>
        {journeyArr.map((data) => (
          <Card data={data} key={data.id} />
        ))}
      </Grid>
    </Container>
  );
};

export default Bookmark;
