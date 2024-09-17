import React from 'react';  

const PromoCard = ({ title, discount, description }) => {  
  return (  
    <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md">  
      <h2 className="text-xl font-bold">{title}</h2>  
      <p className="text-lg">{discount}</p>  
      <p className="text-sm">{description}</p>  
    </div>  
  );  
};  

export default PromoCard;