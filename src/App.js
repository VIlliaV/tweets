import { Navigate, Route, Routes } from 'react-router-dom';

import { Layout } from './components/Layout/Layout';
import { lazy } from 'react';
// import Test from 'pages/Test/Test';

const Home = lazy(() => import('pages/Home/Home'));
const Users = lazy(() => import('pages/Users/Users'));
const Test = lazy(() => import('pages/Test/Test'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="users" element={<Users />} />
        <Route path="test" element={<Test />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;
