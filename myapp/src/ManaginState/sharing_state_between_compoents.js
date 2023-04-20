import { useState } from 'react';

function Panel({title,children})
{
    const[isActive,setActive]=useState(false);
    return(
        <div>
            <h3>{title}</h3>
            {isActive?(
            <p>{children}</p>
     ) :(
        <button onClick={()=>setActive(true)}>show</button>
    )}
    </div>
    );
}
function Accordion()
{
    return(
        <div>
            <h2>Almaty,Kazakhstan</h2>
            <Panel title="about">
                with a population of about 2 million,almaty is kazakhstans largest city.from
                1929 to 1997,it was its capital city.
            </Panel>
            
            <Panel title="Etymology">
                THE NAME COMES FROM THE KAZAikh word for apple and is often  translated as full ofapples

            </Panel>
        </div>
    );
}
export default Accordion;