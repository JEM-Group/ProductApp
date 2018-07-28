import React from "react";
import { Jumbotron, Button } from 'reactstrap';
import "./jumbotron.css";

const Jumbo = (props) => {
  return (
    <div className="jumboStyle">
      <Jumbotron className="jumboStyle">
        <h1 className="display-3 text-center jumboStyle">{props.head}</h1>
        <p className="lead">{props.level1}</p>
        <hr className="jumboStyle" />
        <p>{props.level2}</p>
        <p className="lead">
          <Button color="primary">{props.jumbobtn}</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default Jumbo;










// const Jumbotron = ({ children }) => (
//   <div
//     style={{ height: 100, clear: "both", paddingTop: 20, textAlign: "center" }}
//     className="jumbotron"
//   >
//     {children}
//   </div>
// );

// export default Jumbotron;
