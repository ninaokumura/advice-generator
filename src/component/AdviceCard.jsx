import React from 'react';
import { CubeSpinner } from 'react-spinners-kit';
import DiceIcon from '../images/icon-dice.svg?component';
import Divider from '../images/pattern-divider-desktop.svg?component';
import DividerMobile from '../images/pattern-divider-mobile.svg?component';

export default function AdviceCard(props) {
  return (
    <div className='max-w-[30rem] text-center text-white h-72 rounded-xl bg-dark-grayish-blue relative shadow-xl w-full'>
      <div className='p-4 min-h-[70%]'>
        <div className='p-5 text-neon-green'>ADVICE #{props.id}</div>
        <div className='font-[800] text-2xl grid place-items-center'>
          {props.advice && !props.loading ? (
            `"${props.advice}"`
          ) : (
            <div className='mt-8'>
              <CubeSpinner />
            </div>
          )}
        </div>
      </div>

      <div className='grid place-items-center'>
        <Divider className='hidden sm:block' />
        <DividerMobile className='sm:hidden' />
      </div>

      <div className='absolute -bottom-6 w-full'>
        <button
          onClick={props.onDiceClick}
          className={`
            h-14 w-14 rounded-full border transition-all 
            border-emerald-500 bg-neon-green
            shadow-button
            shadow-transparent hover:shadow-neon-green 
            hover:scale-110 grid place-items-center mx-auto
        `}
        >
          <DiceIcon />
        </button>
      </div>
    </div>
  );
}
