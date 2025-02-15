"use client";

import { NamespaceSelector } from "./_NamespaceSelector";
import { ProfileMenu } from "./_ProfileMenu";

export function Header() {
  return (
    <header className="h-16 border-b flex items-center justify-between px-6 bg-white">
      <NamespaceSelector />
      <ProfileMenu />
    </header>
  );
}