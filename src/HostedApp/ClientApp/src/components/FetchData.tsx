import React, { Component } from 'react';
import Moment from 'react-moment'

interface FetchDataState {
  forecasts: Array<forecastData>;
  loading:boolean;
}

interface forecastData {
  index:number;
  date: Date;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}

export class FetchData extends Component<any,FetchDataState> {
  constructor(props: any) {
    super(props);
    this.state = { forecasts: [], loading: true };
  }

  componentDidMount() {
    this.populateWeatherData();
  }
  
  renderForecastsTable() {
    return (
      <table className='table table-striped' aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>Date</th>
            <th>Temp. (C)</th>
            <th>Temp. (F)</th>
            <th>Summary</th>
          </tr>
        </thead>
        <tbody>
          {this.state.forecasts.map(forecast =>
            <tr key={forecast.index}>
              <td><Moment format="YYYY/MM/DD">{forecast.date}</Moment></td>
              <td>{forecast.temperatureC}</td>
              <td>{forecast.temperatureF}</td>
              <td>{forecast.summary}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : this.renderForecastsTable();

    return (
      <div>
        <h1 id="tabelLabel" >Weather forecast</h1>
        <p>This component demonstrates fetching data from the server.</p>
        {contents}
      </div>
    );
  }

  async populateWeatherData() {
    const response = await fetch('weatherforecast');
    const data = await response.json();
    let localIndex = 0;
    var gridData = data.map((item: any)=>{
      item.index =localIndex++; 
      return item;
    });
    this.setState({ forecasts: gridData, loading: false });
  }
}
