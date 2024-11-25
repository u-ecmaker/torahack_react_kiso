// タスクB: 非同期処理を行う関数を宣言
//アロー関数で非同期処理の関数にしたい場合
//                       ↓ここで async をつける
const getGitUsername = async () => {
  const message = 'GitのユーザIDは';
  const url = 'https://api.github.com/users/deatiger';

  //            ↓実行時に await をつける
  const json = await fetch(url)
    .then(res => {
      console.log('これは非同期処理成功時のメッセージです');
      return res.json();
    }).catch(error => {
        console.log('これは非同期処理失敗時のメッセージです', error);
        return null;
    });

  if (json) { // jsonがnullでないことを確認
    console.log(message + json.login);
  } else {
    console.log('ユーザー情報を取得できませんでした。');
  }
}

// タスクA
getGitUsername();

// 実行コマンド: node --experimental-modules src/js_nyumon/06kai/AsyncAwaitFunc.js
