import React from 'react';
import { Button } from '../components/UI';

function Usage() {
  const onClick = () => {
    alert('test');
  };

  return (
    <>
      <Button onClick={onClick}>test</Button>
    </>
  );
}

export default Usage;
