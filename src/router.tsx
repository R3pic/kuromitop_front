import {BrowserRouter, Route, Routes} from 'react-router';
import Layout from '@/layout/layout.tsx';
import IndexPage from '@/pages/index.page.tsx';
import AuthPage from '@/pages/auth.page.tsx';
import AxiosInterceptor from '@/components/axios-interceptor.tsx';
import NotFoundPage from '@/pages/not-found.page.tsx';
import ErrorPage from '@/pages/error.page.tsx';
import BundlePage from '@/pages/bundle.page.tsx';
import TrackPage from '@/pages/track.page.tsx';
import {useState} from 'react';
import {Auth} from '@/types';
import {AuthContext} from '@/context/user-context.ts';
import {OwnerContext} from '@/context/owner-context.ts';

function Router() {
  const [auth, setAuth] = useState<Auth | null>(null);
  const [ownerId, setOwnerId] = useState<number>(-1);

  return (
    <BrowserRouter>
      <AxiosInterceptor />
      <AuthContext.Provider value={{
        auth,
        setAuth,
      }}>
        <OwnerContext.Provider value={{
          ownerId,
          setOwnerId
        }}>
          <Routes>
            <Route index element={<AuthPage />}/>
            <Route element={<Layout/>}>
              <Route path="/home" element={<IndexPage />} />
                <Route path="/bundle/:id" element={<BundlePage />} />
                <Route path="/track/:id" element={<TrackPage />} />
            </Route>

            <Route path='error' element={<ErrorPage />} />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </OwnerContext.Provider>
      </AuthContext.Provider>
    </BrowserRouter>
  );
}

export default Router;
