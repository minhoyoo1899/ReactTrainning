import ProtoTypes from 'prop-types'

const MyComponent06 = ({ name, favoriteNumber, children }) => {
  return (
    <div>
      안녕하세요. 제 이름은 {name}입니다. <br />
      children 값은 {children}
      입니다.
      <br />
      제가 제일 좋아 하는 숫자는 {favoriteNumber}입니다.
    </div>
  );
};

MyComponent06.defaultProps = {
  name: '기본이름'  /* default 값 설정*/
};


MyComponent06.ProtoTypes = {
  name: ProtoTypes.string,
  favoriteNumber: ProtoTypes.number.isRequired
};

export default MyComponent06;

// 더 많은 PropType종류
/*
  array : 배열
  arrayOf :  특정 PropType으로 이루어진 배열을 의미, 예를 들면 arrayOf(PropTypes.number)는 숫자로 이루어진 배열
  bool : true, false
  func : 함수
  number : 숫자
  object : 객체
  string : 문자열 
  symbol : ES6의 Symbol
  node : 랜더링 할 수 있는 모든 것 (숫자, 문자열, 혹은 JSX 코드, children, node PropType입니다.)
  instanceOf(클래스) : 특정 클래스의 인스턴스 
  oneOf(['a', 'b']) : 주어진 배열 요소중 하나
  oneOfType([React.PropTypes.string, PropTypes.number]) : 주어진 배열안의 종류 중 하나
  objectOf(React.PropTypes.number):객체의 모든 키 값이 인자로 주어진 PropType인 객체
  Shape({name : PropTypes.string, num: PropTypes.number}) : 주어진 싘마를 가진 객체

  any : 아무 종류
*/
