import React, { useState } from 'react';
import { Button, SelectBox, Grid, Paper, Rating } from '../components/UI';

const selectBoxValue = [
  { value: 'one', label: '1' },
  { value: 'two', label: '2' },
  { value: 'three', label: '3' },
  { value: 'four', label: '4' },
];

const RatingLabels: { [index: string]: string } = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

function Usage() {
  const onClick: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => void = () => {
    alert('test');
  };

  //select box
  const [age, setAge] = useState('');
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setAge(event.target.value as string);
  };

  //rating
  const [ratingValue, setRatingValue] = useState<number | null>(0);
  const [ratingHover, setRatingHover] = useState(-1);

  const handleRatingChange: (
    event: React.ChangeEvent<{}>,
    value: number | null,
  ) => void = (e, newValue) => {
    setRatingValue(newValue);
  };

  const handleRatingChangeActive: (
    event: React.ChangeEvent<{}>,
    value: number,
  ) => void = (e, newValue) => {
    setRatingHover(newValue);
  };
  return (
    <>
      <h4>Button</h4>
      <Button size="small" onClick={onClick}>
        test
      </Button>

      <h4>selectBox</h4>
      <SelectBox
        values={selectBoxValue}
        onChange={handleChange}
        value={age}
        // placeholder={'test'}
      />

      <h4>Gird</h4>
      <Grid container={true} spacing={1}>
        <Grid item={true} xs={3}>
          <Paper elevation={13}>test 1</Paper>
        </Grid>
        <Grid item={true} xs={3}>
          <Paper elevation={1}>test 2</Paper>
        </Grid>
      </Grid>

      <h4>Rating</h4>
      <Rating
        labels={RatingLabels}
        name={'test'}
        value={ratingValue}
        onChange={handleRatingChange}
        onChangeActive={handleRatingChangeActive}
        precision={0.5}
        defaultValue={0}
      />
      <div>
        {ratingValue !== null &&
          RatingLabels[ratingHover !== -1 ? ratingHover : ratingValue]}
      </div>
    </>
  );
}

export default Usage;
