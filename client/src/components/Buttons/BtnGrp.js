import React from 'react';
import { Button, ButtonGroup } from 'reactstrap';

export default class BtnGrp extends React.Component {
  render() {
    return (
      <div>
        <Button outline color="primary">primary</Button>{' '}
        <Button outline color="secondary">secondary</Button>{' '}
        <Button outline color="success">success</Button>{' '}
        <Button outline color="info">info</Button>{' '}
        <Button outline color="warning">warning</Button>{' '}
        <Button outline color="danger">danger</Button>
      </div>
    );
  }
}


// const Example = (props) => {
//   return (
//     <div>
//       <Card className="text-center">
//         <CardBody>
//           <CardTitle> {props.title} </CardTitle>
//           <CardSubtitle>{props.subtitle}</CardSubtitle>
//         </CardBody>
//       </Card>
//     </div>
//   );
// };

// export default Example;
