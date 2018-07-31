import React from 'react';
import {Bar} from 'react-chartjs-2';


const BarChart = (props) => {
    return (
      <div>
        <h2>Bar Example (custom size)</h2>
        <Bar
        {...props}
        />
      </div>
    );
  };
  
  export default BarChart;