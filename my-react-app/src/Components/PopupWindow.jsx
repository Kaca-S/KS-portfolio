import React from "react";
import './PopupWindow.css';

const PopupWindow = ({ name, description, techUsed, onClick }) => {
    return (
      <div className="popup-overlay">
        <div className="popup-window">
          <button onClick={onClick} className="close-btn">×</button>
          <h1>{name}</h1>
          <p><strong>Description:</strong> {description}</p>
          <p><strong>Tech Used:</strong> {techUsed}</p>
        </div>
      </div>
    );
};

export default PopupWindow;