import { useState,useEffect } from "react"
import { createConnection } from "./chat";
const serverUrl = 'https://localhost:1234';
function ChatRoom({roomid})
{ 
    useEffect(() => {
    const connection = createConnection(serverUrl, roomid);
    connection.connect();
    return () => connection.disconnect();
  }, [roomid]);
  return <h1>Welcome to the {roomid} room!</h1>;
}
function  LifeCyce()
{
    const[roomid,setRoomid]=useState();
    const[show,setShow]=useState(false);
    return(
        <div>
            Choose a chat room:
            <select value={roomid} onChange={e=>setRoomid(e.target.value)}>
                <option>Gneral</option>
                <option>travel</option>
                <option>music</option>
            </select>
            <button onClick={e=>setShow(!show)}>
                {show?'close chat':'openchat'}
            </button>
            {show && <hr></hr>}
            {show && <ChatRoom roomid={roomid} />}
        
        </div>
    )
}
export default LifeCyce;