import { useState } from 'react';

const TextInput = () => {
  const [name, setName] = useState('');

  const handleName = (event) => {
    console.log("event: ", event.target.value);
    setName(event.target.value);
  }
/*  setNameの引数にprevStateを使うこともできる
 *  setName((prevState) => {
 *    console.log("prevState: ", prevState);
 *    return event.target.value;
 *  });
*/
  

  return (
    <input 
      // onChangeイベントが発火したら、eventが取れるのでこれをsetNameに渡しますよー
      onChange={(event) => handleName(event)} 
      type="text" 
      value={name} 
    />
  )
} 

export default TextInput;