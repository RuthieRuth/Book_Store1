import { Card, CardMedia, Button, Typography, CardActions, CardContent } from '@mui/material';

function Bookcard({ book }) {
  return (
    <Card sx={{ maxWidth: 700 , maxHeight: 600 }}>
      {/* Display the book image using CardMedia */}
      <CardMedia
        component="img"
        height="300"
        image={book.img} 
        alt={book.name}  
      />

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">{book.name}</Typography>
        <Typography variant="body2" color="text.secondary">{book.author}</Typography>
      </CardContent>

      <CardActions>
        <Button size="small">Start</Button>
        <Button size="small">Learn More</Button> 
      </CardActions>
    </Card>
  );
}

export default Bookcard;
