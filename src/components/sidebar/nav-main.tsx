"use client"

import {MoreHorizontal, Pencil, Trash2} from 'lucide-react';

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar.tsx';
import {NavLink} from 'react-router';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem, DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu.tsx';
import {Separator} from '@/components/ui/separator.tsx';
import CreateBundleButton from '@/components/sidebar/create-bundle-button.tsx';

export function NavMain({
  bundles,
}: {
  bundles: {
    title: string,
    url: string,
  }[]
}) {
  const { isMobile } = useSidebar();

  return (
    <SidebarGroup>
      <SidebarGroupLabel className="flex items-center justify-between">
        <span>꾸러미 목록</span>
        <CreateBundleButton />
      </SidebarGroupLabel>

      <Separator className='m-1'/>
      <SidebarMenu>
        {bundles.map((item) => (
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <NavLink to={item.url}>
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
                <DropdownMenuItem>
                  <Pencil className="text-muted-foreground" />
                  <span>꾸러미 정보 수정</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
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
