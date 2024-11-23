import './App.css';
import BlueButton from './react_kiso/02kai/blueButton';
import Tumbnail from   './react_kiso/02kai/Tumbnail';
import ButtonByClass from './react_kiso/04kai/ButtonByClass';
import ButtonByFunc from './react_kiso/04kai/ButtonByFunc';
import Article from './react_kiso/04kai/Article';

function App() {
  const authorName = 'torahack';
  const now = new Date();

  return (
    <>
      {/* 第2回 */}
      <div className='App'>
        <BlueButton />
        <Tumbnail />
      </div> 

      {/* 第4回 */}
      <div>
        <ButtonByClass hello="Hello by class." />
        <ButtonByFunc hello="Hello by func." />
        <Article 
          title="新・日本一わかりやすいReact入門【基礎編】"            // 文字列の場合は{}が要らない
          content={"今日のトピックはpropsのデータの受け渡しについて。"} // {}有りでも大丈夫。
          order={4}
          isPublished={true}
          author={authorName}
          updatedAt={now}
        />
        <Article 
          title="新・日本一わかりやすいReact入門【基礎編】"
          order={5}
          content={"今日のトピックはuseStateについて。"} 
          isPublished={false}
          author={authorName}
          updatedAt={now}
        />
        <Article 
          title="新・日本一わかりやすいReact入門【基礎編】"
          order={6}
          content={"今日のトピックはuseEffectのについて。"} 
          isPublished={true}
          author={authorName}
          updatedAt={now}
        />
      </div>
    </>
  );
}

export default App;
