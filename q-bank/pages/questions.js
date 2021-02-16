import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Link from "next/link";
import Typography from "@material-ui/core/Typography";

const Questions = () => {
  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Typography variant="h5" gutterBottom>
        Category(Headline)
      </Typography>
      <Typography variant="h6" gutterBottom>
        Question(Card Element)
      </Typography>
      <Link href="/">
        <Button variant="contained">True</Button>
      </Link>
      <Link href="/">
        <Button variant="contained">False</Button>
      </Link>
    </Grid>
  );
};

export default Questions;
