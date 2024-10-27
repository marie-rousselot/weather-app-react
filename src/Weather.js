import React from "react";
import "./Weather.css";

export default function Weather(){
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input type="submit" value="Search" className="btn btn-primary" />
            </div>
          </div>
        </form>
        <h1>Perth</h1>
        <ul>
          <li>Saturday 22:26</li>
          <li>Clear</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <div className="clearfix">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                alt="Clear"
                className="float-left"
              ></img>
              <div className="float-left">
                <span className="temperature">16</span>
                <span className="unit">°C</span>
              </div>
            </div>
            <div className="col-6">
              <ul>
                <li>Precipitation: 0%</li>
                <li>Humidity: 72%</li>
                <li>Wind: 18 km/h</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
}