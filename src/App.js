import React, { Component } from "react";

import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import coronaImage from "./images/covid-19-image.png";
import { fetchData } from "./api";

export default class App extends Component {
  state = {
    country: "",
    data: {},
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  handleChangeCountry = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country });
  };

  render() {
    const { country, data } = this.state;
    return (
      <div className={styles.container}>
        <img className={styles.image} alt='COVID-19-image' src={coronaImage} />
        <Cards data={data} />
        <CountryPicker onChangeCountry={this.handleChangeCountry} />
        <Chart country={country} data={data} />
      </div>
    );
  }
}
