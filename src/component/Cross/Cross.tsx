import React from 'react';

export const Cross : React.FC = () => {
  return (
    <svg viewBox="10 10 35 40">
      <path className="close-x" d="M 15,15 L 40,40 M 40,15 L 15,40" />
    </svg>
  );
};
