import React from "react";

const TodayHighlight = ({ weatherData }) => {
  const sunriseTime = weatherData?.city?.sunrise
    ? new Date(weatherData.city.sunrise * 1000).toLocaleTimeString("id-ID", {
      timeZone: "Asia/Jakarta",
    })
    : "Not Available";

  const sunsetTime = weatherData?.city?.sunset
    ? new Date(weatherData.city.sunset * 1000).toLocaleTimeString("id-ID", {
      timeZone: "Asia/Jakarta",
    })
    : "Not Available";

  const pressure= weatherData?.list?.[0].main?.pressure ? weatherData?.list?.[0].main?.pressure : "Not Available";
  const Humidity =  weatherData?.list?.[0].main?.humidity  ?  weatherData?.list?.[0].main?.humidity  : "Not Available";
  const visibility = weatherData?.list?.[0].visibility ? weatherData?.list?.[0].visibility : "Not Available";
  const windSpeed = weatherData?.list?.[0].wind?.speed ?  weatherData?.list?.[0].wind?.speed : "Not Available";
  

  return (
    <div className="mt-10 ">
      <h1 className="text-white text-2xl font-bold">Today Highlight</h1>
      <div className="flex justify-center items-center gap-10 mt-4 w-full">
        <div className="bg-white/25 p-4 rounded-md w-1/2">
          <h4 className="text-black lg:text-white text-mb mb-2">Wind Speed - {windSpeed} Km/h</h4>

          <h4 className="text-black lg:text-white text-mb mb-2">Sunrise - {sunriseTime} Am</h4>

          <h4 className="text-black lg:text-white text-mb mb-2">Sunset - {sunsetTime} Pm</h4>
        </div>
        <div className="bg-white/25 p-4 rounded-md w-1/2">
          <h4 className="text-black lg:text-white text-mb mb-2">Pressure - {pressure}(hpa)</h4>
          <h4 className="text-black lg:text-white text-mb mb-2">Humidity - {Humidity}(%)</h4>
          <h4 className="text-black lg:text-white text-mb mb-2">Visibility - {visibility}(Km)</h4>
        </div>
      </div>
      <p className="text-center text-white text-xs mt-24">Created by: <a href="https://www.instagram.com/mhanifs_/">Muhammad Hanif Sya'bani</a></p>
    </div>
  );
};

export default TodayHighlight;
