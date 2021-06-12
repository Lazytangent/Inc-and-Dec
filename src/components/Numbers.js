import { useState, useEffect } from 'react';

const Numbers = () => {
  const [num, setNum] = useState(0);
  const [anotherNum, setAnotherNum] = useState(0);

  useEffect(() => {
    console.log('useEffect function with empty dependency array');
    return () => {
      console.log('useEffect cleanup with empty dependency array');
    }
  }, []);

  useEffect(() => {
    console.log('useEffect function num', num);
    return function () {
      console.log('useEffect cleanup num', num);
    }
  }, [num]);

  useEffect(() => {
    console.log('useEffect function anotherNum', anotherNum);
    return function () {
      console.log('useEffect cleanup anotherNum', anotherNum);
    }
  }, [anotherNum]);

  return (
    <div>
      <h1>Num: {num}</h1>
      <button onClick={() => setNum((prevNum) => prevNum + 1)}>Inc Num</button>
      <button onClick={() => setNum((prevNum) => prevNum - 1)}>Dec Num</button>
      <hr />
      <h1>AnotherNum: {anotherNum}</h1>
      <button onClick={() => setAnotherNum((prevNum) => prevNum + 1)}>Inc AnotherNum</button>
      <button onClick={() => setAnotherNum((prevNum) => prevNum - 1)}>Dec AnotherNum</button>
    </div>
  );
};

export default Numbers;
