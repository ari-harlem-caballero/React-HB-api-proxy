import React from 'react';

export default function YelpList({ businessResult }) {
  return (
    <div>
      {
        businessResult.map((business, i) => 
          <div key={business + i} className='yelp-div'>
            <h3>{business.name}</h3>
            <div className='yelp-price'>
              <p>{business.price}</p>
              <p>{business.rating}</p>
            </div>
            <img src={business.image_url}/>
          </div>)
      }
    </div>
  );
}
