import React from 'react';
import {Bar} from 'react-chartjs-2';


const BarChart = (props) => {
    return (
      <div>
        <h2>Price</h2>
        <Bar
        {...props}
        />
      </div>
    );
  };
  
  export default BarChart;