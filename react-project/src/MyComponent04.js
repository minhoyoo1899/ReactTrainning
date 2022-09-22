// const MyComponent04 = props => {
//   const { name, children } = props;
//   return (
//     <div>
//       안녕하세요. 제 이름은 {name}입니다. <br />
//       children값은 {children}입니다.
//     </div>
//   );
// };

// MyComponent04.defaultProps = {
//   name: '기본이름'
// };

const MyComponent04 = ({ name, children }) => {
  return (
    <div>
      안녕하세요. 제 이름은 {name}입니다. <br />
      children값은 {children}입니다.
    </div>
  );
};

MyComponent04.defaultProps = {
  name: 'react04'
};

export default MyComponent04;