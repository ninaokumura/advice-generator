import { useState, useEffect } from 'react';
import { CubeSpinner } from 'react-spinners-kit';

import AdviceCard from './component/AdviceCard';

function App() {
  const [advice, setAdvice] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchRandomAdvice = () => {
    setLoading(true);
    fetch('https://api.adviceslip.com/advice').then(res =>
      res.json().then(data => {
        setAdvice(data.slip);
        setLoading(false);
      })
    );
  };

  function handleDiceClick() {
    fetchRandomAdvice();
  }

  useEffect(fetchRandomAdvice, []);

  return (
    <div className='w-full font-mono'>
      <main className='bg-dark-blue h-screen grid place-items-center p-4'>
        <AdviceCard
          advice={advice.advice}
          id={advice.id}
          onDiceClick={handleDiceClick}
          loading={loading}
        />
      </main>
    </div>
  );
}

export default App;
