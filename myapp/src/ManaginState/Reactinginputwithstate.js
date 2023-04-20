import React from "react";
import { useState } from "react";
function FormInput()
{
    const[answer,setanswer]=useState('');
    const[error,seterror]=useState(null);
    const[status,setstatus]=useState('typing');
    if(status=='success')
    {
        return(
        <h1>thats right</h1>
        );
    }

   async function handlesubmit(e)
    {
        console.log("jdjjjjjjvf")
      e.preventDefault();
      setstatus('submiting');
      try{
        await submitform(answer);
        setstatus('success');
      }
      catch(err)
      {
         setstatus('typing');
         seterror(err);
      }

    }
    function submitform(answer)
    {
      return new Promise((resolve,reject)=>
    {
      setTimeout(()=>
      {
       let shoulderror=answer.toLowerCase()!='lima'
       if(shoulderror){
        reject(new Error('Good guess but a wrong answer  try again'))
       }
       else
       {
        resolve();
       }
      },1500);
    });
    }

    function handlechangearea(e)
    {
        setanswer(e.target.value);
    }

return(
    <div>
        <center>
        <h1>City quiz</h1>
        <p>In which city is there a billboard that turns air into drinkable water? </p>
        <textarea value={answer} onChange={handlechangearea}
       /><br></br>
       <button onClick={handlesubmit} disabled={answer.length==0 ||status=='submiting'}>submit</button>
       {error !== null &&
          <p>
            {error.message}
          </p>
        }
       </center>
    </div>
)
}
export default  FormInput;







