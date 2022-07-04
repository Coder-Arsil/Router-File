import { React, useEffect, useState } from 'react'

function Home() {
  const [before, after] = useState(false);
  const [old1, new1] = useState(1);
  useEffect(() => {
    console.log("Arsil");
    
  }, [old1, before]);
  return (
    <div>
      <h1>My name is Mohammad Arsil</h1>
      <button onClick={() => after(true)}>1 Click me !</button>
      <button onClick={() => new1(2)}>2 Click me !</button>
    </div>
  )
}

export default Home