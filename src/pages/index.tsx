import * as React from 'react';

type Props = {
  articles: any
}
const Index: React.FC<Props> = (props: any) => {
  console.log(props)
  return null;
}

export async function getStaticProps() {
  const res = await fetch('/api/articles')
  const json = await res.json()

  return {
    props: {
      contents: json.contents
    }
  }
}

export default Index;
