import React from 'react';
import Button from './components/Button';
import './App.scss';


function App() {
  return (
    <div className ="App">
      <div className="buttons">
        <Button size="large">BUTTION</Button>
        <Button size="medium">BUTTION</Button>
        <Button size="small">BUTTION</Button>
      </div>
      <div className="buttons">
        <Button color="gray" size="large">BUTTION</Button>
        <Button color="gray" size="medium">BUTTION</Button>
        <Button color="gray" size="small">BUTTION</Button>
      </div>
      <div className="buttons">
        <Button color="pink">BUTTION</Button>
        <Button color="pink" size="medium">BUTTION</Button>
        <Button color="pink" size="small">BUTTION</Button>
      </div>
      <div className="buttons">
        <Button outline={true}>BUTTON</Button>
        <Button color="pink" outline >BUTTION</Button>
        <Button color="gray" outline>BUTTION</Button>
      </div>
    </div>
  );
}

export default App;
