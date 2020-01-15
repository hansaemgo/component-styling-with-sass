import React from 'react';
import Button from './components/Button';
import './App.scss';


function App() {
  return (
    <div className ="App">
      <div className="buttons">
        <Button size="large" className="customized-button">BUTTION</Button>
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
      <div className="buttons">
        <Button outline={true} fullWidth className="customized-button">BUTTON</Button>
        <Button color="pink" outline fullWidth >BUTTION</Button>
        <Button color="gray" fullWidth 
          onClick ={() => {
          console.log('클릭');
        }}
        onMouseMove={()=> {
          console.log('마우스 무브');
        }
   
        }>BUTTION</Button>
      </div>
      <div>
        <p>1. 컴포넌트의 이름을 고유하게 지정</p>
        <p>2. 최상위 엘레먼트의 이르므을 컴포넌트와 동일하게</p>
      </div>
    </div>
  );
}

export default App;
