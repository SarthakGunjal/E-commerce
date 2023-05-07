import React from 'react';
import './Show.css';
import { useNavigate } from 'react-router-dom';

function WithHeaderExample({key,img,title,description,price}) {

  const navigate = useNavigate();

  return (

    
      <div  onClick={() => navigate('/' + title)} >
      <div className="horizontal-card">
        <div className="card-image">
          <img src={img} alt={title} />
        </div>
        <div className="card-details">
          <h3 className="card-title">{title}</h3>
          <p className="card-description">{description}</p>
        </div>
        <div className="card-price">
          <p>{price}</p>
        </div>
      </div>

      </div>
    // </Link>
  );
}
  

export default WithHeaderExample;