import { Suspense, useState, useTransition } from 'react';

import AdminData from './AdminData';

const Home = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isPending, startTransiition] = useTransition();

  return (
    <>
      <h1>Home</h1>
      <button
        onClick={() => {
          import('../sum.js').then((module) => {
            alert(module.sum(2, 2));
          });
        }}
      >
        Add 2 + 2
      </button>
      <br />
      <br />
      <button
        onClick={() => {
          startTransiition(() => setIsAdmin((prev) => !prev));
        }}
      >
        Toggle Admin
      </button>
      {isPending && <h2> Loafinh</h2>}
      <Suspense fallback={<h2>lOADING</h2>}>
        {isAdmin ? <AdminData /> : <h2>Not Admin</h2>}
      </Suspense>
    </>
  );
};

export default Home;
