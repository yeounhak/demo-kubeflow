"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Globe, LogOut, BookOpen, Info } from "lucide-react";

export function ProfileMenu() {
  return (
    <div className="flex items-center space-x-2">
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center space-x-2 hover:bg-gray-100 rounded-full p-2 transition-colors">
          <Avatar className="h-8 w-8">
            <AvatarFallback className="bg-blue-600 text-white">UY</AvatarFallback>
          </Avatar>
          <span className="text-sm font-medium">unhak.yeo</span>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48">
          <DropdownMenuItem className="flex items-center">
            <Globe className="mr-2 h-4 w-4" />
            <span>Language</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center">
            <LogOut className="mr-2 h-4 w-4" />
            <span>Logout</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="flex items-center">
            <BookOpen className="mr-2 h-4 w-4" />
            <span>Open Source License</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center">
            <Info className="mr-2 h-4 w-4" />
            <span>About</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}