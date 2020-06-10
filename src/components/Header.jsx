import React from "react";

import "../style.scss";
const Header = ({ city_name, country_code }) => {
  return (
    <div className="title">
      <h1> {city_name} city</h1>
      <h2> {country_code}</h2>
    </div>
  );
};
export default Header;
