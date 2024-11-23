import TitleByNamedFunc from './TitleByNamedFunc'; // default import
import {Title, addTax, getWild} from './index';    // named import: entry pointから読み込む

const Article05 = (props) => {
  const taxIncludedPrice = addTax(100);
  getWild();

  return (
    <div>
      <Title title="Title by export default." />
      <TitleByNamedFunc title="Title by export default used NamedFunc." />
      <p>価格（税抜き）: 100</p>
      <p>価格（税込み）: {taxIncludedPrice}</p>
      
      <>
        {/* 余談 コンポーネント化しなかったときの悪い例
          * 1行で返せるようなコンポーネントだったとしても、
          * 例えば画像と一緒に表示させるような変更が入った際に、
          * コードの可読性が大幅に下る!!!
          * 例↓         
        */}
        <div className="flex__row">
          <img src={'/logo192.png'} alt="logo" width={36} height={36} />
          <h2>{props.title}</h2> 
        </div>
        {/* ↑このように可読性が悪くなる。*/}
      </>
    </div> 
  )
};

export default Article05;