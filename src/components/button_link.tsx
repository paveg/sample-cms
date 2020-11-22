import * as React from 'react';
import Link from 'next/link';
import { Button } from '@material-ui/core';

type Props = {
  href: string;
};

const ButtonLink: React.FC<Props> = ({ href, children }) => (
  <Link href={href} passHref>
    <Button>{children}</Button>
  </Link>
);

export default ButtonLink;
