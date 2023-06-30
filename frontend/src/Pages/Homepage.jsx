import React from 'react';

import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div className='heroContainer'>
      <div
        className='hero min-h-screen'
        styles="background-image: url('https://images.unsplash.com/photo-1610969524113-bae462bb3892?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGF0aGxldGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60');"
      >
        <div className='hero-overlay bg-opacity-60'></div>
        <div className='hero-content text-center text-neutral-content'>
          <div className='max-w-md'>
            <h1 className='mb-5 text-5xl font-bold'>NodeShark</h1>
            <p className='mb-5'>Best activewear in the US.</p>
            <Link
              to='/user'
              className='btn btn-primary'
            >
              <button className='btn btn-primary'>Get Started</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
