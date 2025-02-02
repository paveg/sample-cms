import * as React from 'react';
import { Article } from '../../types/articles';
import Layout from '../../components/layout';

type Props = {
  article: Article;
};

const ArticleId: React.FC<Props> = ({ article }) => (
  <Layout>
    <h1>{article.title}</h1>
    <p>{article.publishedAt}</p>
    <div>{article.content}</div>
  </Layout>
);

export const getStaticPaths = async () => {
  const res = await fetch('https://samples.microcms.io/api/v1/articles/', {
    headers: {
      'Content-type': 'application/json',
      'X-API-KEY': process.env.MICRO_CMS_API_KEY,
    },
  });
  const json = await res.json();
  const paths = json.contents.map((content) => `/articles/${content.id}`);

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const { id } = context.params;
  const res = await fetch(`https://samples.microcms.io/api/v1/articles/${id}`, {
    headers: {
      'Content-type': 'application/json',
      'X-API-KEY': process.env.MICRO_CMS_API_KEY,
    },
  });
  const json = await res.json();

  return {
    props: {
      article: json,
    },
  };
};

export default ArticleId;
