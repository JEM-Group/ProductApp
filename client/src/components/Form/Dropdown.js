import React from 'react';
import { Form, Input } from 'reactstrap';


export const Dropdown = (props) => {
    return (
      <div>
        <Form>
        <Input placeholder="default" />
        <Input type="select">
            <option>{props.title}</option>
        </Input>
        </Form>

      </div>
    );
  };
