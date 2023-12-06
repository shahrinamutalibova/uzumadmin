import React from 'react';
import './index.css';

function Loader() {
    return (
      <div className={'loader'}>
          <div className={'lds-ripple'}>
              <div></div>
              <div></div>
          </div>
      </div>
    );
}

export default Loader;