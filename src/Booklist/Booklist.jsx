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
       /*  <div>
        {books.map((book) => (<Bookcards key={book.id}/>))}
        </div> */

        <Container>
            <Grid container spacing={4}>
            {books.map(book => (
                <Grid item key={book.id} lg={2} > 
                   <Bookcard book={book}/>
                </Grid>
            ))}
             

             </Grid>
        </Container>
    )
}

export default Booklist;