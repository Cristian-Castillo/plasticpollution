import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from "react-simple-maps";


function Infographics(props){
    return  <div className= "infoContainer">
    <iframe src="https://ourworldindata.org/grapher/global-plastics-production" className="infograph"></iframe>
    <div className="infoTextContainer">
      <h3 className="titleforinfo">Plastic Production</h3>
      <b></b>
      <p className="parforinfo"> We produce about 300 million tons of plastic per year. 17.6 billion pounds of plastic leaks into the marine environment from land-based sources every year</p>
      </div>
    </div>;
}

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const markers = [
  { markerOffset: -30, name: "Apex Regional", coordinates: [-115.1398, 36.1699] }, 
  { markerOffset: 15, name: "Bordo Poniente", coordinates: [-99.1332, 19.4326] },
  { markerOffset: 15, name: "Laogang", coordinates: [121.4737, 31.2304] },
  { markerOffset: 15, name: "Malagrotta", coordinates: [12.4964, 41.9028] },
  { markerOffset: 15, name: "Puente Hills", coordinates: [-118.2437, 34.0522] },
  { markerOffset: -30, name: "Sudokwan", coordinates: [126.7052, 37.4563] },
  { markerOffset: -30, name: "Delhi Landfills", coordinates: [77.2090, 28.6139] },
  { markerOffset: 15, name: "Deonar", coordinates: [72.8777, 19.0760] },
  
];

const MapChart = () => {
  return (
    <ComposableMap
      projectionConfig={{
        scale: 200,
      }}
    >
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies
            .map(geo => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#EAEAEC"
                stroke="#D6D6DA"
              />
            ))
        }
      </Geographies>
      {markers.map(({ name, coordinates, markerOffset }) => (
        <Marker key={name} coordinates={coordinates}>
          <g
            fill="none"
            stroke="#FF5533"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            transform="translate(-12, -24)"
          >
            <circle cx="12" cy="10" r="3" />
            <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
          </g>
          <text
            textAnchor="middle"
            y={markerOffset}
            style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
          >
            {name}
          </text>
        </Marker>
      ))}
    </ComposableMap>
  );
};

export default MapChart;
