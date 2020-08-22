import React from 'react';
import Rating from '@material-ui/lab/Rating';

type CustomRatingType = {
  labels?: { [index: string]: string };
  name: string;
  value: number | null;
  disabled?: boolean;
  defaultValue?: number;
  precision: number;
  readOnly?: boolean;
  size?: 'large' | 'medium' | 'small';
  onChange: (event: React.ChangeEvent<{}>, value: number | null) => void;
  onChangeActive?: (event: React.ChangeEvent<{}>, value: number) => void;
  max?: number;
};

export default function CustomRating({
  labels,
  name,
  value,
  disabled,
  defaultValue,
  precision,
  readOnly,
  size,
  onChange,
  onChangeActive,
  max,
}: CustomRatingType) {
  return (
    <>
      <Rating
        name={name}
        value={value}
        defaultValue={defaultValue}
        precision={precision}
        readOnly={readOnly}
        size={size}
        onChange={onChange}
        onChangeActive={onChangeActive}
        max={max}
        disabled={disabled}
      />
    </>
  );
}
