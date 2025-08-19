"use client";

import {Building, DollarSign, LayoutDashboard, Receipt, UsersRound} from "lucide-react";
import Link from "next/link";
import React from "react";
import {usePathname} from "next/navigation";

const navItems = [
    {name: "Dashboard", href: "/dashboard", icon: LayoutDashboard},
    {name: "Penyewa", href: "/dashboard/penyewa", icon: UsersRound},
    {name: "Tagihan", href: "/dashboard/tagihan", icon: Receipt},
    {name: "Properti", href: "/dashboard/properti", icon: Building},
    {name: "Keuangan", href: "/dashboard/keuangan", icon: DollarSign},
];

export function NavItems() {
    const pathname = usePathname();

    return <nav>
        <ul className="flex flex-col gap-2 ">

            {navItems.map((item) => {
                const isActive = pathname === item.href;
                const Icon = item.icon;

                return (
                    <Link key={item.name} href={item.href}>
                        <li
                            className={`flex gap-6 p-2 items-center ${isActive ? 'text-white' : 'hover:bg-gray-100 text-gray-400 hover:text-gray-700 rounded-md'} transition-colors duration-200`}>
                            <Icon size={16}/>
                            {item.name}
                        </li>
                    </Link>
                );
            })}
        </ul>
    </nav>;
}