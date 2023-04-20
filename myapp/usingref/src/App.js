import logo from './logo.svg';
import './App.css';
import {useRef} from 'react';
import CatFriends from './scroll_element';
// function App() {
//   const input=useRef(0);
//   function handleclick()
//   {
//     input.current++;
//     console.log(input.current);
//   }
//   console.log("rendred");
//   return (
//     <div className="App">
//      <button onClick={handleclick}>clicked</button>
//     </div>
//   );
// }
function App()
{
  return(
    <div>
      <CatFriends />
    </div>
  )
}
export default App;


// function App() {
//   const input=useRef();
//   useEffect(()=>{
//     input.current.focus();
//   })
//   function handleclick()
//   {
    
//     console.log(input.current);
//   }
//   console.log("rendred");
//   return (
//     <div className="App">
//       <input type="text" ref={input}/>
//      <button onClick={handleclick}>clicked</button>
//     </div>
//   );
//}