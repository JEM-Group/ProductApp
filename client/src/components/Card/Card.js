import React from 'react';
import { Card, CardBody, Button, CardTitle, CardText, CardImg } from 'reactstrap';

const imgContStyle = {
  height: '200px', 
  width: '400px', 
  textAlign: 'center',
  overflow: 'hidden',
  position: 'relative',
  // bottom: '120px',
  // left: '25px'
}

const Example = (props) => {
  return (
    <div>
      {/* <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card Title</CardTitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <CardText>
            <small className="text-muted">Last updated 3 mins ago</small>
          </CardText>
        </CardBody>
      </Card> */}
      <Card className="center-block">
        <CardBody {...props} >
          <CardTitle>{props.title}</CardTitle>
          <CardText>{props.cardtext}</CardText>
          <CardText>
            <small className="text-muted"></small>
          </CardText>
        </CardBody>
        <CardImg className="img-fluid" src={props.img} alt="Card image cap" style={imgContStyle} />
      </Card>
    </div>
  );
};
  
  export default Example;

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