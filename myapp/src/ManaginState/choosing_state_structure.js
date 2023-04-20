import { useState } from "react";
import "../App.css"
export default function Forms()
{
    const[firstname,setfirstname]=useState('');
    const[lastname,setlastname]=useState('');
    function handlefirstname(e)
    {
        setfirstname(e.target.value);
    }
    function handlelastname(e)
    {
        setlastname(e.target.value);
    }
    const fullname=firstname+' '+lastname;
    return(
        <div>
            <label>
                FirstName:<input type="text" value={firstname}
                onChange={handlefirstname}   />   <br /><r />

                LastName:<input type="text" value={lastname}
                onChange={handlelastname}   />      
            </label>
            <p>Your ticket will be issued to {fullname}</p>
        </div>

    );

}