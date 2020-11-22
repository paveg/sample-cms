import * as React from 'react';
import Link from 'next/link';
import Layout from '../components/layout';
import { Article } from '../types/articles';

type Props = {
  articles: Article[];
};

const Index: React.FC<Props> = ({ articles }) => (
  <Layout>
    <ul>
      {articles.map((article: Article) => (
        <li key={article.id}>
          <Link href={`articles/${article.id}`}>
            <a>{article.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
);
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
