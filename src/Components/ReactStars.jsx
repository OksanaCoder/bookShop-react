import React, { Component } from 'react'

import ReactStars from "react-rating-stars-component";



 const ratingChanged = (newRating) => {
 
        return (
        <ReactStars
          count={5}
          onChange={ratingChanged}
          size={14}
          color2={"#ffd700"}
        />
        )
    
        
  };

  export default ratingChanged
   
  