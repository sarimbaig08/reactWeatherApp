import { useState } from "react";
import style from "./App.module.css";

function App() {
  const fetchData = async () => {
    if (searchVal) {
      try {
        console.log("Helllllllo", searchVal);
        const apiResponse = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${searchVal}&appid=2fd8ca06d2553ef9671590a982304dc5`
        );
        console.log(apiResponse);
        // setWeatherData(apiResponse.data);
        // setTemp(setWeatherData.main.temp);
        // setHumidity(setWeatherData.main.humidity);
        // setWind(setWeatherData.wind.speed);
      } catch (error) {
        alert("aleert:", error.code);
      }
    }
  };

  let [searchVal, setsearchVal] = useState("");
  console.log(searchVal);
  let [temp, setTemp] = useState(60);
  let [humidity, setHumidity] = useState(20);
  let [wind, setWind] = useState(30);
  let [weatherData, setWeatherData] = useState(null);

  return (
    <>
      <div className={style.mainParent}>
        <div className={style.mainBody}>
          <div className={style.searchHeader}>
            <input
              type="text"
              placeholder="Search..."
              onChange={(e) => {
                setsearchVal(e.target.value);
              }}
              className={style.searchBar}
            />
            <div className={style.searchIcon} onClick={fetchData}>
              <img src="/search.png" alt="" width={15} height={15} />
            </div>
          </div>
          <div>
            <img src="/cloud.png" alt="" height={120} width={120} />
          </div>
          <div className={style.fontXXLarge}>{temp} °C</div>
          <div className={style.fontLarge}>{searchVal}</div>
          <div className={style.detailsParent}>
            <div className={style.detailsChild}>
              <img src="/humidity.png" alt="" height={25} width={25} />
              <div>
                <h4 className={style.margin0}>{humidity}%</h4>
                <p className={style.margin0}>Humidity</p>
              </div>
            </div>
            <div className={style.detailsChild}>
              <img src="/wind.png" alt="" height={25} width={25} />
              <div>
                <h4 className={style.margin0}>{wind}%</h4>
                <p className={style.margin0}>Wind</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
