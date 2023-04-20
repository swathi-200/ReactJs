import { useReducer } from "react";
const initialstate=
{
    message:"helllo"
}
function reducer(state,action)
{
    switch(action.type)
    {
        case "yell":
            return{
                message:"yelllow"
            }
            case "hell":
                return{
                    message:"hello"
                }
    }
}
export default function Using_Reducer()
{
   const[state,dispatch]=useReducer(reducer,initialstate);

return(
    <div>
        <p>{state.message}</p>
        <button onClick={()=>dispatch({type:"yell"})}>yell</button>
        <button onClick={()=>dispatch({type:"hell"})}>hel</button>

    </div>
);
}