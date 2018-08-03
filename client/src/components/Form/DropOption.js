import React from 'react';
import { Form, Input } from 'reactstrap';


export const DropOption = (props) => {
    return (
    <option {...props}>
      {props.children}
    </option>
    );
  };


  