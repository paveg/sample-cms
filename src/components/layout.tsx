import * as React from 'react';
import { Container } from '@material-ui/core';
import Header from '../layouts/header';
import Footer from '../layouts/footer';

const Layout: React.FC = ({ children }) => (
  <>
    <Header />
    <Container>{children}</Container>
    <Footer />
  </>
);

export default Layout;
