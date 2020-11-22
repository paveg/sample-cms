import * as React from 'react';
import Link from "next/link";
import { Article } from "../../types/articles";

type Props = {
  articles: Article[]
}

const Articles: React.FC<Props> = ({ articles }) => {
  return (
    <div>
      <ul>
        {articles.map((article: Article) => {
          return <li key={article.id}>
            <Link href={`articles/${article.id}`}>
              <a>{article.title}</a>
            </Link>
          </li>
        })}
      </ul>
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch('https://samples.microcms.io/api/v1/articles/', {
    headers: {
      'Content-type': 'application/json',
      'X-API-KEY': process.env.MICRO_CMS_API_KEY,
    }
  })
  const json = await res.json()

  return {
    props: {
      articles: json.contents
    }
  }
}

export default Articles
