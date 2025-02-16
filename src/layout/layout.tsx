import {Outlet} from 'react-router';
import {SidebarProvider} from '@/components/ui/sidebar.tsx';
import {AppSidebar} from '@/components/sidebar/app-sidebar.tsx';

export default function Layout() {
  return (
    <div className='min-w-screen min-h-screen bg-background flex items-center justify-center'>
      <SidebarProvider>
        <AppSidebar />
        <main className='flex flex-col py-5'>
          <Outlet/>
        </main>
      </SidebarProvider>
    </div>
  )
}