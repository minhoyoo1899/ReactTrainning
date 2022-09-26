import { Component } from "react";

class EventInput02 extends Component {
  
  state = {
    message: ''
  }

  render() {
    return (
      <div>
        <h1>이벤트 인풋 연습</h1>
        <input type="text" name="message" placeholder="아무거나 입력해 주세요." value={this.state.message}
          onChange={
            (e) => {
              this.setState({
                message: e.target.value
              })
            }
          } />
        
        <button onClick={
          () => {
            alert(this.state.message);
            this.setState({
              message: ''
            });
          }
        }> 확 인 </button>
      </div>
    );
  }
}

export default EventInput02;