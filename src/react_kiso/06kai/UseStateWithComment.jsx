import { useState } from 'react';

const UseStateWithComment = () => {
  const [message, setMessage] = useState('Torahack is cool');
  // message: 現在の状態                  // 初期値
  // setMessage: 更新関数
  //                      更新関数   ↓新しい値
  <button onClick={() => setMessage(message + '!!')}>
    {message.toString()}
  </button>

  // 注意：
  // 条件をつけずに、このように書くと、無限レンダリングでエラーになる
  //setMessage(message + '!!');

  // eslint-disable-next-line no-unused-vars
  const [likes, setLikes] = useState(0);
  const [isPublished, setIsPublished] = useState(false);

  console.log("!U init isPublished: ", isPublished);
  if (!isPublished) setIsPublished(true); //条件をつけて更新関数を呼び出す
  console.log("!U updated isPublished: ", isPublished);

  return (
    <button onClick={() => setMessage(message + '!!')}>
    {message.toString()}
  </button>
  );
}

export default UseStateWithComment;