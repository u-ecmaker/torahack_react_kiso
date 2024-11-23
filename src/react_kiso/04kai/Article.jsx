//import React from 'react'; //←v17移行で不要になった
const Article = (props) => {
  return ( 
  <div>
    <h2>こんにちは</h2> 

    {props.isPublished ?  
      <>
        <h2>
          {props.title}
          第{props.order}回
        </h2>

        <p>{props.content}</p>
        <p>著者：{props.author}</p>
        <p>更新日：{props.updatedAt.toString()}</p>
      </>
      : 'Not Published'}
    </div>
  )
};

export default Article;

/*
 * propsの単語の意味　英英辞典　英和辞典
 * 
 * 「props」という単語は、主に以下のような意味を持ちます。
 * 英英辞典の定義
 * Props: Short for "properties," props are a mechanism for passing data and event handlers down to child components in React. They allow components to be dynamic and reusable by providing them with the necessary data.
 * 英和辞典の定義
 * Props（プロップス）: Reactにおける「プロパティ」の略で、コンポーネントにデータやイベントハンドラを渡すための仕組み。これにより、コンポーネントは動的で再利用可能になります。
 * このように、Reactの文脈では「props」はコンポーネント間でデータをやり取りするための重要な要素です。
 * properties のpropsの単語の意味　英英辞典　英和辞典
 * 
 * 英英辞典の定義
 * Properties: Attributes or characteristics of an object, often used in programming to describe the data associated with an object or component. In the context of React, properties (or props) are used to pass data and configuration to components.
 * 英和辞典の定義
 * Properties（プロパティ）: オブジェクトの属性や特性を指し、プログラミングにおいてはオブジェクトやコンポーネントに関連付けられたデータを説明するために使用される。Reactの文脈では、プロパティ（またはプロップス）はコンポーネントにデータや設定を渡すために使われる。
 * このように、「properties」はオブジェクトの特性を示す重要な概念です。
*/