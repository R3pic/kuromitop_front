import {BrowserRouter, Route, Routes} from 'react-router';
import Layout from '@/layout/layout.tsx';
import IndexPage from '@/pages/index.page.tsx';
import AuthPage from '@/pages/auth.page.tsx';
import AxiosInterceptor from '@/components/axios-interceptor.tsx';
import NotFoundPage from '@/pages/not-found.page.tsx';
import ErrorPage from '@/pages/error.page.tsx';
import BundlePage from '@/pages/bundle.page.tsx';
import TrackPage from '@/pages/track.page.tsx';

function Router() {
  return (
    <BrowserRouter>
      <AxiosInterceptor />
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
    </BrowserRouter>
  );
}

export default Router;
