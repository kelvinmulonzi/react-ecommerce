import React from 'react';
import ReactDOM from 'react-dom';

const Portal = ({ children }) => {
  return ReactDOM.createPortal(
    <div className="portal-overlay">
      {children}
    </div>,
    document.getElementById('portal-root')
  );
};

export default Portal;
