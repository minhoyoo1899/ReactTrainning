import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent';
import MyComponent02 from './MyComponent02';
import MyComponent03 from './MyComponent03';
import MyComponent04 from './MyComponent04';
import MyComponent05 from './MyComponent05';
import MyComponent06 from './MyComponent06';
import Counter from './Counter';
import Counter02 from './Counter02';
import Counter03 from './Counter03';
import Say from './Say';
import Say02 from './Say02';
import EventPratice from './EventPratice';
import EventPratice02 from './EventPratice02';
import EventPratice03 from './EventPratice03';

const app = () => {
  return ;
};


function App() {
  const name = "리액트"; 
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      
      <h1>리액트 테스트: 리액트 안녕</h1>
      <h2>잘 작동하니?</h2>

      <h3>if 없이 사용하는 조건문 (&& || 도 사용가능)</h3>
      {name === '리액트' ? (<h1>리액트 입니다.</h1>) : (<h2>리액트가 아님니다.</h2>)} {/*3항 연산자*/}

      <MyComponent name="React" />
      <MyComponent02 />
      <MyComponent03>리액트03</MyComponent03>
      <MyComponent04> 리액트04 </MyComponent04>
      <MyComponent05 name={'React05'}>리액트05</MyComponent05>
      <MyComponent06 name="React06" favoriteNumber={1}></MyComponent06>
      <Counter />
      <Counter02 />
      <Counter03 />

      <Say />
      <Say02 />
      

      <EventPratice />
      <EventPratice02 />
      <EventPratice03 />
    </div>   
    
  );
}

export default App;
