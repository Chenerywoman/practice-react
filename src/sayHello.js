import React from 'react';

function Hello (){

    const sayHello  = () => {
        console.log("Hello");
      }

    return (
        <>
        <h3>This is the Hello component</h3>
        <div>
            <button onClick={sayHello}>Say Hello</button>
        </div>
        </>
    )
}

export default Hello;