import { createBrowserRouter } from "react-router";
import Root from '../Pages/Root';
import Form from "../Pages/Form";
import Booklist from "../Booklist/Booklist";

export const router = createBrowserRouter(
    [
        {
            path:'/',
            element:<Root/>,
            // add errorElement /errorPage here
            children:[
                        {path:'/',element:<Booklist/>},
                        {path:'/form',element:<Form/>}
            ],
        },
    ],
    { 
        future: {
        v7_relativeSplatPath: true,
        v7_fetcherPersist: true,
        v7_normalizeFormMethod: true,
        v7_partialHydration: true,
        v7_skipActionErrorRevalidation: true
    }}
);