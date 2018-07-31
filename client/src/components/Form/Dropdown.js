import React from 'react';
import { FormGroup , Input } from 'reactstrap';

//WORKING 1
// export const Dropdown = ({children}) => {
//     return (
//       <div>
//         <Form>
//         <Input placeholder="default" />
//         <Input type="select">
//           {children}
//         </Input>
//         </Form>

//       </div>
//     );
//   };
export const Dropdown = (props) => {
    return (
      <div>
        <FormGroup >
        <Input type="select" {...props}>
          {props.children}
        </Input>
        </FormGroup >

      </div>
    );
  };
