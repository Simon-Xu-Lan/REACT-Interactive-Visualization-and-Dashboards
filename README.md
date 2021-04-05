# Project introduction

This project React, Plotly.js, Bootstrap to build a dashborad webpage
The webpage is published at "https://simon-xu-lan.github.io/REACT-Interactive-Visualization-and-Dashboards/"

<img src="images/page.png" width="1000" alt="webpage"/>

# Code structure

## 1.Component Tree

- The following chart shows the structure of the component tree.
- App is the root component.
- DachboardContainer is rendered by App. it is a class component. Data is in the state. When the data in state change, it rerender/update its child components
- The following 5 components are children of DashboardContainer and are rendered by DashboardContainer. They are functional components.
  - Select, DemoInfo, BarPlot, GaugePlot, BubblePlot

<img src="images/React-Plotly.png" width="1000" alt="Component tree"/>

## 2. Flow Chart

<img src="images/React-Plotly-FlowChart.png" width="1000" alt="Component tree"/>