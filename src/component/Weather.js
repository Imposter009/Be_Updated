import React, { Component } from 'react'
import WeatherItem from './WeatherItem';

export default class Weather extends Component {

  constructor() {
    super();
    this.state = {
      reports: [],
      resp: {}
    }
  }
  async componentDidMount() {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=lucknow&lang=en&appid=ba557d896ef43bc68215bc716d689923&units=metric`
    let data = await fetch(url); let parseData = await data.json();
    this.setState({ reports: parseData.weather, resp: parseData })
    console.log(this.state.resp);

  }

  render() {
    return (
      <>
        <div className='container  my-3'>
          <h1 className='p-3 bg-info bg-opacity-10 border border-info border-start-0 rounded-end'>Weather Forecast </h1>
          <div className="row" >
            {this.state.reports.map((element) => {
              return <div className="my-3 " key={element.id} >
                <WeatherItem name={this.state.resp.name}Region={this.state.resp.id} latitude={this.state.resp.coord.lat} longitude={this.state.resp.coord.lon} temp={this.state.resp.main.temp} min_temp={this.state.resp.main.temp_min} max_temp={this.state.resp.main.temp_max} humid={this.state.resp.main.humidity} press={this.state.resp.main.pressure} desc={this.state.resp.weather[0].main}/>
              </div>
            })}

          </div>
        </div>
      </>
    )
  }
}