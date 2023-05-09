import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Container } from './Layout.styled';
import { Footer } from 'components/Footer/Footer';
import { AppBar } from 'components/AppBar/AppBar';
import { Toaster } from 'react-hot-toast';

export const Layout = () => {
  return (
    <Container>
      <Toaster />
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Footer />
    </Container>
  );
};
