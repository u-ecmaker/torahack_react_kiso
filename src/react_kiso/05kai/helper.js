// 名前付きexport
export const addTax = (price) => {
  return price * 1.1;
};

export const getWild = () => {
  console.log('Get wild and touch');
};


/* 以下はコンソールログだけど、なんで二回表示されるの？
 * lockdown-install.js:1 Removing unpermitted intrinsics
 * react refresh:6 Download the React DevTools for a better development experience: https://reactjs.org/link/react-devtools
 * helper.js:7 Get wild and touch ←ここ
 * helper.js:7 Get wild and touch ←ここ
 * 
 * getWild がコンソールに二回表示される理由は、Reactの開発環境でのホットリロード（Hot Reloading）やリフレッシュ（Fast Refresh）機能によるものです。この機能は、コードを変更した際にページを再読み込みせずに変更を反映させるために使用されます。
 * 理由
 * 1. ホットリロード: 開発中にコードを変更すると、Reactはその変更を検知し、コンポーネントを再レンダリングします。この際、Article05 コンポーネントが再度呼び出されるため、getWild() が再実行され、コンソールにメッセージが表示されます。
 * 2. 初回レンダリング: アプリケーションが最初にロードされたときにも getWild() が呼び出されるため、最初の表示が行われます。
 * まとめ
 * 1. 初回レンダリング: アプリケーションが最初にロードされたときに getWild() が実行され、コンソールにメッセージが表示されます。
 * 2. ホットリロード: コードを変更した際に、Reactがコンポーネントを再レンダリングし、再度 getWild() が実行されるため、メッセージが再表示されます。
 * このため、コンソールに「Get wild and touch」というメッセージが二回表示されるのです。開発中はこの挙動が一般的であり、特に問題はありません。
*/