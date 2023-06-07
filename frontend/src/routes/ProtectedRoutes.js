import { Outlet } from "react-router-dom";
import Login from "../components/Login/Login";

const useAuth=()=>{
    const user={ loggedIn:false };
    return user && user.loggedIn;
}
const ProtectRoutes=()=>{
    const isAuth= useAuth();
   return isAuth ? <Outlet></Outlet> : <Login></Login>
    
};
 export default ProtectRoutes;
