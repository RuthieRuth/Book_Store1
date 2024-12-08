
import { RouterProvider } from 'react-router'
import { router } from './Routes/appRoutes'
import './App.css'
//import Booklist from './Booklist/Booklist'

function App() {
 

  return (
  
      <div>
          <RouterProvider
            router={router}
            future={{v7_startTransition:true}}
          />
      </div>
  );
}

export default App;
