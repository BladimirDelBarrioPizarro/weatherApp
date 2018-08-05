import React from 'react';
import PropTypes from 'prop-types';
import './../style/style.css';

const Location = ({city}) => {
    
    return(
      <div className='locationCont'>
          <h1>{city}</h1>
     </div>
    );
};

Location.PropTypes = {
    city:PropTypes.string.isRequired,
}

export default Location;