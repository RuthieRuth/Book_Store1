//import Booklist from "./Booklist/Booklist";
//import Form  from "./Pages/Form";
//import { Link } from "@mui/material";
import Booklist from "../Booklist/Booklist";
import Header from "../Header/Header";
import { Outlet } from "react-router";

// this is my root 
function Root (){
    return(
        <div>
            <Header/>
            <Outlet/>
            {/* <Form/> */}
            
        </div>
    )
}

export default Root;