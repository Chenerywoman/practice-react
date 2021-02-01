import React, {useState} from 'react';
// import Hello from './sayHello';
import Tweet from './Tweet';
import './App.css';

function App(){

  const [isRed, setRed] = useState(false);
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState([
    {name:'Ed',message: 'Hello there'},
    {name:'John',message: 'I am John Snow'},
    {name:'Traversty',message: 'Awesome'}
    ]);

  const increment = () => {

    setCount(count + 1);
    setRed(!isRed);
  }
  
  return (
      <div className="app">
        {users.map(user => (
          <Tweet name={user.name} message={user.message}/>
        ))}


        {/* <h1 className={isRed ? 'red' : ''}>Change My Colour</h1>
        <button onClick={increment}>Increment</button>
        <h1>{count}</h1>
        <Tweet name="Dev ED" message="This is a random tweet"/>
        <Tweet name="John Snow" message="I am the true King"/>
        <Tweet name="Winter is coming" message="wrap up warm"/> 
        <Tweet name="Mosh" message="That's a good name"/> */}
      </div>
  );
}

export default App;