import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

type CustomGridType = {
  children: React.ReactNode;
  container?: boolean;
  alignContent?:
    | 'stretch'
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around';
  alignItems?: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline';
  classes?: any;
  item?: boolean;
  justify?:
    | 'flex-start'
    | 'center'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  lg?: false | 'auto' | true | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  md?: false | 'auto' | true | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  spacing?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  xl?: false | 'auto' | true | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  xs?: false | 'auto' | true | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 10,
    },
  }),
);

export default function CustomGrid({
  children,
  alignContent,
  alignItems,
  container,
  item,
  justify,
  lg,
  md,
  spacing,
  xl,
  xs,
}: CustomGridType) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        alignContent={alignContent}
        alignItems={alignItems}
        container={container}
        item={item}
        justify={justify}
        lg={lg}
        md={md}
        spacing={spacing}
        xl={xl}
        xs={xs}
      >
        {children}
      </Grid>
    </div>
  );
}
