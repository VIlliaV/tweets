import { Route, Routes } from 'react-router-dom';

import { Layout } from './components/Layout/Layout';
import { lazy } from 'react';

const Home = lazy(() => import('pages/Home/Home'));
const Users = lazy(() => import('pages/Users/Users'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="users" element={<Users />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
