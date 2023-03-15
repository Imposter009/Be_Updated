import React, { Component } from 'react'
import WeatherItem from './WeatherItem';

export default class Weather extends Component {

  constructor() {
    super();
    this.state = {
      reports: []
    }
  }
  async componentDidMount() {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=lucknow&lang=en&appid=ba557d896ef43bc68215bc716d689923&units=metric`
    let data = await fetch(url); let parseData = await data.json();
    this.setState({ reports: parseData.weather })

  }

  render() {
    return (
      <div className='container my-4'>
        <h3>Weather is..</h3>
        <div className="row" >
          {/* <input type="search" onChange={(event) =>
            setcity = 'event'} /> */}
          {this.state.reports.map((element) => {
            return <div className="my-3 " key={element.id} >
              {/* <WeatherItem Region={element.name} latitude={element.coord.lat} longitude={element.coord.lon} temp={element.main.temp} min_temp={element.main.temp_min} max_temp={element.main.temp_max} /> */}
              <WeatherItem Region= {element.id} />
            </div>
          })}

        </div>
      </div>
    )
  }
}