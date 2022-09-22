import { Component } from "react";
import PropTypes from "prop-types";

// 클래스 형 컴포넌트에서 prop사용하기

// ***props사용하는 기초 문법
// class MyComponent07 extends Component {
//   render() {
//     const { name, favoriteNumber, children } = this.props; // 비 구조화 할당
//     return (
//       <div>
//         안녕하세요. 제 이름은 {name}입니다. <br />
//         children값은 {children}입니다. <br />
//         제가 좋아하는 숫자는 {favoriteNumber}입니다.
//       </div>
//     );
//   }
// }

// MyComponent07.defaultProps = {
//   name: '기본이름'
// };

// MyComponent07.PropTypes = {
//   name: PropTypes.string,
//   favoriteNumber: PropTypes.number.isRequired
// };

// ***class 내부에서 지정하는 방법

class MyComponent07 extends Component {
  static defaultProps = {
    name: '기본 이름'
  };
  static PropTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired
  };
  render() {
    const { name, favoriteNumber, children } = this.props; // 비 구조화 할당
    return (
      <div>
        안녕하세요. 제 이름은 {name}입니다. <br />
        children 값은 {children}입니다.
        <br />
        제가 좋아하는 숫자는 {favoriteNumber}입니다.
      </div>
    );
  }
}




export default MyComponent07;