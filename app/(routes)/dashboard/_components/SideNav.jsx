"use client";

import { UserButton } from "@clerk/nextjs";
import { LayoutGrid, PiggyBank, ReceiptText } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function SideNav() {
  const menuList = [
    {
      id: 1,
      name: "Dashboard",
      icon: LayoutGrid,
      path: "/dashboard",
    },
    {
      id: 2,
      name: "Budgets",
      icon: PiggyBank,
      path: "/dashboard/budgets",
    },
    {
      id: 3,
      name: "Expenses",
      icon: ReceiptText,
      path: "/dashboard/expenses",
    },
  ];

  const path = usePathname();

  return (
    <div className="h-screen p-4 border shadow-sm">
      <h1 className="font-bold text-2xl text-primary">Nautilus Wealth</h1>
      <div className="mt-5">
        {menuList.map((menu, index) => (
          <Link href={menu.path} key={menu.path}>
            <h2
              className={`flex gap-2 items-center text-gray-500 mb-2 font-medium p-5 cursor-pointer rounded-md hover:text-primary hover:bg-slate-100 ${
                path == menu.path && "!text-primary !bg-blue-100"
              }`}
            >
              <menu.icon /> {menu.name}
            </h2>
          </Link>
        ))}
      </div>

      <div className="fixed bottom-10 p-5 flex gap-2 items-center">
        <UserButton />
        Profile
      </div>
    </div>
  );
}

export default SideNav;
