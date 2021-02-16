import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Link from "next/link";
import Typography from "@material-ui/core/Typography";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const Result = ({ questions }) => {
  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Typography variant="h5" gutterBottom>
        You scored 3/10
      </Typography>
      {questions.map(question => question)}
      <Link href="/home">
        <Button variant="contained">play again</Button>
      </Link>
    </Grid>
  );
};

export default Result;

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: "https://localhost:4000/api/graphql",
    cache: new InMemoryCache()
  });

  const { data } = await client.query({
    query: gql`
      query getQuestionList {
        question
      }
    `
  });

  return {
    props: {
      questions: []
    }
  };
}
