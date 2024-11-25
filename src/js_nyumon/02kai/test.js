const torahack = 'torahack';
const charahack = 'charahack';
const regex = RegExp('tora*');

console.log(regex.test(torahack));     // true
console.log(regex.test(charahack));    // false
console.log(/chara*/.test(charahack)); // true


// 実行コマンド: node --experimental-modules src/js_nyumon/02kai/test.js
