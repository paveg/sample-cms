import * as React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import { AppBar } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import styled from 'styled-components';
import Container from '@material-ui/core/Container';
import { useRouter } from 'next/router';
import ButtonLink from '../components/button_link';

const HeaderContainer = styled(Container)``;

const Header: React.FC = () => {
  const { route } = useRouter();
  const textColor = (href) => (route === href ? 'textPrimary' : 'textSecondary');

  return (
    <HeaderContainer>
      <AppBar color="transparent" position="static" elevation={0}>
        <Toolbar>
          <Grid container justify="flex-start" alignItems="center">
            <Grid item xs={6}>
              <Typography variant="h4">BLOG TITLE</Typography>
            </Grid>
            <Grid item>
              <ButtonGroup>
                <ButtonLink href="/">
                  <Typography color={textColor('/')} variant="button">
                    HOME
                  </Typography>
                </ButtonLink>
                <ButtonLink href="/about">
                  <Typography color={textColor('/about')} variant="button">
                    ABOUT
                  </Typography>
                </ButtonLink>
              </ButtonGroup>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </HeaderContainer>
  );
};

export default Header;
