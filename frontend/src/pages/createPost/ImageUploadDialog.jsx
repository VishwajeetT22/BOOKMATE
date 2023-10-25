import React, { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, TextField, Input, Box, Stack, Typography } from '@mui/material';
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import styled from '@emotion/styled';


// Text area start

        

    // text area end



const ImageUploadDialog = ({ open, onClose }) => {

    



  const [image, setImage] = useState(null);
  const [bookName, setInput1] = useState('');
  const [bookAuthor, setInput2] = useState('');
  const [bookDescription, setInput3] = useState('');

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (setter) => (event) => {
    setter(event.target.value);
  };

  const handleDialogClose = () => {
    setImage(null);
    setInput1('');
    setInput2('');
    setInput3('');
    onClose();
  };

  return (
    <Dialog open={open} onClose={handleDialogClose} >
      <DialogTitle>Create your book post</DialogTitle>
      <DialogContent sx={{mx:'20px'}}>
        <Stack direction='row' spacing={4}>

        <Box width='50%'> 
                <input
                    accept="image/*"
                    style={{ display: 'none' }}
                    id="image-upload"
                    type="file"
                    onChange={handleImageChange}
                    required
                />
          <label htmlFor="image-upload">
            <Button variant="outlined" component="span"  >
             Upload Image
            </Button>
          </label>
          {image && <img src={image} alt="Uploaded" style={{ width: '100%', marginTop: '10px' }} />}
          </Box>

          <Box paddingX={2} width='50%'>
            <Typography variant='h6'>Book name:</Typography>
          <TextField
            value={bookName}
            onChange={handleInputChange(setInput1)}
            variant="filled"
            margin="normal"
            required
            fullWidth
          />

        <Typography variant='h6'>Book author:</Typography>
          <TextField
            
            value={bookAuthor}
            onChange={handleInputChange(setInput2)}
            variant="filled"
            margin="normal"
            required
            fullWidth
          />

        <Typography variant='h6'>About book</Typography>

        <TextareaAutosize
        required
        minRows={3}
        placeholder="Type something..."
        value={bookDescription}
        onChange={handleInputChange(setInput3)}
        style={{ width: '100%', margin:'10px 0' }}
      />
          
          <Button variant="contained" color="primary" style={{ marginTop: '10px' }}>
            Post
          </Button>
          </Box>
        
        
        </Stack>
      </DialogContent>
    </Dialog>     
  );
};

export default ImageUploadDialog;