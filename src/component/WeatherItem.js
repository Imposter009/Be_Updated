import React, { Component } from 'react'

export default class WeatherItem extends Component {


    render() {
        let { Region, latitude, longitude, temp, min_temp, max_temp } = this.props;
        return (
            <div className='container my-3'>
                <div className="card" style={{ width: "18rem" }}>
                    <p className="card-title">{Region}..</p>
                    <p className="card-text">Weather of location {latitude}, {longitude} at  is {temp} and min temp is {min_temp} and max temp is {max_temp} </p>

                </div>
            </div>

        )
    }
}
