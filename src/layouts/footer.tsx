import * as React from 'react';
import styled from 'styled-components';
import { Container } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import ButtonLink from '../components/button_link';

const FooterContainer = styled(Container)`
  text-align: center;
  bottom: 0;
  width: 100% !important;
  height: 30px !important;
`;

const Footer: React.FC = () => (
  <FooterContainer>
    <ul>
      <li>
        <ButtonLink small href="/contact">
          <Typography color="textSecondary" variant="caption">
            contact
          </Typography>
        </ButtonLink>
      </li>
      <li>
        <ButtonLink small href="/privacy-policy">
          <Typography color="textSecondary" variant="caption">
            privacy policy
          </Typography>
        </ButtonLink>
      </li>
      <li>
        <Typography color="textSecondary" variant="caption">
          Copyright 2020 Ryota Ikezawa.
        </Typography>
      </li>
    </ul>
  </FooterContainer>
);

export default Footer;
