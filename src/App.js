import { useState } from 'react';
import Numbers from './components/Numbers'

function App() {
  const [showNumbers, setShowNumbers] = useState(true);

  return (
    <>
      <button onClick={() => setShowNumbers(!showNumbers)}>Toggle Numbers Component</button>
      {showNumbers && <Numbers />}
    </>
  );
}

export default App;
