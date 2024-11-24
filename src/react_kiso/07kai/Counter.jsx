import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  /* 良い例：prevStateを使ったカウンター */
  const countUp = () => {
    setTimeout(() => {
      // 更新前のstateを参照すれば、何回連打しても1s後に更新される😆
      setCount(prevState => prevState + 1);
    }, 1000);
  }
  const countDown = () => {
    // 実際は、setTimeout ではなく、重い処理があったとしても
    // 更新前のstateを参照すれば、何回連打しても1s後に更新される😆
    setCount(prevState => prevState - 1);
  }

  /* 悪い例：prevStateを使わないカウンター */
  const ButCountUp = () => {
    // 現在の値を直接更新している
    // useStateの更新関数は、実際に反映されるまでにラグがある(非同期)。
    // 人間の手でカウント刷る場合は殆ど問題ないが、
    // setCount(count + 1);
    // このように直接更新してしまうと、1sに1回しか更新されなくなる😔
    setTimeout(() => {setCount(count + 1)}, 1000);
  }
  const ButCountDown = () => {
    // 実際に重い処理があったとしたら、setCountのcountが更新される前に、
    // また ButCountDownが実行されて、重い処理が終わってからしか更新されなくなる😔
    setCount(count - 1);
  }

  return (
    <div>
      <p>良いカウンター</p>
      <p>現在のカウント数：{count}</p>
      <button onClick={countUp}>up</button>
      <button onClick={countDown}>down</button>

      <p>悪いカウンター</p>
      <p>現在のカウント数：{count}</p>
      <button onClick={ButCountUp}>up</button>
      <button onClick={ButCountDown}>down</button>
    </div>
  )
} 

export default Counter;