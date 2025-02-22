"use client"

import {MoreHorizontal, Trash2} from 'lucide-react';

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar.tsx';
import {NavLink, useNavigate} from 'react-router';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem, DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu.tsx';
import {Separator} from '@/components/ui/separator.tsx';
import CreateBundleButton from '@/components/bundle/create-bundle-button.tsx';
import {Bundle} from '@/types';
import axiosInstance from '@/api/api.ts';
import UpdateBundleDropdownItem from '@/components/bundle/update-bundle-dropdown-item.tsx';

export function NavMain({
  bundles,
}: {
  bundles: Bundle[]
}) {
  const navigate = useNavigate();
  const { isMobile } = useSidebar();
  const isGuest = localStorage.getItem('isGuest') === 'true';

  async function onBundleDeleteClick(bundleId: string) {
    const response = await axiosInstance.delete(`bundles/${bundleId}`);

    if (response.status === 204) {
      navigate(0);
    }
  }

  return (
    <SidebarGroup>
      <SidebarGroupLabel className="flex items-center justify-between">
        <span>꾸러미 목록</span>
        {!isGuest && <CreateBundleButton />}
      </SidebarGroupLabel>

      <Separator className='m-1'/>
      <SidebarMenu>
        {isGuest
          ? <p className='mt-4 text-center text-muted-foreground text-xs'>로그인 이후 이용 가능합니다.</p>
          : bundles.map((item, i) => (
            <SidebarMenuItem key={i}>
              <SidebarMenuButton asChild>
                <NavLink to={`/bundle/${item.id}`}>
                  <span>{ item.title }</span>
                </NavLink>
              </SidebarMenuButton>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuAction showOnHover>
                    <MoreHorizontal />
                    <span className="sr-only">More</span>
                  </SidebarMenuAction>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="w-48"
                  side={isMobile ? "bottom" : "right"}
                  align={isMobile ? "end" : "start"}
                >
                  <UpdateBundleDropdownItem bundle={item} />
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onSelect={() => onBundleDeleteClick(item.id)}>
                    <Trash2 className="text-muted-foreground" />
                    <span>꾸러미 삭제</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenuItem>
          ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}
