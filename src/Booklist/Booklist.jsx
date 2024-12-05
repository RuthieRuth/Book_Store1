// import books from '../../../books.json'
import Bookcard from "../Bookcard/Bookcard";

import { Grid } from "@mui/material";
import {Container} from "@mui/material";

import { useEffect, useState } from "react";

function Booklist (){
    const [books, setBooks] = useState([])
    
    useEffect(() => {
        fetch('http://localhost:3000/books')
        .then(response => response.json())
        .then(data => setBooks(data))
    },[])
    return (
     
        <Container>
            <Grid container spacing={3}>
            {books.map(book => (
                <Grid item key={book.id} xs={2.4} sm={2.4} md={2.4} > 
                   <Bookcard book={book}/>
                </Grid>
            ))}
             </Grid>
        </Container>
    )
}

export default Booklist;