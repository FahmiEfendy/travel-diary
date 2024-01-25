import ReactQuill from 'react-quill';
import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { Box, Button, Container, FormLabel, TextField, Typography } from '@mui/material';
import { createPostRequest } from './actions';

import 'react-quill/dist/quill.snow.css';
import classes from './style.module.scss';

const Create = () => {
  const dispatch = useDispatch();

  const fileInputRef = useRef();

  const [title, setTitle] = useState({ value: '', isError: false });
  const [shortDesc, setShortDesc] = useState({ value: '', isError: false });
  const [description, setDescription] = useState('');
  const [image, setImage] = useState({ value: null, isError: false });

  const inputFileHandler = () => {
    fileInputRef.current.click();
  };

  const inputFileChangeHandler = (e) => {
    setImage({ value: e.target.files[0], isError: e.target.files.length === 0 });
  };

  const registerValidation = () => {
    let isValid = true;

    if (title.value === '') {
      setTitle((prevState) => ({ ...prevState, isError: true }));
      isValid = false;
    }

    if (shortDesc.value === '') {
      setShortDesc((prevState) => ({ ...prevState, isError: true }));
      isValid = false;
    }

    if (description === '') {
      isValid = false;
    }

    if (image.value === null) {
      setImage((prevState) => ({ ...prevState, isError: true }));
      isValid = false;
    }

    return isValid;
  };

  const createPostHandler = () => {
    const isFormValid = registerValidation();

    if (!isFormValid) return;

    const formData = new FormData();

    formData.append('imageUrl', image.value);
    formData.append('title', title.value);
    formData.append('shortDesc', shortDesc.value);
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
      {image.isError && (
        <FormLabel className={classes.input_error_file}>
          <FormattedMessage id="app_journey_create_file_empty" />
        </FormLabel>
      )}
      <input type="file" className={classes.input} onChange={inputFileChangeHandler} ref={fileInputRef} />
      <Box className={classes.input_container}>
        <Box className={classes.input_wrapper}>
          <Typography variant="body1">
            <FormattedMessage id="app_journey_create_first_input" />
          </Typography>
          {title.isError && (
            <FormLabel className={classes.input_error}>
              <FormattedMessage id="app_journey_create_title_empty" />
            </FormLabel>
          )}
          <TextField
            variant="outlined"
            fullWidth
            value={title.value}
            onChange={(e) => setTitle({ value: e.target.value, isError: e.target.value === '' })}
          />
        </Box>
        <Box className={classes.input_wrapper}>
          <Typography variant="body1">
            <FormattedMessage id="app_journey_create_second_input" />
          </Typography>
          {shortDesc.isError && (
            <FormLabel className={classes.input_error}>
              <FormattedMessage id="app_journey_create_shortDesc_empty" />
            </FormLabel>
          )}
          <TextField
            multiline
            maxRows={5}
            fullWidth
            value={shortDesc.value}
            onChange={(e) => setShortDesc({ value: e.target.value, isError: e.target.value === '' })}
          />
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
