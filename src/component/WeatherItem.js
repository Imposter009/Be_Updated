import React, { Component } from 'react'

export default class WeatherItem extends Component {


    render() {
        let { Region, latitude, longitude, temp, humid, press, name, min_temp, max_temp, desc } = this.props;
        return (
            <div className='container my-1 '>
                <div >
                    <div className="card-body row my-2 ">
                        <h2 className="card-title text-center"><ins> {name} - {desc} today</ins></h2>
                        <div className='col '>
                            <img className='mx-auto d-block ' src="https://cdn.pixabay.com/photo/2017/08/21/21/25/cloudy-2667021__340.png" style={{ height: "250px", width: "250px" }} alt="" />
                        </div>
                        <div className='col my-3 '>
                            <h4 className="card-text text-right">Temperature of {name} is {temp} &#8451;</h4>
                            <h6>(Latitued ={latitude}, Longitude={longitude}) </h6>
                            <h6>Min temp is {min_temp}&#8451; and Max temp is {max_temp}&#8451;</h6>
                            <h6>Pressure is {press}</h6>
                            <h6>Humidity is {humid}.</h6>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
