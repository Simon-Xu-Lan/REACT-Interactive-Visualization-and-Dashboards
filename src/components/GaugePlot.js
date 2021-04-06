import React from 'react';
import Plotly from 'plotly.js';

function GaugePlot(props) {
  if (props.wfreq !== '') {
    var numbers = Array.from(Array(10).keys());
    let trace = {
      type: 'pie',
      showlegend: false,
      hole: 0.4,
      rotation: 90,
      // create an array of [20, 20, 20, 20, 20, 20, 20, 20, 20, 180]
      values: numbers.map((num) => (num < 9 ? 180 / 9 : 180)),
      // create an array of ["0-1", "1-2", "2-3", "3-4", "4-5", "5-6", "6-7", "7-8", "8-9", " "]
      labels: numbers.map((num) => (num === 9 ? ' ' : `${num}-${num + 1}`)),
      direction: 'clockwise',
      textinfo: 'label',
      textposition: 'inside',
      marker: {
        // Create an array, the first 9 are random colors, the last one is white color
        colors: numbers.map((num) =>
          num < 9
            ? `rgb(${Math.random() * 255},${Math.random() * 255}, ${
                Math.random() * 255
              } )`
            : 'rgb(255, 255, 255)'
        ),
        labels: numbers.map((num) => (num === 9 ? ' ' : `${num}-${num + 1}`)),
        hoverinfo: 'label',
      },
      hoverinfo: 'skip',
    };

    var gaugeLayout = {
      title: '<b>Belly Button Washing Frequency</b><br>Scrubs per week',
      shapes: [
        {
          type: 'path',
          path: pathTriangle(
            0.5,
            0.5,
            0.25,
            props.wfreq * Math.PI * (20 / 180)
          ),
          fillcolor: 'red',
          line: {
            color: 'red',
          },
        },
      ],
      xaxis: {
        zeroline: false,
        showticklabels: false,
        showgrid: false,
        range: [0, 9],
        // fixedrange: true,
      },
      yaxis: {
        zeroline: false,
        showticklabels: false,
        showgrid: false,
        range: [0, 11],
        fixedrange: true,
      },
    };
    let data = [trace];

    Plotly.newPlot('gauge', data, gaugeLayout);
  }

  return <div id="gauge"></div>;
}

// triangle
function pathTriangle(xD, yD, h, rotation) {
  // x, y: the middle point of triangle needle base.
  // h: the hight of triangle, the length of AD.
  // rotation: The degree of needle

  // A,B,C is three points of triangle, the line BC is base, BC = 2w
  // D is the middle point of base. BD = CD = w. The coordinates of D is (x, y)
  // (xA, yB) is point A, (xB, yB) is point B, (xC, yC) is point C

  // To calculate coordinates of A,B,C
  // Assume the angle <BAC = 10 degree
  const pi = Math.PI;
  const degreeBAC = pi / 36;
  let degreeADF = -(rotation <= pi / 2 ? rotation : pi - rotation);
  let degreeCDE = pi / 2 - degreeADF;
  let lengthCD = h * Math.tan(degreeBAC / 2);
  let lengthCE = lengthCD * Math.sin(degreeCDE);
  let lengthDE = lengthCD * Math.cos(degreeCDE);
  let lengthAF = h * Math.sin(degreeADF);
  let lengthDF = h * Math.cos(degreeADF);
  //

  let xA = rotation <= Math.PI / 2 ? xD - lengthDF : xD + lengthDF;
  let yA = yD - lengthAF;
  let xB = xD - lengthDE;
  let yB = rotation <= Math.PI / 2 ? yD + lengthCE : yD - lengthCE;
  let xC = xD + lengthDE;
  let yC = rotation <= Math.PI / 2 ? yD - lengthCE : yD + lengthCE;

  let path = `M ${xB} ${yB} L${xA} ${yA} L${xC} ${yC} Z`;

  return path;
}

export default GaugePlot;
