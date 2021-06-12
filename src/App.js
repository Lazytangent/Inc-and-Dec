import { useState, useEffect } from 'react';

function App() {
  const [num, setNum] = useState(0);

  useEffect(() => {
    console.log('useEffect function', num);
    return function () {
      console.log('useEffect cleanup', num);
    }
  }, [num]);

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={() => setNum((prevNum) => prevNum + 1)}>Inc</button>
      <button onClick={() => setNum((prevNum) => prevNum - 1)}>Dec</button>
    </div>
  );
}

export default App;
