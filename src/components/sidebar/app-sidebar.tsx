import * as React from "react"
import { PackageOpenIcon } from 'lucide-react';

import { NavMain } from "@/components/sidebar/nav-main.tsx"
import { NavUser } from "@/components/sidebar/nav-user.tsx"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar.tsx"
import {NavLink} from 'react-router';
import axiosInstance from '@/api/api.ts';
import {useContext, useEffect, useState} from 'react';
import {Bundle, User} from '@/types';
import {AuthContext} from '@/context/user-context.ts';
import NavGuest from '@/components/sidebar/nav-guest.tsx';

export function AppSidebar({...props}: React.ComponentProps<typeof Sidebar>) {
  const authContext = useContext(AuthContext);
  const [user, setUser] = useState<User | null>(null);
  const [bundles, setBundles] = useState<Bundle[]>([]);
  const isGuest = localStorage.getItem('isGuest') === 'true';
  useEffect(() => {
    async function fetch() {
      if (localStorage.getItem('isGuest') === 'false') {
        console.log('로그인 유저 정보 가져오기');
        const response = await axiosInstance.get<{
          user: User,
          bundles: Bundle[],
        }>('/users/me');
        const { user, bundles } = response.data;
        console.log(user);
        authContext?.setAuth({
          userId: user.id,
          username: user.display_name,
        });
        setUser(user);
        setBundles(bundles);
      }
    }

    void fetch();
  }, []);

  return (
    <Sidebar variant="inset" {...props} >
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <NavLink to='/home'>
                <div
                  className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <PackageOpenIcon className="size-7"/>
                </div>
                <div className="grid flex-1 text-left text-2xl leading-tight">
                  <span className="truncate font-semibold">꾸러미탑</span>
                </div>
              </NavLink>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain
          bundles={bundles}
          setBundles={setBundles}
        />
      </SidebarContent>
      <SidebarFooter>
        {isGuest ? <NavGuest /> : <NavUser user={user}/>}
      </SidebarFooter>
    </Sidebar>
  )
}
