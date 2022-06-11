import React, { useEffect, useState } from "react";


import Card from "../card/card";

// import axios from "axios";
import "./index.css";
import data from"../../data.json";
// import { getValue } from "@testing-library/user-event/dist/utils";
const continents = ["asia", "africa", "america", "europe", "oceania"];

function CardContiner() {
    //transfomed data
    console.log("stil not get dataaaa");

    const [cardData,setCardData]=useState([]);
 
    const handelCardData=(data)=>{

        const cards = data?.map((country) => {
            
            // console.log(country);
            const key = Object.keys(country.name.nativeName)[0];
            // console.log(key);
      
            //   if (country.currencies) {
            // console.log(Object.keys(country.currencies));
            // console.log(country.currencies);
            //   }
      
            return {
              name: country.name.common,
              population: country.population,
              region: country.region,
              flag: country.flags.svg,
              subRegion: country.subregion,
              nativeName: country.name.nativeName[key].official,
              // currencies: country.currencies.map((currency) => currency.name),
              // currencies: country.currencies.name,
              languages: Object.values(country.languages),
            };
          });
          

        setCardData(cards);
    };

    useEffect(() => {
        // axios.get('data')
        handelCardData(data);
      },[]);


      ///handel input

       const [input,setinput]=useState("");

     // handle filtered data

    const [filteredData, setFilteredData] = useState(null);

  //handle select state
  const [select, setSelect] = useState("");

      const handelInputChange = (value) => {
        const filterData = cardData
          .filter((contry) => contry.name.includes(value.toLowerCase()))
          .filter((contry) => contry.region.toLowerCase());
            setFilteredData(filterData);
             setinput(value);
             console.log(filterData);
      };
      const handelSelectChange=(value)=>{
        console.log(value)
        setSelect(value)
      }
      return (
        <>
          <input
            onChange={(e) => handelInputChange(e.target.value)}
            value={input}
            type="text"
            className=""
          />

          <select
            onChange={(e) => handelSelectChange(e.target.value)}
            name="continents"
            id="continents"
          >
          <option value={""}>select your region</option>
          {continents.map((item, index)=>{
            return(
              <option key={index} value={item}>
                {item.toUpperCase()}


              </option>
            );
          })}
          </select>

           <div className="card-container">
               <Card cardData={filteredData ? filteredData : cardData} />
           </div>
        </>
      );
    
}
export default  CardContiner;