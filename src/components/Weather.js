import React from "react";
import ReactAnimatedWeather from "react-animated-weather";
import Skycons from "react-skycons"

const defaults = {
    icon: 'CLEAR_DAY',
    color: 'goldenrod',
    size: 50,
    animate: true
};

const minAndMax = (min, max) => {
    return(
        <h3>
            <span>{min}&deg;</span>
            <span>{max}&deg;</span>
        </h3>
    )
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              

const Weather = (props) => {
    console.log(props)
    return(
        <div className="container">
            <h1 className="py-5">{props.props.city}, {props.props.country}</h1>
            <h2>{props.props.icon}</h2>
            <ReactAnimatedWeather
                icon={defaults.icon}
                size={defaults.size}
                color={defaults.color}
                animate={defaults.animate}
            />

            <h1>{props.props.main}&deg;</h1>

            {/* showmax and min temps */}
            {minAndMax(props.props.minTemp, props.props.maxTemp)}

            <h4 className="description">{props.props.description}</h4>
        </div>
    )
}

export default Weather;