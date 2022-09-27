import { useState } from 'react'

// 인풋의 개수가 많아 진다면 이렇게 처리하는 것이 낫다

const EventCompFunction02 = () => {
  const [form, setForm] = useState({
    username: '',
    message: ''
  });

  const { username, message } = form;
  const onChange = e => {
    const nextForm = {
      ...form, // 기존의 form의 내용을 복사, *전개연산자(Spread Operator)를 사용 => 전개연산자를 사용 함 으로써 코드의 양을 줄 일 수 있다.
      [e.target.name]: e.target.value // 원하는 값을 덮어 씌우기
    };
    setForm(nextForm);
  };
  const onClick = () => {
    alert(username + ' : ' + message);
    setForm({
      username: '',
      message: ''
    });
  };
  const onKeyPress = e => {
    if (e.key === 'Enter') {
      onClick();
    }
  };
  return (
    <div>
      <h1>이벤트 연습 Form에 다중 input value 값 객체 담기</h1>
      <input type="text" name="username" placeholder="사용자명"
        value={username} onChange={onChange} />
      
      <input type="text" name="message" placeholder="아무거나 입력해 주세요."
        value={message} onChange={onChange} onkeyPress={onKeyPress} />
      
      <button onClick={onClick}> 확 인 </button>
    </div>
  );
};

export default EventCompFunction02;
