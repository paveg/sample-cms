import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid, { GridSize } from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import { Article } from '../types/articles';
import Layout from '../components/layout';
import ButtonLink from '../components/button_link';

type Props = {
  articles: Article[];
};

const formatDate = (date: Date) => `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;

const Index: React.FC<Props> = ({ articles }) => {
  const maxGrid = 12;
  const xs = Math.floor(maxGrid / 2) as GridSize; // 2 columns
  const sm = Math.floor(maxGrid / 3) as GridSize; // 3 columns

  return (
    <Layout>
      <Box m={2}>
        <Grid container spacing={1}>
          {articles.map((article: Article) => {
            const date = new Date(article.date);
            return (
              <Grid key={article.id} item xs={xs} sm={sm}>
                <Paper variant="outlined">
                  <Box p={1}>
                    <Typography variant="caption">{formatDate(date)}</Typography>
                    <Box textAlign="center">
                      <ButtonLink small href={`articles/${article.id}`}>
                        {article.title}
                      </ButtonLink>
                    </Box>
                  </Box>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const res = await fetch('https://samples.microcms.io/api/v1/articles/', {
    headers: {
      'Content-type': 'application/json',
      'X-API-KEY': process.env.MICRO_CMS_API_KEY,
    },
  });
  const json = await res.json();

  return {
    props: {
      articles: json.contents,
    },
  };
};

export default Index;
