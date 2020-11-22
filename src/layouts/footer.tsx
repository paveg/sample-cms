import * as React from 'react';
import styled from 'styled-components';
import { Container } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const FooterContainer = styled(Container)`
  text-align: center;
  position: absolute;
  bottom: 0;
  width: 100% !important;
  height: 30px !important;
`;

const Footer: React.FC = () => (
  <FooterContainer>
    <Typography color="textSecondary" variant="caption">
      Copyright 2020 Ryota Ikezawa.
    </Typography>
  </FooterContainer>
);

export default Footer;
