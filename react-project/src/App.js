import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent';

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
      {name === '리액트' ? (
        <h1>리액트 입니다.</h1>        
      ) : (<h2>리액트가 아님니다.</h2>)} 

        <MyComponent name="React" />
    </div>   
  );
}

export default App;
