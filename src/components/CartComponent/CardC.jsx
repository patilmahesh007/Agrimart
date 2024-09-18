import React from 'react';
import './CardC.css';

function CardC({ CardOpen }) {
  return (
    <div className="CardC-body">
      <div className="CardC-body-blur"></div>

      <div className="CardC-container">
        <span>
          <img
            src="https://img.icons8.com/?size=64&id=2i5n7zNvArOt&format=png"
            onClick={() => CardOpen()}
            alt="close icon"
          />
        </span>
      </div>
    </div>
  );
}

export default CardC;
