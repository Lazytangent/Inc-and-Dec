import { useState, useEffect } from 'react';

const CleanupAndClosures = () => {
  const [num, setNum] = useState(0);

  useEffect(() => {
    console.log('useEffect function', num);
    return () => {
      console.log('useEffect cleanup', num);
    }
  }, [num]);

  return (
    <div>
      <hr />
      {console.log('render')}
      <h1>CleanupAndClosures Num: {num}</h1>
      <button onClick={() => setNum((prevNum) => prevNum + 1)}>Inc</button>
      <button onClick={() => setNum((prevNum) => prevNum - 1)}>Dec</button>
    </div>
  );
};

export default CleanupAndClosures;
