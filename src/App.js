import { useState } from 'react';

import Numbers from './components/Numbers'
import CleanupAndClosures from './components/CleanupAndClosures';

function App() {
  const [showNumbers, setShowNumbers] = useState(true);

  return (
    <>
      <button onClick={() => setShowNumbers(!showNumbers)}>Toggle Numbers Component</button>
      {showNumbers && <Numbers />}
      <CleanupAndClosures />
    </>
  );
}

export default App;
