import React from 'react';
import Paper from '@material-ui/core/Paper';

type CustomPaperType = {
  children: React.ReactNode | string | number;
  classes?: any;
  elevation?: number;
  square?: boolean;
  variant?: 'elevation' | 'outlined';
};

export default function CustomPaper({
  children,
  classes,
  elevation,
  square,
  variant,
}: CustomPaperType) {
  return (
    <>
      <Paper
        classes={classes}
        elevation={elevation}
        square={square}
        variant={variant}
      >
        {children}
      </Paper>
    </>
  );
}
