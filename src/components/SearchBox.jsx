import React from "react";
import cloudy from "../assets/cloudy.png";
import sunny from "../assets/sun.png";
import storm from "../assets/storm.png";
import rain from "../assets/heavy-rain.png";
import fog from "../assets/fog.png";
import { IoLocationSharp } from "react-icons/io5";
import { Alert, AlertIcon } from "@chakra-ui/react";

import axios from "axios";

const SearchBox = ({ weatherData, setWeatherData }) => {
  const [search, setSearch] = React.useState("");
  const [error, setError] = React.useState(false);

  const handleSearch = (evt) => {
    if (evt.key === "Enter") {
      if (!search) {
        setError(!error);
      } else {
        setError(false);
        axios
          .get(
            `https://api.openweathermap.org/data/2.5/forecast?q=${search}&appid=9b970708ab95bf0fe1b6f277836bddba&units=metric`
          )
          .then((res) => {
            setWeatherData(res.data);
          })
          .catch((err) => console.log(err));
      }
    }
  };

  return (
    <div className="w-[30%] bg-white/30 py-9 px-2 rounded-lg shadow-md mt-10 relative">
      {console.log(weatherData)}
      {!search && (
        <label htmlFor="search" className="text-sm text-white">
          Masukkan Nama Kota
        </label>
      )}
      {error && (
        <Alert status="error">
          <AlertIcon />
          Anda belum memasukkan wilayah
        </Alert>
      )}
      <input
        type="search"
        id="search"
        placeholder="Search city..."
        className="w-full h-10 px-6 text-md border-2 border-gray-300 rounded-full focus:outline-none focus:border-blue-500"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyUp={handleSearch}
      />

      

      {weatherData?.list?.[0].weather?.[0].main === "Clear" && (
        <img src={sunny} alt="" className="w-44 mx-auto mt-4" />
      )}

      {weatherData?.list?.[0].weather?.[0].main === "Clouds" && (
        <img src={cloudy} alt="" className="w-44 mx-auto mt-4" />
      )}

      {weatherData?.list?.[0].weather?.[0].main === "Thunderstorm" && (
        <img src={storm} alt="" className="w-44 mx-auto mt-4" />
      )}

      {weatherData?.list?.[0].weather?.[0].main === "Rain" && (
        <img src={rain} alt="" className="w-44 mx-auto mt-4" />
      )}

      {weatherData?.list?.[0].weather?.[0].main === "Fog" && (
        <img src={fog} alt="" className="w-44 mx-auto mt-4" />
      )}

      <div className="px-5 mt-6 text-center ">
        <div className="flex items-center gap-2 text-white justify-center">
          <IoLocationSharp size={20} />
          {weatherData && weatherData?.city ? (
            <p>
              {weatherData.city.name}, {weatherData.city.country}
            </p>
          ) : (
            <p>-</p>
          )}
        </div>
        <h1 className="font-bold text-4xl text-white">
          {weatherData?.list?.[0].main?.temp
            ? `${weatherData?.list?.[0].main?.temp}°C`
            : "N/A"}
        </h1>
        <p className="text-white text-md bg-black/20 rounded-xl p-2 mt-3">
          {new Date().toDateString()}
        </p>
      </div>
    </div>
  );
};

export default SearchBox;
