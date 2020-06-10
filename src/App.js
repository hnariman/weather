import React from "react";

import "./style.scss";
import Header from "./components/Header";
import WeatherCard from "./components/WeatherCard.jsx";

class App extends React.Component {
  state = {
    data: [],
    loading: true,
  };
  componentDidMount() {
    this.setState({ loading: true });
    navigator.geolocation.getCurrentPosition((position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      const key = "225a713f3a21409c916a8cace794e454";
      fetch(
        `https://api.weatherbit.io/v2.0/forecast/daily?lat=${latitude}&lon=${longitude}&days=5&key=${key}`
      )
        .then((res) => res.json())
        .then((data) => {
          this.setState({ data, loading: false });
          data.data.map((x) => console.log(x));
        })
        .catch((err) => err);
    });
  }

  render() {
    return (
      <section className="App">
        <Header {...this.state.data} />
        {this.state.loading && <Loading />}
        {this.state.loading ||
          this.state.data.data.map((x, index) => {
            return (
              <div key={index}>
                <WeatherCard {...x} />
              </div>
            );
          })}
      </section>
    );
  }
}

const Loading = () => {
  return <h1> DATA IS LOADING </h1>;
};

export default App;
