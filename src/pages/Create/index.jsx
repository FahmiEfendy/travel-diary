import ReactQuill from 'react-quill';
import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { createPostRequest } from './actions';

import 'react-quill/dist/quill.snow.css';
import classes from './style.module.scss';

const Create = () => {
  const dispatch = useDispatch();

  const fileInputRef = useRef();

  const [title, setTitle] = useState('');
  const [shortDesc, setShortDesc] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);

  const inputFileHandler = () => {
    fileInputRef.current.click();
  };

  const inputFileChangeHandler = (e) => {
    setImage(e.target.files[0]);
  };

  const createPostHandler = () => {
    const formData = new FormData();

    formData.append('imageUrl', image);
    formData.append('title', title);
    formData.append('shortDesc', shortDesc);
    formData.append('description', description);

    dispatch(createPostRequest(formData));
  };

  return (
    <Container className={classes.container}>
      <Typography variant="h5">
        <FormattedMessage id="app_journey_create_heading" />
      </Typography>
      <Box className={classes.file_input_wrapper}>
        <Button variant="contained" onClick={inputFileHandler}>
          Upload
        </Button>
      </Box>
      <input type="file" className={classes.input} onChange={inputFileChangeHandler} ref={fileInputRef} />
      <Box className={classes.input_container}>
        <Box className={classes.input_wrapper}>
          <Typography variant="body1">
            <FormattedMessage id="app_journey_create_first_input" />
          </Typography>
          <TextField variant="outlined" fullWidth value={title} onChange={(e) => setTitle(e.target.value)} />
        </Box>
        <Box className={classes.input_wrapper}>
          <Typography variant="body1">
            <FormattedMessage id="app_journey_create_second_input" />
          </Typography>
          <TextField multiline maxRows={5} fullWidth value={shortDesc} onChange={(e) => setShortDesc(e.target.value)} />
        </Box>
        <Box className={classes.input_wrapper}>
          <Typography variant="body1">
            <FormattedMessage id="app_journey_create_third_input" />
          </Typography>
          <ReactQuill
            theme="snow"
            value={description}
            onChange={setDescription}
            className={classes.input_description}
          />
        </Box>
      </Box>
      <Box className={classes.button_container} onClick={createPostHandler}>
        <Button variant="contained">Post</Button>
      </Box>
    </Container>
  );
};

export default Create;
