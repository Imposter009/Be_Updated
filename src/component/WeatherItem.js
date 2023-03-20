import React, { Component } from 'react'

export default class WeatherItem extends Component {


    render() {
        let { Region, latitude, longitude, temp, humid, press, name, min_temp, max_temp, desc } = this.props;
        return (
            <div className='container my-3'>
                <div>
                    <p className="card-title ">{name} - {desc} today</p>
                    <p className="card-text">Temperature of "{name}" (Latitued ={latitude}, Longitude={longitude}) is {temp}( min temp is {min_temp} and max temp is {max_temp}), Pressure is {press} and Humidity is {humid}.</p>
                </div>
            </div>

        )
    }
}
