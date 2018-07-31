import React from 'react';
import { Form, Input } from 'reactstrap';

// export const FormDrop = (props) => {
//     return (
//       <div>
//       <Form>
//         <Input placeholder="default" />
//         <Input type="select" {...props}>
//           {props.children}
//           {/* <option>Default Select</option> */}
//         </Input>
//       </Form>
//       </div>
//     );
//   };
export const FormDrop = (props) => {
    return (
      <div>
      <Form>
        <Input placeholder="default" />
        {props.children}
      </Form>
      </div>
    );
  };
