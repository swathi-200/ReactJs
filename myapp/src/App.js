// // import logo from './logo.svg';
//  import './App.css';
//  //import Using_Reducer from './ManaginState/state_logic_into_reducer';
//  import {useReducer} from 'react';
//  import Chats from './ManaginState/Chats';
//  import ContactLists from './ManaginState/ContactLists';
//  import {initialStates,messengerReducer} from "./ManaginState/messengerReducer";
 
//  export default function App() {
//    const [state, dispatch] = useReducer(messengerReducer, initialStates);
//    const message = state.message;
//    const contact = contacts.find((c) => c.id === state.selectedId);
//    return (
//      <div>
//        <ContactLists
//          contacts={contacts}
//          selectedId={state.selectedId}
//          dispatch={dispatch}
//        />
//        <Chats
//          key={contact.id}
//          message={message}
//          contact={contact}
//          dispatch={dispatch}
//        />
//      </div>
//    );
//  }
 
//  const contacts = [
//    {id: 0, name: 'Taylor', email: 'taylor@mail.com'},
//    {id: 1, name: 'Alice', email: 'alice@mail.com'},
//    {id: 2, name: 'Bob', email: 'bob@mail.com'},
//  ];
 
// // // import MovingDot from './objects_as_state';
// // // import Spread from './froms_using_spread_syntax_objects';
// // // import Form from './useimmerconcept';
// // // import Accordion from './ManaginState/sharing_state_between_compoents';
// // // import FilterableProductTable from './uidesign';
// // import SyncedInputs from './ManaginState/synched_inputs';

// // // const PRODUCTS = [
// // //   {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
// // //   {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
// // //   {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
// // //   {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
// // //   {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
// // //   {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
// // // ];


// // // export   function App() {
// // //   return <FilterableProductTable products={PRODUCTS} />;
// // // }


// // // export   function Toolbar()
// // // {
// // //   return(
// // //     <div className='toolbar' onClick={()=>alert('this is toolbar')}>
// // //      <div>
// // //       <button onClick={()=>alert('ths is playmovie')}>play movie</button>
// // //       <button onClick={()=>alert('this uploading image')}>uploading image</button>
// // //     </div>
// // //     </div>
// // //   )
// // // }




// // // function AlertButton({ message, children }) {
// // //   return (
// // //     <button onClick={() => alert(message)}>
// // //       {children}
// // //     </button>
// // //   );
// // // }

// // // export  function Toollbar() {
// // //   return (
// // //     <div>
// // //       <AlertButton message="Playing!">
// // //         Play Movie
// // //       </AlertButton>
// // //       <AlertButton message="Uploading!">
// // //         Upload Image
// // //       </AlertButton>
// // //     </div>
// // //   );
// // // }




// // // export  function ColorSwitch()
// // // {
// // //  function onChangeColor()
// // //  {
// // //      let color=document.body.style;
// // //      color.backgroundColor='blue';
// // //  }
 

// // //   return (
// // //     <button onClick={e => {
// // //       e.stopPropagation();
// // //       onChangeColor();
// // //     }}>

// // //       Change color
// // //     </button>
// // //   );

// // //   }

// // // const person = {
// // //   name: 'Gregorio Y. Zara',
// // //   theme: {
// // //     backgroundColor: 'black',
// // //     color: 'pink'
// // //   }
// // // };

// // // export default function TodoList() {
// // //   return (
// // //     <div style={person.theme}>
// // //       <h1>{person.name}'s Todos</h1>
// // //       <img
// // //         className="avatar"
// // //         src="https://i.imgur.com/7vQD0fPs.jpg"
// // //         alt="Gregorio Y. Zara"
// // //       />
// // //       <ul>
// // //         <li>Improve the videophone</li>
// // //         <li>Prepare aeronautics lectures</li>
// // //         <li>Work on the alcohol-fuelled engine</li>
// // //       </ul>
// // //     </div>
// // //   );
// // // }

// // // 

// // // import PackingList from "./conditional_rendering/packing_lis"
// // //import Form from './forminputs';
// // import { useState } from 'react';
// // // import FormInput from './ManaginState/Reactinginputwithstate';
// // // import Picture from './ManaginState/add_and_remove_css_class';
// // // import EditProfile from './ManaginState/profile_Editor';
// // // import Forms from './ManaginState/choosing_state_structure';
// // // import Counter from './ManaginState/treeconcept';
// // // function App()
// // // {
// // //   return (
// // //     <div className='sec'>
// // //       <Counter />
// // //       <Counter />
// // //     </div>
// // //   );


// // import Chat from './ManaginState/chat';
// // import ContactList from './ManaginState/Contact_list';

