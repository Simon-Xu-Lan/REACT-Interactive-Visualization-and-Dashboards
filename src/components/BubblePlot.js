import React from 'react';
import Plotly from 'plotly.js';

function BubblePlot(props) {
  if (props.sample.length > 0) {
    var trace = {
      type: 'bubble',
      x: props.sample[0].otu_ids,
      y: props.sample[0].sample_values,
      mode: 'markers',
      marker: {
        size: props.sample[0].sample_values,
        color: props.sample[0].sample_values.map(
          (value) => `rgb(${value}, ${255 - value}, ${Math.random() * 255})`
        ),
      },
      text: props.sample[0].otu_labels,
    };
    var data = [trace];

    var layout = {
      title: `Samples ID ${props.sample[0].id}`,
      xaxis: { title: 'OTU ID' },
      yaxis: { title: 'Sample Value' },
      showlegend: false,
      height: 600,
      width: 1200,
    };

    Plotly.newPlot('bubble', data, layout);
  }

  return <div id="bubble"></div>;
}

export default BubblePlot;
