import React from 'react';

export default function Card(props) {
  return (
    <div className='w-[30rem] text-center text-white h-72 rounded-xl bg-dark-grayish-blue relative shadow-xl'>
      <div className='p-4'>
        <div className='p-4 text-neon-green'>ADVICE #{props.id}</div>
        <div className='font-[800] text-2xl'>{`"${props.advice}"`}</div>
      </div>
      <div className='absolute -bottom-6 w-full'>
        <button
          className={`
            h-14 w-14 rounded-full border transition-all 
            border-emerald-500 bg-neon-green
            shadow-button
            shadow-transparent hover:shadow-neon-green 
            hover:scale-110 
        `}
        >
          R
        </button>
      </div>
    </div>
  );
}
