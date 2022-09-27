import { Component } from "react";

class EventMultiInput extends Component {

  state = {
    username: '',
    message: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleClick = () => {
    alert(this.state.username + ':' + this.state.message);
    this.setState({
      username: '',
      message: ''
    }); // 이 코드가 핵심!! 여기서 이벤트 처리함 
  }

  render() {
    return (
      <div>
        <h1> 이벤트 연습 Multi Input</h1>
        <input type="text" name="username" placeholder="사용자명"
          value={this.state.uername}
          onChange={this.handleChange} />
        
        <input type="text" name="message" placeholder="아무거나 입력해 주세요."
          value={this.state.message}
          onChange={this.handleChange} />
        
        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}

export default EventMultiInput;