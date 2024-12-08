import { Card, CardMedia, Button, Typography, CardActions, CardContent, CardActionArea, Box, Rating, Stack, Chip } from '@mui/material';
import React from 'react';


function Bookcard({ book }) {

  const [value, setValue] = React.useState(book.stars);
  const handleClick = () => {
    console.log('You clicked learn more.');
  };


  return (
    
    <Card sx={{ maxWidth: 200, height: "100%" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={book.img} 
          alt={book.name}  
        />

        <CardContent>
            {/* <Stack direction="row" spacing={1}>
              {book.genres.map((genre, index) => (
                <Chip label={genre} key={index} variant="outlined" />
              ))}
            </Stack> */}

            <Stack direction="row" spacing={1}>
                {(book.genres && Array.isArray(book.genres) ? book.genres : []).map((genre, index) => (
                    <Chip label={genre} key={index} variant="outlined" />
                ))}
            </Stack>

            <Typography gutterBottom variant="h5" component="div">{book.name}</Typography>
            <Typography variant="body2" color="text.secondary">{book.author}</Typography>
        </CardContent>

        </CardActionArea>
          <Box sx={{ '& > legend': { mt: 2 } }}>
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
              setValue(newValue);
              }}
              />
        </Box>

        <CardActions>
          <Button size="small" onClick={handleClick}>Learn More</Button> 
        </CardActions>
     </Card>
    
  );
  
}

export default Bookcard;
