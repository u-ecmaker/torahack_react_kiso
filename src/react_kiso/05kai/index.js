// entry point: 慣例的にindex.jsという名前で作成
export {default as Title} from './Title';
//       ↑ defaultという名前のモジュールをTitleという名前でエクスポート
//         別にTitleという名前にしなくてもいい
export {addTax, getWild} from './helper';
