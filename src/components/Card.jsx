import React from 'react';
import "../index.css"
import Left from './LeftCardSide/Left';
import Footer from './Footer';
import Right from './RightCardSide/Right';

const Card = () => {
    return (
      <div className="flex bg-white min-h-[680px] max-w-[990px] w-full mt-4 rounded-[24px] shadow-md overflow-hidden">
          <Left></Left> 
          <Right></Right>      
      </div>
    );
  };
  
  export default Card;