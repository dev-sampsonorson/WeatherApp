
import React from 'react';
import styled from 'styled-components';




const WeatherCondition =styled.div`
    display:flex;
    flex-direction: row;
    align-items:center;
    justify-content: space-around;
    width: 100%;
    flex-wrap:wrap;
`


const Condition =styled.span`
    display:flex;
    flex-direction: row;
    font-size:14px;

    & span{
      font-size:20px;
      
    }
`

const WeatherImage= styled.img`
        width:140px;
        height:140px;
       
`;


const Location = styled.span`
      font-size:28px;
      font-weight:bold;


`


const WeatherIfoLabel = styled.span`
      font-size:14px;
      font-weight:bold;
      margin:20px 25px 10px;
      text-align:start;
      width: 100%;



`;

const WeatherInfoContainer = styled.span`
      display:flex;
      flex-direction: row;
      justify-content: space-evenly;
      align-items: center;
      flex-wrap:wrap;
      width: 100%;



`



const Infocontainer =styled.div`
      display:flex;
      margin: 5px 10px;
      flex-direction: row;
      align-items:center;
      justify-content: space-around;
     
  `
  
  const InfoLabel = styled.span`
    display: flex;
    flex-direction: column;
    font-size: 14px;
    margin: 15px;

    & span{
      font-size: 12px;
      text-transform:capitalize;
    }
    
`;

const InfoIcon= styled.img`
        width:36px;
        height:36px;
       
`

export const WeatherInfoIcons = {
      sunset: "/icons/temp.svg",
      sunrise: "/icons/temp.svg",
      humidity: "/icons/humidity.svg",
      wind: "/icons/wind.svg",
      pressure: "/icons/pressure.svg",
  };


  export const WeatherIcons = {
      "01d": "/icons/sunny.svg",
      "01n": "/icons/night.svg",
      "02d": "/icons/day.svg",
      "02n": "/icons/cloudy-night.svg",
      "03d": "/icons/cloudy.svg",
      "03n": "/icons/cloudy.svg",
      "04d": "/icons/perfect-day.svg",
      "04n": "/icons/cloudy-night.svg",
      "09d": "/icons/rain.svg",
      "09n": "/icons/rain-night.svg",
      "10d": "/icons/rain.svg",
      "10n": "/icons/rain-night.svg",
      "11d": "/icons/storm.svg",
      "11n": "/icons/storm.svg",
    };


      
const WeatherComponent= (props) =>{

      const {name, value}= props;

      


      return(
            <Infocontainer >
                   
                  <InfoIcon  src={WeatherInfoIcons[name]}></InfoIcon>
                  <InfoLabel> {value}  <span> {name}  </span> </InfoLabel>
            </Infocontainer>
      )
}

const WeatherInfoComponent = (props) => {

      const {weather} =props

      const isday= weather?.weather[0]?.icon?.includes('d');
  return <>

 
  
  <WeatherCondition>

    <Condition> <span> { `${Math.floor(weather?.main?.temp -273)} °C` }</span> {`| ${weather?.weather[0].description}`}</Condition>

    <WeatherImage src={WeatherIcons[weather?.weather[0]?.icon]}></WeatherImage>

    </WeatherCondition>

    <Location> {`${weather?.name}, ${weather?.sys?.country}` }</Location>

    <WeatherIfoLabel> Weather Info</WeatherIfoLabel>

    <WeatherInfoContainer>

            <WeatherComponent name={ isday? "sunrise": "sunset"}  value={ weather?.sys[isday?"sunrise": "sunset"]}></WeatherComponent>
            <WeatherComponent name="humidity" value={weather?.main?.humidity} ></WeatherComponent>
            <WeatherComponent name="wind"     value={weather?.wind?.speed}></WeatherComponent>
            <WeatherComponent name="pressure" value={weather?.main?.pressure}></WeatherComponent>

    </WeatherInfoContainer>

   
  </>
}

export default WeatherInfoComponent