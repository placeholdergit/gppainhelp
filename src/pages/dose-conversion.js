import React from "react";

import Layout from "@theme/Layout";
import InputAdornment from "@material-ui/core/InputAdornment";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Hero from "@theme/Hero";
import Typography from "@material-ui/core/Typography";

import styles from "./dose-conversion.module.scss";
import { opioids } from "./opioids.json";

const ORALLABEL = "Oral morphine";

const Dosage = () => {
  const opioidsWithOral = [{ drug: ORALLABEL, multiplier: 0 }, ...opioids];

  const [fromSelectedOpioid, setFromSelectedOpioid] = React.useState("");
  const [toSelectedOpioid, setToSelectedOpioid] = React.useState(ORALLABEL);
  const [amount, setAmount] = React.useState(0);

  const fromOralToOpioid = fromSelectedOpioid === ORALLABEL;
  const selection = fromOralToOpioid ? toSelectedOpioid : fromSelectedOpioid;
  const opioidObj = opioids.find((a) => a.drug === selection);

  // TODO make functional component
  const accumulate = () => {
    if (selection) {
      const { multiplier, timeInHrs, unit } = opioidObj;
      return Math.round(
        +(
          (amount / timeInHrs / (unit === "mcg" ? 1000 : 1) / 1) *
          (fromOralToOpioid ? 1 / multiplier : 1 * multiplier) *
          24
        )
      );
    }
    return 0;
  };

  return (
    <Layout
      title={`Dose Conversion`}
      description="Converting to and from various opioids to an equianalgesic dose of oral morphine."
    >
      <Hero
        title="Dose Conversion"
        tagline="Converting to and from various opioids to an equianalgesic dose of oral morphine"
        small
      />
      <main className={styles.main}>
        <Grid
          container
          justify="flex-start"
          alignItems="center"
          direction="column"
          spacing={2}
          className={styles.fullWidth}
        >
          <Grid item xs={12}>
            <FormControl className={styles.formControl}>
              <TextField
                select
                fullWidth
                variant="filled"
                label="Select an opioid"
                value={fromSelectedOpioid}
                onChange={(e) => {
                  setToSelectedOpioid(
                    e.target.value === ORALLABEL ? "" : ORALLABEL
                  );
                  setFromSelectedOpioid(e.target.value);
                }}
              >
                {opioidsWithOral.map((opioid, index) => (
                  <MenuItem key={opioid.drug} value={opioid.drug}>
                    {opioid.drug}
                  </MenuItem>
                ))}
              </TextField>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            at
          </Grid>
          <Grid item xs={12}>
            <FormControl className={styles.formControl}>
              <TextField
                fullWidth
                variant="filled"
                label="Dosage"
                value={amount || ""}
                onChange={(e) => setAmount(e.target.value)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      {(opioidObj &&
                        `${opioidObj.unit} per ` +
                          (opioidObj.timeInHrs === 1
                            ? "hour"
                            : `${opioidObj.timeInHrs} hours`)) ||
                        ""}
                    </InputAdornment>
                  ),
                  "aria-label": "milligrams per 24 hours",
                }}
                aria-describedby="milligrams-helper-text"
              />
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="body1" component="span">
              is the equivalent to
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5" component="span">
              {accumulate()} mg/24 hr
            </Typography>
          </Grid>
          <Grid item xs={12}>
            of
          </Grid>
          <Grid item xs={12}>
            <FormControl
              className={styles.formControl}
              disabled={!fromOralToOpioid}
            >
              <TextField
                select
                fullWidth
                variant={!fromOralToOpioid ? "standard" : "filled"}
                label={fromOralToOpioid && "Select an opioid"}
                disabled={!fromOralToOpioid}
                value={toSelectedOpioid}
                onChange={(e) => setToSelectedOpioid(e.target.value)}
              >
                {fromOralToOpioid ? (
                  opioids.map((opioid) => (
                    <MenuItem key={opioid.drug} value={opioid.drug}>
                      {opioid.drug}
                    </MenuItem>
                  ))
                ) : (
                  <MenuItem value={ORALLABEL}>{ORALLABEL}</MenuItem>
                )}
              </TextField>
            </FormControl>
          </Grid>
        </Grid>
      </main>
    </Layout>
  );
};

export default Dosage;
