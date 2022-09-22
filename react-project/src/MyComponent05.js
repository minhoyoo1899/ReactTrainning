import ProtoTypes from 'prop-types';

const MyComponent05 = ({ name, children }) => {
  return (
    <div>
      안녕하세요. 제 이름은 {name}입니다. <br />
      children값은 {children}입니다.
    </div>
  );
};

MyComponent05.defaultProps = {
  name: '기본이름'
};

MyComponent05.ProtoTypes = {
  name : ProtoTypes.string
}

export default MyComponent05;