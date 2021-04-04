import React from 'react';
import Plotly from 'plotly.js';

function GaugePlot(props) {
  if (props.wfreq !== '') {
    var numbers = Array.from(Array(10).keys());
    var steps = numbers.map((num) => {
      return {
        range: [num, num + 1],
        color: `rgb(${Math.random() * 255},${Math.random() * 255}, ${
          Math.random() * 255
        } )`,
        text: `${num}-${num + 1}`,
      };
    });
    // Create a gauge chart
    var data = [
      {
        type: 'indicator',
        mode: 'gauge+number',
        value: props.wfreq,
        title: {
          text: 'Belly Button Washing Frequency',
          font: { size: 24 },
        },
        gauge: {
          axis: { range: [null, 9] },
          steps: steps,
        },
        bar: { color: 'darkblue' },
      },
    ];

    Plotly.newPlot('gauge', data);
  }

  return <div id="gauge"></div>;
}

export default GaugePlot;
