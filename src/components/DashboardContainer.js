import React from 'react';
import Container from './Container';
import Row from './Row';
import Col from './Col';
import Jumbotron from './Jumbotron';
import Select from './Select';
import * as d3 from 'd3';
import BarPlot from './BarPlot';
import BubblePlot from './BubblePlot';
import GaugePlot from './GaugePlot';
import DemoInfo from './DemoInfo';
import data from '../data/samples';
// import axios from 'axios';
// import Plotly from 'plotly.js';

class DashboardContainer extends React.Component {
  state = {
    selectedSample: [],
    metadata: {},
    wfreq: '',
    selectId: '',
    names: [],
  };

  componentDidMount() {
    this.processSamples('940');
    console.log('did', this.state.metadata);
  }

  searchSamples = (query) => {
    // Server path vs. filesystem path
    // d3.json send a request to the path given to it.
    // So make sure the file is served by the server, give it a server path, not a filesystem path
    // Put the file in the public folder and use the path "/samples.json", instead of "samples.json" which is filesystem path
    // Or put the file in public/data folder and use the path"/data/samples.json"
    // const URL = 'https://belly-biodiversity-samples.herokuapp.com/api/samples';
    // d3.json('https://belly-biodiversity-samples.herokuapp.com/api/samples')
    // axios
    //   .get(URL)
    d3.json('../data/samples.json')
      .then((data) => {
        let selectedSample = data.samples.filter((d) => d.id === query);
        let metadata = data.metadata.filter((d) => d.id === parseInt(query));
        let wfreq = metadata[0].wfreq;
        let names = data.names;
        this.setState({
          selectedSample: selectedSample,
          metadata: metadata[0],
          wfreq: wfreq,
          names: names,
        });
      })
      .catch((error) => console.log(error));
  };

  processSamples = (query) => {
    let selectedSample = data.samples.filter((d) => d.id === query);
    let metadata = data.metadata.filter((d) => d.id === parseInt(query));
    let wfreq = metadata[0].wfreq;
    let names = data.names;
    this.setState({
      selectedSample: selectedSample,
      metadata: metadata[0],
      wfreq: wfreq,
      names: names,
    });
  };

  handleSelectChange = (event) => {
    this.setState({
      selectId: event.target.value,
    });
    this.processSamples(event.target.value);
  };

  render() {
    return (
      <Container>
        <Row>
          <Jumbotron />
        </Row>
        <Row>
          <Col size="md-3">
            <Select
              value={this.state.selectId}
              handleSelectChange={this.handleSelectChange}
              options={this.state.names}
              sample={this.state.selectedSample}
            />
            <DemoInfo metadata={this.state.metadata} />
          </Col>

          <Col size="md-4">
            <BarPlot sample={this.state.selectedSample} />
          </Col>
          <Col size="md-5">
            <GaugePlot wfreq={this.state.wfreq} />
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <BubblePlot sample={this.state.selectedSample} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default DashboardContainer;
