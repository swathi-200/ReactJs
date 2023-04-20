import { useState, useEffect } from 'react';
import { createConnection } from './chat';
import LifeCyce from './lifecycle_Concept';
import Usememo from './usememo';

export default function App() {
  // useEffect(() => {
  //   const connection = createConnection();
  //   connection.connect();
  //   return () => connection.disconnect();
  // }, []);
  // return <h1>Welcome to the chat!</h1>;

  return(
    <div>
    {/* <Usememo />  */}
      <LifeCyce />
    </div>
  )
}
