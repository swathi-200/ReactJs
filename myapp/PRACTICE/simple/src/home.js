import { useContext } from "react";
import { UserContext } from "./usercontext";


function Home()
{
    const msg=useContext(UserContext);
    return(

        <div>
         <h1>welcome</h1>
         <div>{msg}</div>
        </div>
    )
}
export default Home;