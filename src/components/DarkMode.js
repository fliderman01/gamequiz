import React from 'react';
import '../style.css';
import './darkMode.css';

export default function DarkMode(props) {
  return (
    <div>
      <label className="switch">
        <input
          type="checkbox"
          onClick={(e) => props.themeSwicher(e.target.checked)}
        />
        <span className="slider"></span>
      </label>
    </div>
  );
}
