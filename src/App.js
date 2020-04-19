import React, { Component } from "react";

import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
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
    this.setState({ country });
  };

  render() {
    const { data } = this.state;
    return (
      <div className={styles.container}>
        <Cards data={data} />
        <CountryPicker onChangeCountry={this.handleChangeCountry} />
        <Chart />
      </div>
    );
  }
}
