import React from 'react';

const CustomButton = ({ text, onClick, color, style }) => {
  const buttonStyle = {
    backgroundColor: color,
    border: 'none',
    color: '#fff',
    padding: '10px 50px',
    borderRadius: '12px',
    cursor: 'pointer',
    fontSize: '16px',
    boxShadow:"6px 6px 4px 0 rgba(0, 0, 0, 0.25)",
    ...style
  };

  return (
    <button onClick={onClick} style={buttonStyle}>
      {text}
    </button>
  );
};

export default CustomButton;
