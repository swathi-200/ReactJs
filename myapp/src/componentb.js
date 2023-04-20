import { useContext } from 'react';
import { usercontext } from './App';
function ComponnetB()
{
    const user=useContext(usercontext);
    return(
       <div>
      {user}
       </div>
    )
}
export default ComponnetB;