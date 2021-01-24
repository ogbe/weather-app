import React, { Component } from "react";
import Weather from "./Weather";
import ReactAnimatedWeather from "react-animated-weather";
import Skycons from "react-skycons";
// import { getIcon } from "./getIcon";

const API_KEY = "24bda32f4a5a419b5435d0a5baacf3d4"

// api.openweathermap.org/data/2.5/weather?q=London,uk


const defaults = {
    icon: "",
    color: 'goldenrod',
    size: 512,
    animate: true
};

const ICON_SET = {
    chancesleet: "snowy",
    chancesnow: "snowy",
    clear: "sunny",
    flurries: "snowy",
    fog: "cloudy",
    hazy: "cloudy",
    rain: "rainy",
    chancerain: "rainy",
    sleet: "snowy",
    snow: "snowy",
    chanceflurries: "snowy",
    tstorms: "stormy",
    chancetstorms: "stormy",
    sunny: "sunny",
    mostlysunny: "sunny",
    partlysunny: "sunny",
    partlycloudy: "cloudy",
    mostlycloudy: "cloudy",
    cloudy: "cloudy"
};

const SUPPORTED_LANGUAGES = [
    "AF", "AL", "AR", "HY", "AZ",
    "EU", "BY", "BU", "LI", "MY",
    "CA", "CN", "TW", "CR", "CZ",
    "DK", "DV", "NL", "EN", "EO",
    "ET", "FA", "FI", "FR", "FC",
    "GZ", "DL", "KA", "GR", "GU",
    "HT", "IL", "HI", "HU", "IS",
    "IO", "ID", "IR", "IT", "JP",
    "JW", "KM", "KR", "KU", "LA",
    "LV", "LT", "ND", "MK", "MT",
    "GM", "MI", "MR", "MN", "NO",
    "OC", "PS", "GN", "PL", "BR",
    "PA", "RO", "RU", "SR", "SK",
    "SL", "SP", "SI", "SW", "CH",
    "TL", "TT", "TH", "TR", "TK",
    "UA", "UZ", "VU", "CY", "SN",
    "JI", "YI"
];

function getIcon(icon) {
    return ICON_SET[icon];
}

class App extends Component {
    constructor() {
        super();
        this.state = {
            city: "",
            country: "",
            main: 0,
            maxTemp: 0,
            minTemp: 0,
            description: "",
            icon: "s"
        }
        this.convertToCelsius = this.convertToCelsius.bind(this);
    }

    // getWeather () {
    //     async () => {
    //         const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_KEY}`);
    
    //         const response = await api_call.json();
    
    //         console.log(response)
    //     }
    // } 
    
    componentDidMount () {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_KEY}`)
            .then(response => response.json())
            // .then(data => console.log(data))
            .then(data => this.setState({
                city: data.name,
                country: data.sys.country,
                main: this.convertToCelsius(data.main.temp,),
                maxTemp: this.convertToCelsius(data.main.temp_max),
                minTemp: this.convertToCelsius(data.main.temp_min),
                description: data.weather[0].description,
                icon: data.weather[0].id || defaults.icon

            }))
    }

    convertToCelsius (temp) {
        let celsius = Math.floor(temp - 273.15);
        return celsius;
    }

    
    render() {
        let today = this.state.icon;
        let icon = getIcon(today)
    
        return(
            <div className="App">
                <Weather props={this.state}/>
                <Skycons color="white" icon={getIcon(this.state.icon)} />
                {/* <ReactAnimatedWeather
                    icon={this.state.icon}
                /> */}
            </div>
        )
    }
}

export default App;