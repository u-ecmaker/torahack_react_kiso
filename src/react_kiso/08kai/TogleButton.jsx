import { useState, useEffect } from 'react';

const TogleButton = () => {
  const [open, setOpen] = useState();

  const toggle = () => {
    setOpen(prevOpen => !prevOpen);
  }

  useEffect(() => {
    console.log('Current state is:', open);
    if(open){
      console.log('Subscribe database...');
    }
    return () => { // クリーンアップ関数: 再レンダリングされる前に呼び出される
      // 初回は呼び出されない。再レンダリングのときに呼び出される
      console.log('Unsubscribe database...');
    }
  },);

  return (
    <button onClick={toggle}>
      {open ? 'OPEN' : 'CLOSE'}
    </button>
  )
}

export default TogleButton;

/* クリーンアップ
 * - コンポーネントで外部データベースを購読したいとき  
 *   購読：データベースの値を監視して、データベースが更新されたらコンポーネント内で値を更新する、というような処理
 * - 購読しっぱなしは良くない (メモリリーク 何度もデータ取ってきちゃうなど)
 * - クリーンアップ関数を使って掃除する
 * - state更新時、更新関数のuseStateが呼び出される前(再レンダリングされる前)に、  
 *   クリーンアップ関数が必ず実行される。
 */