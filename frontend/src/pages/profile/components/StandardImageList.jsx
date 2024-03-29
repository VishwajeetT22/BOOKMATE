import React, { useState } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button, Dialog } from '@mui/material';

export default function StandardImageList() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (item) => {
    setSelectedImage(item.title);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <ImageList sx={{ width: '100%', height: 600 }} cols={3} rowHeight="auto" id='imglist'>
        {itemData.map((item) => (
          <ImageListItem key={item.img} onClick={() => handleImageClick(item)}>
            <img
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>

      {/* <Dialog
        open={selectedImage !== null}
        onClose={handleCloseModal}
        aria-labelledby="image-details-modal"
        aria-describedby="image-details-description"
        
      >
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 300, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
          <Typography id="image-details-modal" variant="h6" gutterBottom>
            {selectedImage && selectedImage.title}
          </Typography>
          <Typography id="image-details-description" variant="body2" color="textSecondary" gutterBottom>
            {selectedImage && selectedImage.description}
          </Typography>
          <Button variant="contained" color="primary" onClick={handleCloseModal}>
            Request
          </Button>
        </Box>
      </Dialog> */}
    </div>
  );
}


const itemData = [
  {
    img: 'https://edit.org/images/cat/book-covers-big-2019101610.jpg',
    title: 'My Book Cover',
  },
  {
    img: 'https://blog-cdn.reedsy.com/directories/gallery/68/large_19a00aea82e591aaa3ddb796479df0c5.jpg',
    title: 'Deadly Keyholes',
  },
  {
    img: 'https://imgv3.fotor.com/images/gallery/Fiction-Book-Covers.jpg',
    title: 'Last Hope',
  },
  {
    img: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/yellow-business-leadership-book-cover-design-template-dce2f5568638ad4643ccb9e725e5d6ff.jpg?ts=1637017516',
    title: 'A mind of a leader',
  },
  {
    img: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/contemporary-fiction-night-time-book-cover-design-template-1be47835c3058eb42211574e0c4ed8bf_screen.jpg?ts=1637012564',
    title: 'Memory',
  },


  {
    img: 'https://edit.org/images/cat/book-covers-big-2019101610.jpg',
    title: 'My Book Cover',
  },
  {
    img: 'https://blog-cdn.reedsy.com/directories/gallery/68/large_19a00aea82e591aaa3ddb796479df0c5.jpg',
    title: 'Deadly Keyholes',
  },
  {
    img: 'https://imgv3.fotor.com/images/gallery/Fiction-Book-Covers.jpg',
    title: 'Last Hope',
  },
  {
    img: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/yellow-business-leadership-book-cover-design-template-dce2f5568638ad4643ccb9e725e5d6ff.jpg?ts=1637017516',
    title: 'A mind of a leader',
  },
  {
    img: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/contemporary-fiction-night-time-book-cover-design-template-1be47835c3058eb42211574e0c4ed8bf_screen.jpg?ts=1637012564',
    title: 'Memory',
  },


];
