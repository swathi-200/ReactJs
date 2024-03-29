import { useState } from 'react';

function Counter() {
  const [score, setScore] = useState(0);
  const [hover, setHover] = useState(false);

  let className = 'counter';
  if (hover) {
    className += ' hovers';
  }

  return (

    <div
      className={className}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      <h1>{score}</h1>
      <button className='buttons' onClick={() => setScore(score + 1)}>
        Add one
      </button>
    </div>
    
  );
}

 export default Counter;