import React from 'react';
import { Button } from 'reactstrap';


export const BtnLrg = (props) => {
  return (
    <Button {...props} color="primary">
     {props.children}
    </Button>
  );
};