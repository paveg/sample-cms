import * as React from 'react';
import Link from 'next/link';

const Index: React.FC = () => (
  <div>
    <h1>Index Page</h1>
    <Link href="/articles">
      <a>Articles Page</a>
    </Link>
  </div>
);

export default Index;
