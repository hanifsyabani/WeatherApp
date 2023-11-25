import React from "react";
import {
  TiWeatherDownpour,
  TiWeatherCloudy,
  TiWeatherSunny,
  TiWeatherSnow,
  TiWeatherStormy,
} from "react-icons/ti";
import TodayHighlight from "./TodayHighlight";

const DayWeather = ({ weatherData }) => {
  const weather = weatherData?.list?.[0].weather?.[0].main
    ? weatherData?.list?.[0].weather?.[0].main
    : "Not Available";

  const temperature_0600 = weatherData?.list?.[1].main?.temp
    ? weatherData?.list?.[6].main?.temp + "°C"
    : "-";
  const temperature_0900 = weatherData?.list?.[2].main?.temp
    ? weatherData?.list?.[7].main?.temp + "°C"
    : "-";
  const temperature_1200 = weatherData?.list?.[3].main?.temp
    ? weatherData?.list?.[8].main?.temp + "°C"
    : "-";
  const temperature_1500 = weatherData?.list?.[4].main?.temp
    ? weatherData?.list?.[9].main?.temp + "°C"
    : "-";
  const temperature_1800 = weatherData?.list?.[5].main?.temp
    ? weatherData?.list?.[10].main?.temp + "°C"
    : "-";
  const temperature_2100 = weatherData?.list?.[6].main?.temp
    ? weatherData?.list?.[11].main?.temp + "°C"
    : "-";

  const data = [
    {
      id: 1,
      hours: "06.00",
      temperature: temperature_0600,
    },
    {
      id: 2,
      hours: "09.00",
      temperature: temperature_0900,
    },
    {
      id: 3,
      hours: "12.00",
      temperature: temperature_1200,
    },
    {
      id: 4,
      hours: "15.00",
      temperature: temperature_1500,
    },
    {
      id: 5,
      hours: "18.00",
      temperature: temperature_1800,
    },
    {
      id: 6,
      hours: "21.00",
      temperature: temperature_2100,
    },
  ];

  return (
    <div className="">
      <h1 className=" text-3xl text-white font-bold">{weather}</h1>
      <div className="mt-7  flex justify-center items-center gap-7">
        {data.map((item) => (
          <div
            key={item.id}
            className="bg-white/25 p-2 rounded-md w-[7rem] text-center shadow-xl text-white"
          >
            <p className="font-extralight text-sm">{item.hours}</p>
            <hr className="w-[60%] -h-1 bg-white mx-auto" />

            {weatherData?.list?.[item.id].weather?.[0].main === "Clear" && (
              <TiWeatherSunny size={45} color="black" className="mx-auto bg-white p-1 rounded-md mt-2" />
            )}

            {weatherData?.list?.[item.id].weather?.[0].main === "Clouds" && (
              <TiWeatherCloudy size={45} color="black" className="mx-auto bg-white p-1 rounded-md mt-2" />
            )}

            {weatherData?.list?.[item.id].weather?.[0].main === "Thunderstorm" && (
              <TiWeatherStormy size={45} color="black" className="mx-auto bg-white p-1 rounded-md mt-2" />
            )}

            {weatherData?.list?.[item.id].weather?.[0].main === "Rain" && (
              <TiWeatherDownpour size={45} color="black" className="mx-auto bg-white p-1 rounded-md mt-2" />
            )}

            {weatherData?.list?.[item.id].weather?.[0].main === "Fog" && (
              <TiWeatherSnow size={45} color="black" className="mx-auto bg-white p-1 rounded-md mt-2" />
            )}

            <h1 className="text-xl mt-3 font-bold">{item.temperature}</h1>
          </div>
        ))}
      </div>
      <TodayHighlight weatherData={weatherData} />
    </div>
  );
};

export default DayWeather;
