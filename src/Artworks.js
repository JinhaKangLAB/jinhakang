import React, { useState } from 'react';

function Artworks(){
    return(
      <div className="Artworks">
      <h1>Artworks</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-r">
          <img src="https://github.com/JinhaKangLAB/imagesources/blob/main/Emotional%20Marketing.png?raw=true" width="100%" />
           <h4> Emotional Marketing </h4>
           <p> 2019 Jun Art Gallery</p>
           </div>
          <div className="col-md-r">
           <h4> Audio Guide </h4>
           <p> 2019 Seoul National University</p>
           </div>
          <div className="col-md-r">
           <h4> A happening at MoMA </h4>
           <p> 2018 Museum of Modern Art</p>
           </div>
       </div>
      </div>
      </div>
    )
  }

  export default Artworks;