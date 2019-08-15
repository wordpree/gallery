import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Loading from "./Loading";
import { useStateValue } from "./ApiDataProvider";
import Image from "./Image";
import WithImageLists from "./WidthImageLists";

const useStyles = makeStyles(theme => ({
  gridContainer: {
    background: "#232931"
  }
}));

function ImageLists() {
  const classes = useStyles();
  const state = useStateValue();

  return state.loading && state.gallery.length === 0 ? (
    <Loading />
  ) : (
    <Grid container spacing={1} className={classes.gridContainer}>
      {state.gallery.map((item, index) => (
        <Grid item key={index} xs={12} md={4} sm={6} lg={1}>
          <Image data={item} index={index} />
        </Grid>
      ))}
    </Grid>
  );
}

export default WithImageLists(ImageLists);
