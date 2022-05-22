import { useState, useEffect } from 'react';
import AdviceCard from './component/AdviceCard';

function App() {
  const [advice, setAdvice] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchRandomAdvice = () => {
    setLoading(true);
    fetch('https://api.adviceslip.com/advice', { cache: 'no-store' }).then(
      res =>
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
    <main className='bg-dark-blue w-full h-screen grid place-items-center p-4'>
      <AdviceCard
        advice={advice.advice}
        id={advice.id}
        onDiceClick={handleDiceClick}
        loading={loading}
      />
    </main>
  );
}

export default App;
