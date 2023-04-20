import { useState } from "react";

export  function Form()
{
    const[firstname,setfirstname]=useState('');
    const[lastname,setLastname]=useState('');

function handlechngefirstname(e)
{
        setfirstname(e.target.value);
}
function handlechngelastname(e)
{
    setLastname(e.target.value);
}

function handlereset()
{
    setfirstname(' ');
    setLastname(' ');
}
    return(
        <div>
            <form onSubmit={e=>e.preventDefault()}>
                <input type="text" value={firstname} placeholder="enter firstname" onChange={handlechngefirstname}/>
                <input type="text" value={lastname} placeholder="enter lastname"onChange={handlechngelastname}/>
                <h1>Haii ,{firstname}{lastname}</h1>
                <input type="Reset" onClick={handlereset} />
            </form>
        </div>
    )
  
}




export  function TrafficLight() {
  const [walk, setWalk] = useState(true);

  function handleClick() {
    setWalk(!walk);
    alert(walk ? 'Stop is next' : 'Walk is next');
  }

  console.log(walk)

  return (
    <>
      <button onClick={handleClick}>
        Change to {walk ? 'Stop' : 'Walk'}
      </button>
      <h1 style={{
        color: walk ? 'darkgreen' : 'darkred'
      }}>
        {walk ? 'Walk' : 'Stop'}
      </h1>
    </>
  );
}




export  function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => {
        setNumber(n => n + 1);
        setNumber(n => n + 1);
        setNumber(n => n + 1);
      }}>+3</button>
    </>
  )
}
