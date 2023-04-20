import { useState } from 'react';

export default function EditProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [firstName, setFirstName] = useState('Jane');
  const [lastName, setLastName] = useState('Jacobs');

   function handleprofile(e)
   {
    e.preventDefault();
    setIsEditing(!isEditing);
   }
  return(
    <div>
        <center>
        <label>
            First Name:{''}
            {isEditing ?(
                <input type="text" value={firstName} onChange={e=>{
                    setFirstName(e.target.value)
                }}
                />
            )
            :
            (
                <b>{firstName}</b>
            )
            
            }
        </label><br /><br />

        <label>
            Last Name:{''}
            {isEditing ?(
                <input type="text" value={lastName} onChange={e=>{
                    setLastName(e.target.value)
                }}
                />
            )
            :
            (
                <b>{lastName}</b>
            )
            
            }
        </label>
        <br /><br />
        <button onClick={handleprofile}>
            {isEditing? 'save':'edit'} profile
        </button><br />
        <p>hello,{firstName},{lastName}</p>
        </center>
    </div>
  )

}