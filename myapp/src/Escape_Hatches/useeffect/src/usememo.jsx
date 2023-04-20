import { useEffect } from "react";
import { useState,useMemo } from "react";

function Usememo()
{
    const[number,setNumber]=useState(0);
    const[dark,setDark]=useState(false);
    const calculation=useMemo(()=>{
       return getValue(number)
    },[number])


    const themestyles=useMemo(()=>{
       return {
            backgroundColor:dark?'black':'white',
            color:dark?'white':'black',
        }
    
    },[dark])
    
    useEffect(()=>{
            console.log('theme changed');
    },[themestyles]);
    return(
    <div>
      <input type="number" onChange={e=>setNumber(e.target.value)}/>
      <button onClick={e=>setDark(!dark)}>change theme</button>
      <div style={themestyles}>{calculation}</div>
    </div>
    );
}
export default Usememo;
function getValue(number)
{

    for(let i=0;i<50;i++)
    {}
    return number*2;
}