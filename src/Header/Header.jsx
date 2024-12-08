//import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
//import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link, NavLink } from 'react-router';
import { Stack } from '@mui/material';
//import { Stack } from '@mui/material';
//import MenuIcon from '@mui/icons-material/Menu';

export default function Header() {


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundColor:"darkgreen"}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
        
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <NavLink to="/">BOOKS</NavLink>
          </Typography>

        {/*   BUTTONS
          <Button color="inherit">HOME</Button>
          <Button color="inherit">ADD NEW</Button> */}
          
          {/* <Link color="inherit" style={{color:"white"}}
              component="button"
              variant="body1"
              onClick={() => {console.log("I'm a button.");}}
          > HOME </Link>  */}
            
          {/* <Link color="inherit" style={{color:"white"}}
              component="button"
              variant="body1"
              onClick={() => {console.log("I'm a button.");}}
          > ADD NEW </Link> */}
          
            <Stack direction="row" spacing={2}>
            <Link>HOME</Link>
            <NavLink to="/form">ADD NEW </NavLink>
            </Stack>
           
          

        </Toolbar>
      </AppBar>
    </Box>
  );
}