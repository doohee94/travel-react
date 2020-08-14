import React, { useState } from 'react';
import { Button, SelectBox } from '../components/UI';

const selectBoxValue = [
  { value: 'one', label: '1' },
  { value: 'two', label: '2' },
  { value: 'three', label: '3' },
  { value: 'four', label: '4' },
];

function Usage() {
  const onClick: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => void = () => {
    alert('test');
  };

  const [age, setAge] = useState('');

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setAge(event.target.value as string);
  };

  console.log(age);
  return (
    <>
      <h4>Button</h4>
      <Button size="small" onClick={onClick}>
        test
      </Button>

      <h4>selectBox</h4>
      <SelectBox values={selectBoxValue} onChange={handleChange} value={age} />
    </>
  );
}

export default Usage;
