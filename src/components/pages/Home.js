import React from 'react';
import './home.css';

const Home = () => {
  const quote = 'Without mathematics, there’s nothing you can do. Everything around you is mathematics. Everything around you is numbers.';
  const small = 'Shakuntala Devi, Indian writer and mental calculator';
  return (
    <div className="content">
      <div className="quote">
        <h3>{quote}</h3>
        <i>{small}</i>
      </div>
    </div>
  );
};

export default Home;