// // export default function App() {
// //   const [to, setTo] = useState(contacts[0]);
// //   return (
// //     <div>
// //       <ContactList
// //         contacts={contacts}
// //         selectedContact={to}
// //         onSelect={contact => setTo(contact)}
// //       />
// //       <Chat contact={to} />
// //     </div>
// //   )
// // }

// // const contacts = [
// //   { id: 0, name: 'Taylor', email: 'taylor@mail.com' },
// //   { id: 1, name: 'Alice', email: 'alice@mail.com' },
// //   { id: 2, name: 'Bob', email: 'bob@mail.com' }
// // ];

// //       {/* <PackingList /> */}
// //      {/* <Form /> */}
// //       {/* <MovingDot /> */}
// //       {/* <Spread /> */}
// //       {/* <Form /> */}
// //       {/* <FormInput /> */}
// //       {/* <Picture /> */}
// //       {/* <EditProfile /> */}
// //       {/* <Forms /> */}
// //       {/* <Accordion /> */}
// //       // <SyncedInputs />

  


// // const sculptureList = [{
// //   name: 'Homenaje a la Neurocirugía',
// //   artist: 'Marta Colvin Andrade',
// //   description: 'Although Colvin is predominantly known for abstract themes that allude to pre-Hispanic symbols, this gigantic sculpture, an homage to neurosurgery, is one of her most recognizable public art pieces.',
// //   url: 'https://i.imgur.com/Mx7dA2Y.jpg',
// //   alt: 'A bronze statue of two crossed hands delicately holding a human brain in their fingertips.'  
// // }, {
// //   name: 'Floralis Genérica',
// //   artist: 'Eduardo Catalano',
// //   description: 'This enormous (75 ft. or 23m) silver flower is located in Buenos Aires. It is designed to move, closing its petals in the evening or when strong winds blow and opening them in the morning.',
// //   url: 'https://i.imgur.com/ZF6s192m.jpg',
// //   alt: 'A gigantic metallic flower sculpture with reflective mirror-like petals and strong stamens.'
// // }, {
// //   name: 'Eternal Presence',
// //   artist: 'John Woodrow Wilson',
// //   description: 'Wilson was known for his preoccupation with equality, social justice, as well as the essential and spiritual qualities of humankind. This massive (7ft. or 2,13m) bronze represents what he described as "a symbolic Black presence infused with a sense of universal humanity."',
// //   url: 'https://i.imgur.com/aTtVpES.jpg',
// //   alt: 'The sculpture depicting a human head seems ever-present and solemn. It radiates calm and serenity.'
// // }, {
// //   name: 'Moai',
// //   artist: 'Unknown Artist',
// //   description: 'Located on the Easter Island, there are 1,000 moai, or extant monumental statues, created by the early Rapa Nui people, which some believe represented deified ancestors.',
// //   url: 'https://i.imgur.com/RCwLEoQm.jpg',
// //   alt: 'Three monumental stone busts with the heads that are disproportionately large with somber faces.'
// // }, {
// //   name: 'Blue Nana',
// //   artist: 'Niki de Saint Phalle',
// //   description: 'The Nanas are triumphant creatures, symbols of femininity and maternity. Initially, Saint Phalle used fabric and found objects for the Nanas, and later on introduced polyester to achieve a more vibrant effect.',
// //   url: 'https://i.imgur.com/Sd1AgUOm.jpg',
// //   alt: 'A large mosaic sculpture of a whimsical dancing female figure in a colorful costume emanating joy.'
// // }, {
// //   name: 'Ultimate Form',
// //   artist: 'Barbara Hepworth',
// //   description: 'This abstract bronze sculpture is a part of The Family of Man series located at Yorkshire Sculpture Park. Hepworth chose not to create literal representations of the world but developed abstract forms inspired by people and landscapes.',
// //   url: 'https://i.imgur.com/2heNQDcm.jpg',
// //   alt: 'A tall sculpture made of three elements stacked on each other reminding of a human figure.'
// // }, {
// //   name: 'Cavaliere',
// //   artist: 'Lamidi Olonade Fakeye',
// //   description: "Descended from four generations of woodcarvers, Fakeye's work blended traditional and contemporary Yoruba themes.",
// //   url: 'https://i.imgur.com/wIdGuZwm.png',
// //   alt: 'An intricate wood sculpture of a warrior with a focused face on a horse adorned with patterns.'
// // }, {
// //   name: 'Big Bellies',
// //   artist: 'Alina Szapocznikow',
// //   description: "Szapocznikow is known for her sculptures of the fragmented body as a metaphor for the fragility and impermanence of youth and beauty. This sculpture depicts two very realistic large bellies stacked on top of each other, each around five feet (1,5m) tall.",
// //   url: 'https://i.imgur.com/AlHTAdDm.jpg',
// //   alt: 'The sculpture reminds a cascade of folds, quite different from bellies in classical sculptures.'
// // }, {
// //   name: 'Terracotta Army',
// //   artist: 'Unknown Artist',
// //   description: 'The Terracotta Army is a collection of terracotta sculptures depicting the armies of Qin Shi Huang, the first Emperor of China. The army consisted of more than 8,000 soldiers, 130 chariots with 520 horses, and 150 cavalry horses.',
// //   url: 'https://i.imgur.com/HMFmH6m.jpg',
// //   alt: '12 terracotta sculptures of solemn warriors, each with a unique facial expression and armor.'
// // }, {
// //   name: 'Lunar Landscape',
// //   artist: 'Louise Nevelson',
// //   description: 'Nevelson was known for scavenging objects from New York City debris, which she would later assemble into monumental constructions. In this one, she used disparate parts like a bedpost, juggling pin, and seat fragment, nailing and gluing them into boxes that reflect the influence of Cubism’s geometric abstraction of space and form.',
// //   url: 'https://i.imgur.com/rN7hY6om.jpg',
// //   alt: 'A black matte sculpture where the individual elements are initially indistinguishable.'
// // }, {
// //   name: 'Aureole',
// //   artist: 'Ranjani Shettar',
// //   description: 'Shettar merges the traditional and the modern, the natural and the industrial. Her art focuses on the relationship between man and nature. Her work was described as compelling both abstractly and figuratively, gravity defying, and a "fine synthesis of unlikely materials."',
// //   url: 'https://i.imgur.com/okTpbHhm.jpg',
// //   alt: 'A pale wire-like sculpture mounted on concrete wall and descending on the floor. It appears light.'
// // }, {
// //   name: 'Hippos',
// //   artist: 'Taipei Zoo',
// //   description: 'The Taipei Zoo commissioned a Hippo Square featuring submerged hippos at play.',
// //   url: 'https://i.imgur.com/6o5Vuyu.jpg',
// //   alt: 'A group of bronze hippo sculptures emerging from the sett sidewalk as if they were swimming.'
// // }];

