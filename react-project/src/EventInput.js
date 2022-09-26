import { Component } from "react";

class EventInput extends Component {

  state = {
    message: ''
  }

  render() {
    return (
      <div>
        <h1> 이벤트 연습 인풋 </h1>
        <input
          type = "text"
          name = "message"
          placeholder = "아무거나 입력해 주세요."
          value = {this.state.message}
          onChange = {
            (e) => {
              this.setState({
                message: e.target.value
              })
              //console.log(this.state.message)
            }
          } />
      </div>
    );
  }
}

export default EventInput;