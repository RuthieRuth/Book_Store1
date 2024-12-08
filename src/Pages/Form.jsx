import { Box, Button, Rating, Stack, TextField, Typography } from "@mui/material";
import { useState} from "react";
import axios from "axios";


function Form() {
    const [newDetails, setNewDetails] = useState(
                                                    {title: " ",
                                                     author: " ",
                                                    image: " ",
                                                    genres: " ",
                                                    started: " ",
                                                    finished: " ",
                                                    rating:0
                                                    }
     );

    //HANDLE CHAGES IN FORM
    const handleChange = (event) => {
       const name = event.target.name;
       const value = event.target.value;
        setNewDetails((values) => ({...values, [name]: value }));
    };

    // SUBMIT BUTTON
    const submitBtn = () => {
        (axios.post('http://localhost:3000/books', newDetails))
        .then ((response) => {console.log ('Added', response.data);})
        .catch((error) => {console.log('Error', error);})

    event.preventDefault();
    }

      // HANDLE RATING CHANGE
      const handleRatingChange = (event, newValue) => {
        setNewDetails((prevDetails) => ({
            ...prevDetails,
            rating: newValue, // Update the rating field
        }));
    };

 

    return (
        <div>
            <form onSubmit={submitBtn}>
            <Typography>Add a book</Typography>
            <Box component="section" sx={{ p: 2,  width: '30%' }}>
                <Stack spacing={2}>
                    <TextField id="outlined-basic" name="title" label="Title" onChange={handleChange} value={newDetails.title}/>
                    <TextField id="outlined-basic" name="author" label="Author" onChange={handleChange} value={newDetails.author}/>
                    <TextField id="outlined-basic" name="image" label="Image (url)" onChange={handleChange} value={newDetails.image}/>

                    <TextField id="outlined-basic" name="genres" label="Genres" onChange={handleChange} value={newDetails.genres}/>


                    <TextField id="outlined-basic" name="started" label="Started"  placeholder="YYYY-MM-DD" onChange={handleChange} value={newDetails.started}/>
                    <TextField id="outlined-basic" name="finished" label="Finished" onChange={handleChange} value={newDetails.finished} disabled/>

                    <Box sx={{ '& > legend': { mt: 2 } }}>
                        <Rating
                            name="simple-controlled"
                            value={newDetails.rating}
                            onChange={handleRatingChange}
                            />
                    </Box>

                    <Button variant="contained" color="success" type="submit">
                        ADD NEW
                    </Button>
                </Stack>
            </Box>
            </form>
        </div>
    )
};

export default Form;

/* 
<Autocomplete 
options={bookGenres}
 
 onChange={handleGenreChange}
 renderInput={(params) => <TextField {...params} label="Gennre" />}
/>

const handleGenreChange = (event, value) => {
    setNewDetails((prevDetails) => ({
        ...prevDetails,
        genres: value, // Update genres field
    }));
};
 */