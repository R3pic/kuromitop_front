import {BrowserRouter, Route, Routes} from 'react-router';
import Layout from '@/layout/layout.tsx';
import IndexPage from '@/pages/index.page.tsx';
import AuthPage from '@/pages/auth.page.tsx';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<AuthPage />}/>
        <Route element={<Layout/>}>
          <Route path="/home" element={<IndexPage />}/>
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default Router;
