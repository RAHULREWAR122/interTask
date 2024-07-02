import React from 'react';

const Score = ({  score, total }) => {
  return (<div className='h-full bg-slate-400 w-full flex justify-center items-center text-white'>
    <div className="text-center ">
      <h2 className="text-3xl">Your Score</h2>
      <p className="text-2xl">{score} / {total}</p>
      <br /><br />
      <a href='/' className='py-3 px-5 border-2 bg-green-500 mt-16 text-white rounded-lg hover:bg-green-700 duration-100'>Try Again</a>
    </div>
    </div>
  );
};

export default Score;
