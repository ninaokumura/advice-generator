import { useState, useEffect } from 'react';
import Card from './component/Card';

function App() {
  const [advice, setAdvice] = useState({});

  useEffect(() => {
    fetch('https://api.adviceslip.com/advice').then(res =>
      res
        .json()
        .then(data => setAdvice(data.slip))
        .catch(err => {
          console.log(err.message);
        })
    );
  }, []);

  return (
    <div className='w-full font-mono'>
      <main className='bg-dark-blue h-screen grid place-items-center'>
        <Card advice={advice.advice} id={advice.id} />
      </main>
    </div>
  );
}

export default App;
