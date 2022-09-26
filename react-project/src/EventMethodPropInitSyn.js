import { Component } from "react";

class EventMethodPropInitSyn extends Component {

  state = {
    message: ''  
  }

  handleChange = (e) => {
    this.setState({
      message: e.target.value
    });
  }

  handleClick = () => {
    alert(this.state.message);
    this.setState({
      message: ''
    });
  }

  render() {
    return (
      <div>
        <h1> Property Intializer Syntax를 사용한 메서드 작성</h1>
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력해 주세요"
          value={this.state.message}
          onChange={this.handleChange} />
        <button onClick={this.handleClick}> 확 인 </button>
      </div>
    );
  }
}

export default EventMethodPropInitSyn;