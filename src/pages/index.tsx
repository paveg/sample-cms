import * as React from 'react';
import loadable from '@loadable/component';
import Grid, { GridSize } from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { CircularProgress } from '@material-ui/core';
import { Article } from '../types/articles';
import Layout from '../components/layout';

const ArticlePaper = loadable(() => import('../components/article_paper'));

type Props = {
  articles: Article[];
};

const Index: React.FC<Props> = ({ articles }) => {
  const maxGrid = 12;
  const xs = Math.floor(maxGrid / 2) as GridSize; // 2 columns
  const sm = Math.floor(maxGrid / 3) as GridSize; // 3 columns

  return (
    <Layout>
      <Box m={2}>
        <Grid container spacing={1}>
          {articles.map((article: Article) => (
            <Grid key={article.id} item xs={xs} sm={sm}>
              <ArticlePaper article={article} fallback={<CircularProgress />} />
            </Grid>
          ))}
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
