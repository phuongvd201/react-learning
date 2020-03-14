import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Hello name="chao phuong"/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}


function Hello(props){
  return <div>Hello {props.name} </div>;
}


// function tick(){
//   const element = (
//     <div>
//       <h1>
//         Hello, world
//       </h1>
//       <h2>
//         It is {new Date().toLocaleDateString()}.
//       </h2>
//     </div>
//   );

//   ReactDOM.render(element, document.getElementById('root'));
// }

// setInterval(tick, 1000);

export default App;
