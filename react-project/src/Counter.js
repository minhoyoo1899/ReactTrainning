import { Component } from "react";

class Counter extends Component {
  constructor(props) { // component class의 생성자 함수 
    super(props);
    //state의 초기값 설정하기
    this.state = {
      number: 0
    };
  }

  render() {
    const { number } = this.state; // state를 조회할 때는 this.state로 조회한다.
    return (
      <div>
        <h1>{number}</h1>
        <button
          // onclick을 통해 버튼이 클릭되었을 때 호출 할 수 있는 함수를 지정합니다. 
          onClick={() => {
            // this.setState를 사용하여 state에 새로운 값을 넣을 수 있습니다.
            this.setState({ number: number + 1 });
          }}>
          +1
        </button>

        <button
          // onclick을 통해 버튼이 클릭되었을 때 호출 할 수 있는 함수를 지정합니다. 
          onClick={() => {
            // this.setState를 사용하여 state에 새로운 값을 넣을 수 있습니다.
            this.setState({ number: number - 1 });
          }}>
          -1
        </button>
      </div>  
    );
  }
}

export default Counter;