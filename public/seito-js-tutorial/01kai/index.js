/* eslint-disable no-unused-vars */

//変数
let hoge = 'Hello World!';
console.log(hoge);

//定数
const foo = 'He..Hell...Hello World!';
//foo = 'Hello World!';

//配列
const inoki = ['いーち','にーい','さーん','ダーー！！'];
console.log(inoki);
console.log(inoki[1-1]);
console.log(inoki[2-1]);
console.log(inoki[3-1]);

console.log('---------');
console.log('ループ文');

//ループ文
let index = 0;
//   (index < 4){
while(index < inoki.length){ //=4
  console.log('index = ', index);
  // 繰り返したい命令
  console.log(inoki[index]);
  index++; //index = 5
}

console.log('---------');
console.log('if/else文');

//if / else
if(inoki.length > 5){
  console.log('ボンバイエ！');
} else {
  console.log('ボンバ...！');
}

console.log('---------');
console.log('関数');

//関数
const test = (arg) => { //argument:英語で引数
  if(inoki.length > arg){
    console.log('ボンバイエ！');
  } else {
    console.log('ボンバ...！');
  }
};

test(3);
test(4);
test(5);

console.log('---------');
console.log('オブジェクト');

//オブジェクト
const piyo = {
  color: 'pink',
  size: 'large',
  purfume: 'mint',
  goToilet: () => console.log('Hello world!')
};

console.log(piyo);
console.log(piyo.color);
console.log(piyo.goToilet());
piyo.goToilet();

console.log('---------');
console.log('window');
console.log(window);
console.log(window.innerWidth);

document.addEventListener('DOMContentLoaded', () => {
  console.log(window.innerWidth);
  // ウィンドウサイズが変更されたときのイベントリスナー
  window.addEventListener('resize', () => {
    console.log(window.innerWidth);
  });
  /* ウィンドウサイズが変更されたときにログを表示するには、
   * resize イベントをリッスンする必要があります。
   * 以上のように、resize イベントを追加することで、
   * ウィンドウサイズが変更されるたびに window.innerWidth をコンソールに表示できます。
   */
});

window.alert('Hello World!');

console.log('---------');
console.log('ドキュメント');
console.log(document);

console.log(document.getElementsByTagName('button'));
console.log(document.getElementsByTagName('button')[0]);


console.log('---------');
console.log('イベント');
document.getElementsByTagName('button')[0].addEventListener('click', ()=> {
  window.alert('Hello World!');
});

