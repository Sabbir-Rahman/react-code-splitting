import { Routes, Route, Outlet, Link } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Store from './components/Store';
import About from './components/About';

const Home = lazy(() => wait(1000).then(() => import('./components/Home')));

function App() {
  return (
    <Routes>
      <Route path="/" element={<NavWrapper />}>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
}

function NavWrapper() {
  return (
    <>
      <nav style={{ display: 'flex', gap: '1rem' }}>
        <Link to="/">Home</Link>
        <Link to="/store">Store</Link>
        <Link to="/about">About</Link>
      </nav>
      <Suspense fallback={<h1>Loading ...</h1>}>
        <Outlet />
      </Suspense>
    </>
  );
}

function wait(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

export default App;
