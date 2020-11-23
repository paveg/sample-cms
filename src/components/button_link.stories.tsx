import * as React from 'react';
import ButtonLink from './button_link';

export default {
  title: 'ButtonLink',
};

export const buttonLink = () => <ButtonLink href="/">root</ButtonLink>;
export const smallButtonLink = () => (
  <ButtonLink small href="/">
    root
  </ButtonLink>
);
