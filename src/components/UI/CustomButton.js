import React from 'react';
import Button from '@material-ui/core/Button';

export default function CustomButton({ children, size, onClick, startIcon }) {
  return (
    <>
      <Button size={size} startIcon={startIcon} onClick={onClick}>
        {children}
      </Button>
    </>
  );
}
