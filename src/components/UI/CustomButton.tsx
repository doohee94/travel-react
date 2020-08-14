import React from 'react';
import Button from '@material-ui/core/Button';

type CustomButtonType = {
  children: React.ReactNode;
  classes?: any;
  color?: 'default' | 'inherit' | 'primary' | 'secondary';
  disabled?: boolean;
  endIcon?: React.ReactNode;
  startIcon?: React.ReactNode;
  size?: 'large' | 'medium' | 'small';
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export default function CustomButton({
  children,
  classes,
  color,
  disabled,
  endIcon,
  startIcon,
  size,
  onClick,
}: CustomButtonType) {
  return (
    <>
      <Button
        onClick={onClick}
        classes={classes}
        color={color}
        disabled={disabled}
        startIcon={startIcon}
        endIcon={endIcon}
        size={size}
      >
        {children}
      </Button>
    </>
  );
}
