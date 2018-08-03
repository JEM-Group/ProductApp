import React from 'react';
import { Form, Input } from 'reactstrap';
import { Typeahead, Fragment, Control, FormGroup } from 'react-bootstrap-typeahead'


export const DropType = (props) => {
    return (
      <div>
      <Fragment>
      <Typeahead {...props}/>
      <FormGroup>
        <Control>
          {props.children}
        </Control>
      </FormGroup>
    </Fragment>
      </div>

    );
  };
