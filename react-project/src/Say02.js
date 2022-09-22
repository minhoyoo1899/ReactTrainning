import { useState } from "react";
// 한 컴포넌트에서 useState여러번 사용하기

const Say02 = () => {
  const [message, setMessage] = useState('');
  const onClickEnter = () => setMessage('안녕하세요!');
  const onClickLeave = () => setMessage('안녕히 가세요!');

  const [color, setColor] = useState('black');

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1 style={{ color }}>{message}</h1>
      <button style={{ color: 'red' }} onClick={() => { setColor('red') }}> 빨 간 색 </button>
      <button style={{ color: 'green' }} onClick={() => { setColor('green') }}> 녹 색 </button>
      <button style={{ color: 'blue' }} onClick={() => { setColor('blue') }}> 파 란 색 </button>
    </div>
  );
};

export default Say02;