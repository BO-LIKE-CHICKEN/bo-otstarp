import React from 'react';

interface ButtonProps {
  label: string;
  onClick?: () => void;
}

const TestButton: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button type="button" onClick={onClick}>
      {label}
    </button>
  );
};

export default TestButton;
