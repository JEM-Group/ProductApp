import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

// const Card = () => (
//   <div className="card">
//     <div className="card-header">
//       <h3 className="card-title">Non eu sit duis adipisicing esse incididunt ad proident.</h3>
//     </div>
//     <div className="card-body">
//       <p className="card-text">
//         Aliquip dolore commodo nostrud minim. Cillum do enim non ullamco. Commodo magna eu ex mollit
//         sunt amet fugiat. In irure eu enim id ea sit nostrud incididunt ad adipisicing.Aliquip
//         dolore commodo nostrud minim. Cillum do enim non ullamco. Commodo magna eu ex mollit sunt
//         amet fugiat. In irure eu enim id ea sit nostrud incididunt ad adipisicing.
//       </p>
//     </div>
//   </div>
// );

// export default Card;


const Example = (props) => {
  return (
    <div>
      <Card className="text-center">
        <CardBody>
          <CardTitle> {props.title} </CardTitle>
          <CardSubtitle>{props.subtitle}</CardSubtitle>
        </CardBody>
      </Card>
    </div>
  );
};

export default Example;

// const Example = ({ children }) => {
//   return (
//     <div>
//       <Card>
//         {/* <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" /> */}
//         <CardBody>
//           <CardTitle> {children} </CardTitle>
//           <CardSubtitle>Card subtitle</CardSubtitle>
//           <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
//           <Button>Button</Button>
//         </CardBody>
//       </Card>
//     </div>
//   );
// };

// export default Example;