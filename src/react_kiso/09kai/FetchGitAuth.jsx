import { useState, useEffect } from 'react';

const FetchGitAuth = () => {
  const [name, setName] = useState('');
  const [id, setId] = useState('deatiger');

  // gaearon: Reactの主要な開発者 ↓ ダン・アブラモビッチ（Dan Abramov）氏のid。状態管理ライブラリ Redux の共同開発者。
  const ids = ['deatiger', 'gaearon', 'aws', 'google', 'facebook', 'u-ecmaker'];

  const getRandomId = () => {
    const _id = ids[Math.floor(Math.random() * ids.length)]; // 下記に詳細説明
    setId(_id);
  };
  /* ランダム生成の詳細
   * Math.random() は0以上1未満の浮動小数点数を返す。例えば、0.234や0.987などの値が得られます。
   * ids.length: ids 配列の要素数を取得します。 expected~ 6: ['deatiger', 'gaearon', 'aws', 'google', 'facebook', 'u-ecmaker']。
   *  Math.random() * ids.length: ランダムな数値（0以上1未満）に配列の長さ（6）を掛けることで、0以上6未満の数値を生成します。0.234*6 → 1.404。
   *  Math.floor(...): 引数として与えられた数値を小数点以下を切り捨てて整数に変換します。1.404 → 1。
   * これにより、idsのインデックスが0以上ids.length未満の整数となる。
  */


  useEffect(() => {
    fetch(`https://api.github.com/users/${id}`) // バッククォーテーションと${}を使うことで、変数を埋め込むことができる。'https:~'+id と等価。
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setName(data.name);
      })
      .catch(err => {
        console.log(err);
      });
  }, [id]); // 依存関係：初回、id変更時のみ実行


  return (
    <div>
      <p>{id}の、GitHub上の名前は{name}です。</p>
      <button onClick={getRandomId}>IDを変更</button>
    </div>
  );
};

export default FetchGitAuth;
