import { useContext } from 'react';
import { usercontext } from './App';
function ComponnetC()
{
    const user=useContext(usercontext);
    return(
       <div>
      {user}
       </div>
    )
}
export default ComponnetC;