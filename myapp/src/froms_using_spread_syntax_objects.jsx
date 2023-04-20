import { useState } from "react";
export default function Spread()
{
   const[person,setPerson]=useState({
    firstname:'swathi',
    lastname:'kulal',
    email:'swathikulaln@gmai.com'
   });
function handlechangefirstname(e)
{
   setPerson({
    ...person,
    firstname:e.target.value
   })
}
function handlechangelastname(e)
{
    setPerson({
        ...person,
        lastname:e.target.value
       })  
}
function handlechngeemail(e)
{
    setPerson({
        ...person,
        email:e.target.value
       })  
}
   return(
    <div>
        <form>
          FIRSTNAME:  <input type="text" value={person.firstname} onChange={handlechangefirstname}/><br />
          LASTNAME:<input type="text" value={person.lastname} onChange={handlechangelastname}/><br />
          EMAIL:<input type="text" value={person.email} onChange={handlechngeemail}/><br />
        </form>
        <p>{person.firstname}{' '}
         {person.lastname}{' '}
       {person.email} </p>
    </div>
   )
}