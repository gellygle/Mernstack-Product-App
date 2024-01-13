import Register from "../login/register";
import Home from '../pages/Home'
import Login from "../login/login"

export const routes = [
  {
    path:"/",
    element:<Home></Home>
  },
  {
    path:"/login",
    element:<Login />
  },
  { 
  path:"/register",
  element:<Register />
}
]
export default routes



