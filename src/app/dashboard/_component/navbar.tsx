import {DollarSign, LayoutDashboard, UsersRound} from "lucide-react";
import Link from "next/link";
import React from "react";

export function Navbar() {
    return <div
        className="flex justify-between md:justify-start md:items-start items-center md:flex-col p-4 md:gap-4 bg-accent-secondary border-gray-300 border-1">
        <div className="flex items-center gap-3">
            <div
                className="bg-blue-600 text-white w-10 h-10 flex items-center justify-center rounded-lg font-bold text-xl">
                L
            </div>
            <span className="font-bold text-xl text-gray-800">Logo Inc.</span>
        </div>
        <hr className=" border-t-1  w-full opacity-25 dark:via-neutral-400"/>
        {/* ===== Navbar DESKTOP (Side) ===== */}
        <div className="hidden md:block w-full">
            <nav>
                <ul className="flex flex-col gap-2 text-gray-600">
                    <li className={"flex gap-6 p-2 items-center hover:bg-gray-400/40 hover:text-gray-700 rounded-md transition-colors duration-200"}>
                        <LayoutDashboard size={16}/>
                        <Link href="/">Dashboard</Link>
                    </li>
                    <li className={"flex gap-6 p-2 items-center hover:bg-gray-400/40 hover:text-gray-700 rounded-md transition-colors duration-200"}>
                        <UsersRound size={16}/>
                        <Link href="/">Penyewa</Link>
                    </li>
                    <li className={"flex gap-6 p-2 items-center hover:bg-gray-400/40 hover:text-gray-700 rounded-md transition-colors duration-200"}>
                        <DollarSign size={16}/>
                        <Link href="/">Laporan Keuangan</Link>
                    </li>
                </ul>
            </nav>
        </div>
        {/* ===== Navbar MOBILE (Top) ===== */}
        <div className="md:hidden block text-center text-black">
            <button className="text-2xl">☰</button>
        </div>
    </div>;
}