// // export  function Gallery()
// // {
// //   const[index,setIndex]=useState(0);
// //   const [showMore, setShowMore] = useState(false);


// // let hasprev=index > 0;
// // let hasnxt=index<sculptureList.length-1

// // function handlemoreclick()
// // {
// //   setShowMore(!showMore);
// // }
// //   function handleClickPrev()
// //   {
// //     if(hasprev)
// //     setIndex(index-1);
// //   }
// //  function handleClickNext()
// //  {
// //   if(hasnxt)
// //   setIndex(index+1);
// //  }
// //   let sculpture = sculptureList[index];

// //   return(
    
// //     <div>
// //       <button onClick={handleClickPrev}
// //           disabled={!hasprev}
// //       >Previous</button>
// //       <button onClick={handleClickNext}
// //             disabled={!hasnxt}
// //       >Next</button>


// //        <h2> <b>{sculpture.name}</b></h2> by
// //       <h2>{sculpture.artist}</h2>
// //        <h2>({index + 1} of {sculptureList.length})</h2> 
// //        <img src={sculpture.url} /><br />
// //        <button onClick={handlemoreclick}>
// //         {showMore?'hide':'show'} details
// //        </button>
    
// //        {showMore && <p>{sculpture.description}</p>}


// //     </div>
// //   );
// // }
// import Section from "./ManaginState/section";
// import Heading from "./ManaginState/Heading";
import React from 'react';
import ComponnetC from "./componentC";
import ComponnetB from './componentb';
import { useContext } from 'react';

export const usercontext=React.createContext();

function App()
{
  return(
    <div>
       <usercontext.Provider value={'helllo'}>
        <List />
       </usercontext.Provider>
      
    </div>

    // <Section>
    //   <Heading level={1}>Title</Heading>
    //   <Heading level={2}>Heading</Heading>
    //   <Heading level={3}>Sub-heading</Heading>
    //   <Heading level={4}>Sub-sub-heading</Heading>
    //   <Heading level={5}>Sub-sub-sub-heading</Heading>
    //   <Heading level={6}>Sub-sub-sub-sub-heading</Heading>
    // </Section>
  )
}
function List()
{
  return(
    <div>
       <Place />
  </div>)
}
function Place()
{
  const user=useContext(usercontext);
  return(
     <div>
    {user}
     </div>
  )
}
export default App;