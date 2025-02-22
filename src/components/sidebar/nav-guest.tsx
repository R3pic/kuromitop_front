import {SidebarMenu, SidebarMenuButton, SidebarMenuItem} from '@/components/ui/sidebar.tsx';
import {ChevronsUpDown} from 'lucide-react';
import {Avatar, AvatarFallback} from '@/components/ui/avatar.tsx';
import {NavLink} from 'react-router';

export default function NavGuest() {
  return (
    <SidebarMenu>
      <NavLink to={'/'}>
        <SidebarMenuItem>
          <SidebarMenuButton size="lg" className='cursor-pointer'>
            <Avatar className="h-8 w-8 rounded-lg">
              <AvatarFallback className="rounded-lg">CN</AvatarFallback>
            </Avatar>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-semibold">로그인이 필요합니다.</span>
            </div>
            <ChevronsUpDown className="ml-auto size-4" />
          </SidebarMenuButton>
        </SidebarMenuItem>
      </NavLink>
    </SidebarMenu>
  )
}