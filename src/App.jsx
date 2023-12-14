import DayWeather from "./components/DayWeather";
import SearchBox from "./components/SearchBox";
import React from "react";

function App() {
  
  const [weatherData, setWeatherData] = React.useState({});

  return (
    <>
      <div className="bg-[url(https://images.unsplash.com/photo-1520609798519-2e1e8c18df3a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] blur-md w-full lg:h-screen h-full absolute -z-10 bg-center"></div>
      <div className="px-[4%] py-[2rem] font-[poppins] lg:flex gap-20 justify-evenly">
        <SearchBox weatherData={weatherData} setWeatherData={setWeatherData} />
        <DayWeather weatherData={weatherData} />
      </div>
    </>
  );
}

export default App;
