import React from 'react';
import Plotly from 'plotly.js';
// import Plot from 'react-plotly.js';

function BarPlot(props) {
  // The initial value of props.sample is [] becasue the initial value of Dashboard state.selected sample is []
  // The Dashboard state.selectedSample is updated to "{id: "940", otu_ids: Array(80), otu_labels: Array(8…}" by the mothod componentDidMount after Dashboard component being rendered
  // When the component BarPlot is first rendered, the props.sample is [], there would be an error "otu_ids of undefined" without "if (props.sample.length > 0)"
  if (props.sample.length > 0) {
    var data = [
      {
        type: 'bar',
        y: props.sample[0].otu_ids
          .slice(0, 10)
          .map((id) => 'OTU ' + id)
          .reverse(),
        x: props.sample[0].sample_values.slice(0, 10).reverse(),
        orientation: 'h',
      },
    ];

    var layout = {
      yaxis: { title: 'OTU ID' },
      xaxis: { title: 'Sample Value' },
      showlegend: false,
      height: 500,
      width: 300,
    };
    Plotly.newPlot('bar', data, layout);
  }

  return <div id="bar"></div>;
}

export default BarPlot;
