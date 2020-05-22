import React, { useState, memo } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import ReactTooltip from 'react-tooltip';
import { scaleQuantile } from 'd3-scale';
import LinearGradient from './LinearGradient.js';

/**
* Courtesy: https://rawgit.com/Anujarya300/bubble_maps/master/data/geography-data/india.topo.json
* Looking topojson for other countries/world? 
* Visit: https://github.com/markmarkoh/datamaps
*/
const INDIA_TOPO_JSON =   "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";
const PROJECTION_CONFIG = {
    scale: 200,
  };
  
  // Red Variants
  const COLOR_RANGE = [
    '#ffedea',
    '#ffcec5',
    '#ffad9f',
    '#ff8a75',
    '#ff5533',
    '#e2492d',
    '#be3d26',
    '#9a311f',
    '#782618'
  ];
  
  const DEFAULT_COLOR = '#EEE';
  
  
  const geographyStyle = {
    default: {
      outline: 'none'
    },
    hover: {
      fill: '#ccc',
      transition: 'all 250ms',
      outline: 'none'
    },
    pressed: {
      outline: 'none'
    }
  };
  
  // will generate random heatmap data on every call
  const getHeatMapData = () => {
    return [
      { name: 'Antarctica', value:""  },
      { name: 'Afghanistan', value: 0.25 },
      { name: 'Albania', value: 5.36 },
      { name: 'Algeria', value: 3.86 },
      { name: 'Angola', value: 20.22 },
      { name: 'Antigua and Barbuda', value: 52.54 },
      { name: 'Argentina', value: 7.29 },
      { name: 'Armenia', value: 5.83 },
      { name: 'Australia', value: 25.87 },
      { name: 'Austria', value: 14.09 },
      { name: 'Azerbaijan', value: 3.2 },
      { name: 'Bahamas', value: 27.59 },
      { name: 'Bangladesh', value: 24.31 },
      { name: 'Barbados', value: 39.97 },
      { name: 'Belarus', value: 16.28 },
      { name: 'Belgium', value: 23.01 },
      { name: 'Belize', value: 12.16 },
      { name: 'Benin', value: 17.6 },
      { name: 'Bermuda', value: 45.17 },
      { name: 'Bolivia', value: 2.57 },
      { name: 'Bosnia and Herzegovina', value: 4.89 },
      { name: 'Botswana', value: 3.8 },
      { name: 'Brazil', value: 9.09 },
      { name: 'Brunei', value: 46.7 },
      { name: 'Bulgaria', value: 7.05 },
      { name: 'Burkina Faso', value: 7.06 },
      { name: 'Cambodia', value: 42.69 },
      { name: 'Cameroon', value: 18.06},
      { name: 'Canada', value: 22.45 },
      { name: 'Cape Verde', value: 11.1 },
      { name: 'Chad', value: 7.18 },
      { name: 'Chile', value: 11.78 },
      { name: 'China', value: 38.17 },
      { name: 'Colombia', value: 7.16 },
      { name: 'Congo', value: 29.34 },
      { name: 'Costa Rica', value: 18.46 },
      { name: 'Cuba', value: 5.69 },
      { name: 'Central African Rep.', value: 7.73 },
      { name: 'Croatia', value: 18.74 },
      { name: 'Cyprus', value: 24.94 },
      { name: 'Czech Republic', value: 9.31},
      { name: 'Denmark', value: 22.7 },
      { name: 'Dominican Republic', value: 9.56 },
      { name: 'Dijibouti', value: 3.69 },
      { name: 'Dominica', value: 28.06 },
      { name: 'Dem. Rep. Congo', value: 29.34 },
      { name: 'East Timor', value: 7.98 },
      { name: 'El Salvador', value: 6.64 },
      { name: 'Estonia', value: 14.72 },
      { name: 'Ecuador', value: 7.77},
      { name: 'Equatorial Guinea', value: "" },
      { name: 'Ethiopia', value: 0.44 },
      { name: 'Egypt', value: 23.69 },
      { name: 'Eritrea', value: ""},
      { name: 'Fiji', value: 34.83 },
      { name: 'Finland', value: 31.8 },
      { name: 'France', value: 34.37 },
      { name: 'Gabon', value: 30.94 },
      { name: 'Germany', value:  12.75},
      { name: 'Guinea-Bissau', value: 1.3 },
      { name: 'Grenada', value: 27.1 },
      { name: 'Gambia', value: 27.53 },
      { name: 'Ghana', value: 25.51 },
      { name: 'Guatemala', value: 2.58 },
      { name: 'Guyana', value: 30.48 },
      { name: 'Georgia', value: 8.04 },
      { name: 'Greece', value: 19.44 },
      { name: 'Greenland', value: "" },
      { name: 'Guinea', value: 10.09 },
      { name: 'Haiti', value: 4.53 },
      { name: 'Honduras', value: 3.15 },
      { name: 'Hungary', value: 6.3 },
      { name: 'Iceland', value: 90.71 },
      { name: 'Iran', value: 11.73 },
      { name: 'Israel', value: 25.92 },
      { name: 'India', value: 6.9 },
      { name: 'Iraq', value: 3.37 },
      { name: 'Italy', value: 29.8 },
      { name: 'Indonesia', value: 44.67 },
      { name: 'Ireland', value: 23.43 },
      { name: 'Jamaica', value: 25.41 },
      { name: 'Japan', value: 45.49 },
      { name: 'Jordan', value: 5.87},
      { name: 'Kazakhstan', value: 4.5 },
      { name: 'North Korea', value: 11.4 },
      { name: 'Kyrgyzstan', value: 1.14 },
      { name: 'Kenya', value: 3.98 },
      { name: 'South Korea', value: 54.97 },
      { name: 'Kiribati', value: 76.69 },
      { name: 'Kuwait', value: 11.48 },
      { name: 'Laos', value: 25.26 },
      { name: 'Lesotho', value: 1.84 },
      { name: 'Liechtenstein', value: "" },
      { name: 'Latvia', value: 24.86 },
      { name: 'Liberia', value: 5.88 },
      { name: 'Lithuania', value: 33.09 },
      { name: 'Lebanon', value: 8.73 },
      { name: 'Libya', value: ""},
      { name: 'Luxembourg', value: 32.15 },
      { name: 'Madagascar', value: 15.29 },
      { name: 'Maldives', value: 90.41 },
      { name: "Marshall Islands", value: "" },
      { name: 'Mexico', value: 14.38 },
      { name: 'Monaco', value: "" },
      { name: 'Morocco', value: 19.47 },
      { name: 'North Macedonia', value: 6.21 },
      { name: 'Malawi', value: 9.5 },
      { name: 'Mali', value: 9.34 },
      { name: 'Mauritania', value: 9.16 },
      { name: 'Micronesia', value: 72.46 },
      { name: 'Mongolia', value: 0.7 },
      { name: 'Mozambique', value: 11.46 },
      { name: 'Malaysia', value: 57.62 },
      { name: 'Malta', value: 31.9 },
      { name: 'Mauritius', value: 23.07 },
      { name: 'Moldova', value: 11.58 },
      { name: 'Montenegro', value: 14.06},
      { name: 'Myanmar', value: 47.32 },
      { name: 'Namibia', value: 11.56 },
      { name: 'Netherlands', value: 27.15},
      { name: 'Nigeria', value: 9.12},
      { name: 'Niger', value: 2.03 },
      { name: 'Nauru', value: "" },
      { name: 'New Zealand', value: 24.73 },
      { name: 'Northern Ireland', value: "" },
      { name: 'Nepal', value:2.83 },
      { name: 'Nicaragua', value: 6.51 },
      { name: 'Norway', value: 51.35 },
      { name: 'Oman', value: 28.54 },
      { name: 'Pakistan', value: 1.72},
      { name: 'Panama', value: 13.12 },
      { name: 'Peru', value: 25.04},
      { name: 'Portugal', value: 56.84 },
      { name: 'Palau', value: "" },
      { name: 'Papua New Guniea', value: ""},
      { name: 'Philippines', value: 28.14 },
      { name: 'Palestine', value: "" },
      { name: 'Paraguay', value: 4.17 },
      { name: 'Poland', value: 10.69 },
      { name: 'Qatar', value: "" },
      { name: 'Romania', value: 5.96 },
      { name: 'Russia', value: 20.07 },
      { name: 'Rwanda', value: 7.66 },
      { name: 'Serbia', value: 6.18 },
      { name: 'Singapore', value: "" },
      { name: 'Solomon Islands', value: "" },
      { name: 'Spain', value: 42.47 },
      { name: 'St. Lucia', value: 34.1 },
      { name: 'Suriname', value: 16.69 },
      { name: 'Syria', value: "" },
      { name: 'Samoa', value: 46.32 },
      { name: 'Saudi Arabia', value: 11.33 },
      { name: 'Slovakia', value: 9.7 },
      { name: 'Somalia', value: "" },
      { name: 'Sri Lanka', value: 30.84 },
      { name: 'Sweden', value: 32.81 },
      { name: 'San Marino', value: "" },
      { name: 'Senegal', value: 18.6 },
      { name: 'Sierra Leone', value: 26.3 },
      { name: 'Slovenia', value: 11.96 },
      { name: 'South Africa', value: 5.97 },
      { name: 'Sudan', value: 1.03 },
      { name: 'S. Sudan', value: "" },
      { name: 'Switzerland', value: 16.94 },
      { name: 'Taiwan', value: 29.69 },
      { name: 'Thailand', value: 29.17 },
      { name: 'Trinidad and Tobago', value: 23.85 },
      { name: 'Turkmenistan', value: 2.94 },
      { name: 'Tajikistan', value: .37},
      { name: 'Togo', value: 11.73 },
      { name: 'Tunisia', value: 13.16},
      { name: 'Tuvalu', value: "" },
      { name: 'Tanzania', value: 6.8 },
      { name: 'Tonga', value: "" },
      { name: 'Turkey', value: 4.85 },
      { name: 'Uganda', value: 11.27 },
      { name: 'United Kingdom', value: 19.73},
      { name: 'Uzbekistan', value: 2.25 },
      { name: 'Ukraine', value: 11.67 },
      { name: 'United States of America', value: 22.36},
      { name: 'United Arab Emirates', value: 24.71 },
      { name: 'Uruguay', value: 9.23 },
      { name: 'Vietnam', value: 37.66 },
      { name: 'Venezuela', value: 10.1},
      { name: 'Yemen', value: 3.17 },
      { name: 'Zambia', value: 12.05},
      { name: 'Zimbabwe', value: 3.73},




      
      

      

      
      



      
    ];
  };
  
  function MapChart() {
    const [tooltipContent, setTooltipContent] = useState('');
    const [data, setData] = useState(getHeatMapData());
  
    const gradientData = {
      fromColor: COLOR_RANGE[0],
      toColor: COLOR_RANGE[COLOR_RANGE.length - 1],
      min: 0,
      max: data.reduce((max, item) => (item.value > max ? item.value : max), 0)
    };
  
    const colorScale = scaleQuantile()
      .domain(data.map(d => d.value))
      .range(COLOR_RANGE);
  
    const onMouseEnter = (geo, current = { value: 'NA' }) => {
      return () => {
        setTooltipContent(`${geo.properties.NAME}: ${current.value}`);
      };
    };
  
    const onMouseLeave = () => {
      setTooltipContent('');
    };
  
   
  
    return (
      <div className="full-width-height container">
        <ReactTooltip>{tooltipContent}</ReactTooltip>
          <ComposableMap
            projectionConfig={PROJECTION_CONFIG}
            //projection="geoMercator"
            //width={600}
            //height={100}
            data-tip=""
          >
            <Geographies geography={INDIA_TOPO_JSON}>
              {({ geographies }) =>
                geographies.map(geo => {
                const{NAME}= geo.properties;
                  console.log({NAME});
                  const current = data.find(s => s.name === NAME);
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill={current ? colorScale(current.value) : DEFAULT_COLOR}
                      style={geographyStyle}
                      onMouseEnter={onMouseEnter(geo, current)}
                      onMouseLeave={onMouseLeave}
                    />
                  );
                })
              }
            </Geographies>
          </ComposableMap>
        <LinearGradient data={gradientData} />
      </div>
    );
  }

export default memo(MapChart);