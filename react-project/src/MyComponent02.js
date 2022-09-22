const MyComponent = props => {
  return <div>안녕하세요. 제 이름은 {props.name}입니다.</div>
};

MyComponent.defaultProps = {
  name: 'react02'
};

export default MyComponent;