import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Link from "next/link";
import Typography from "@material-ui/core/Typography";

const Home = () => {
  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Typography variant="h5" gutterBottom>
        Welcome to the Trivia Challenge!
      </Typography>
      <Typography variant="h6" gutterBottom>
        You will be presented with 10 True or False questions.
      </Typography>
      <Typography variant="h6" gutterBottom>
        Can you score 100%?
      </Typography>
      <Link href="/questions">
        <Button variant="contained">begin</Button>
      </Link>
    </Grid>
  );
};

export default Home;
