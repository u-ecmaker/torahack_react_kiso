/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const countUp = () => {
    setCount(prevState => prevState + 1);
  }
  const countDown = () => {
    setCount(prevState => prevState - 1);
  }

  const [count2, setCount2] = useState(0);
  const countUp2 = () => {
    setCount2(prevState => prevState + 1);
  }
  const countDown2 = () => {
    setCount2(prevState => prevState - 1);
  }


  /* useEffectのパターン */

  useEffect(() => { // レンダリング時に毎回実行される
    console.log('Current count:', count);
  });

  useEffect(() => { // 初回のみ実行 からの配列を第二引数に指定する
    console.log('Current count:', count);
  },[]); //第二引数はdeps(dependencies,依存関係)と呼ばれ、
         // 空の配列の場合は、初回レンダリングのみ実行される

  useEffect(() => { // countが変更された時に実行される
    console.log('Current count:', count);
  },[count]);//依存関係にcountを指定


  return (
    <div>
      <p>現在のカウント数：{count}</p>
      <button onClick={countUp}>up</button>
      <button onClick={countDown}>down</button>
      
      <p>現在のカウント数：{count2}</p>
      <button onClick={countUp2}>up</button>
      <button onClick={countDown2}>down</button>
    </div>
  )
} 

export default Counter;