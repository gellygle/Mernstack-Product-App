import "./App.css"
import { RouterProvider } from "react-router-dom";
import router from "./routes/routes"

function App(){
  return(
    <>
     <RouterProvider router={router} />
     
     <h1>!!!!!!!</h1>
    </>
  )
}

export default App;