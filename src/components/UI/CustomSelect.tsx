import React from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

type CustomSelectType = {
  classes?: any;
  onChange: (
    event: React.ChangeEvent<{
      name?: string | undefined;
      value: unknown;
    }>,
    child: React.ReactNode,
  ) => void;
  values: { value: string | number; label: string | number }[];
  value: any;
  placeholder?: string;
  displayEmpty?: boolean;
};

export default function CustomSelect({
  values,
  onChange,
  classes,
  value,
  placeholder,
  displayEmpty,
}: CustomSelectType) {
  return (
    <>
      <Select onChange={onChange} value={value} displayEmpty={displayEmpty}>
        {placeholder && (
          <MenuItem value="" disabled>
            {placeholder}
          </MenuItem>
        )}

        {values &&
          values.map((v, index) => {
            return (
              <MenuItem key={index} value={v.value}>
                {v.label}
              </MenuItem>
            );
          })}
      </Select>
    </>
  );
}
