import * as React from 'react';
import Link from 'next/link';
import { Button } from '@material-ui/core';

type Props = {
  href: string;
  small?: boolean;
};

const ButtonLink: React.FC<Props> = ({ small, href, children }) => (
  <Link href={href} passHref>
    {small ? <Button size="small">{children}</Button> : <Button>{children}</Button>}
  </Link>
);

export default ButtonLink;
