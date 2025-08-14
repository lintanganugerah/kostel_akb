import {DollarSign, LayoutDashboard, UsersRound} from "lucide-react";
import Link from "next/link";
import React from "react";

export function NavItems() {
    return <nav>
        <ul className="flex flex-col gap-2 text-gray-400">
            <li className={"flex gap-6 p-2 items-center hover:bg-gray-100 hover:text-gray-700 rounded-md transition-colors duration-200"}>
                <LayoutDashboard size={16}/>
                <Link href="/dashboard">Dashboard</Link>
            </li>
            <li className={"flex gap-6 p-2 items-center hover:bg-gray-100 hover:text-gray-700 rounded-md transition-colors duration-200"}>
                <UsersRound size={16}/>
                <Link href="/">Penyewa</Link>
            </li>
            <li className={"flex gap-6 p-2 items-center hover:bg-gray-100 hover:text-gray-700 rounded-md transition-colors duration-200"}>
                <DollarSign size={16}/>
                <Link href="/">Laporan Keuangan</Link>
            </li>
        </ul>
    </nav>;
}