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

const data = {
  user: {
    name: "r3pic",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  bundles: [
    {
      title: '꾸러미이름1',
      url: '/home',
    },
    {
      title: '꾸러미이름2',
      url: '/home'
    }
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props} >
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <NavLink to='/home'>
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <PackageOpenIcon className="size-7" />
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
        <NavMain bundles={data.bundles} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
