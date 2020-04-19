import React from "react";
import { Card, CardContent, Grid, Typography, StylesProvider } from "@material-ui/core";
import CountUp from "react-countup";
import cx from "classnames";
import styles from "./Cards.module.css";

const Cards = ({ data: { confirmed, deaths, lastUpdate, recovered } }) => {
  if (!confirmed) {
    return "Loading...";
  }
  const lastDate = (
    <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
  );
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify='center'>
        <Grid className={cx(styles.card, styles.infected)} component={Card} item md={3} xs={12}>
          <CardContent>
            <Typography color='textSecondary' gutterBottom>
              Infected
            </Typography>
            <Typography variant='h5'>
              <CountUp duration={2.5} end={confirmed.value} separator=',' start={0} />
            </Typography>
            {lastDate}
            <Typography variant='body2'>Number of active cases of COVID-19</Typography>
          </CardContent>
        </Grid>
        <Grid className={cx(styles.card, styles.recovered)} component={Card} item md={3} xs={12}>
          <CardContent>
            <Typography color='textSecondary' gutterBottom>
              Recovered
            </Typography>
            <Typography variant='h5'>
              <CountUp duration={2.5} end={recovered.value} separator=',' start={0} />
            </Typography>
            {lastDate}
            <Typography variant='body2'>Number of recoveries from COVID-19</Typography>
          </CardContent>
        </Grid>
        <Grid className={cx(styles.card, styles.deaths)} component={Card} item md={3} xs={12}>
          <CardContent>
            <Typography color='textSecondary' gutterBottom>
              Deaths
            </Typography>
            <Typography variant='h5'>
              <CountUp duration={2.5} end={deaths.value} separator=',' start={0} />
            </Typography>
            {lastDate}
            <Typography variant='body2'>Number of deaths caused by COVID-19</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
