// タスクB: 非同期処理を行う関数を宣言
//    ↓コンストラクタっぽい関数。 return new Promiseで3つの状態が返ってくる
const getGitUsername = () => {
//             ↓3つの状態の何れかを持つ(pending/fulfilled/rejecdted)  
  return new Promise((resolve, reject) => {
//                     ↑resolve/rejectの2つが出てくるまでは次に進まない
    const url = 'https://api.github.com/users/deatiger';

    // GitHub APIをFetchメソッドで呼び出す
    fetch(url).then(res => res.json())
      .then(json => {
        console.log('これは非同期処理成功時のメッセージです');
        resolve(json.login);
      }).catch(error => {
        console.log('これは非同期処理失敗時のメッセージです', error);
        reject(null);
      });
  });
}

// タスクA
const message = 'GitのユーザIDは';
// getGitUsernameにchainしてthenメソッドが実行される
//                    ↓この引数にはreturn結果の値が格納される
getGitUsername().then(username => { // ←関数内でpromiseの処理を入れているため、
  console.log(message + username);  //  usernameが返って来た後にメッセージが表示される
}); 

// 実行コマンド: node --experimental-modules src/js_nyumon/06kai/promiseAsynchronousFunc.js
