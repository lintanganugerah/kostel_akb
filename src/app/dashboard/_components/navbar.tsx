import React from "react";
import {NavItems} from "@/app/dashboard/_components/navItems";

export function Navbar() {
    return <div
        className="fixed top-0 left-0 right-0 z-50 flex justify-between bg-black border-gray-300 border-1 rounded-2xl shadow-lg m-4 p-4 md:relative md:justify-start md:items-start md:flex-col md:p-6 md:gap-4">
        <div className="flex items-center gap-3">
            <div
                className="bg-accent-secondary text-gray-800 w-10 h-10 flex items-center justify-center rounded-lg font-bold text-xl">
                K
            </div>
            <span className="font-bold text-xl text-white">Kostel Host</span>
        </div>
        <hr className="hidden md:block border-t-1  w-full opacity-25 dark:via-neutral-400"/>
        {/* ===== Navbar DESKTOP (Side) ===== */}
        <div className="hidden md:block w-full">
            <NavItems/>
        </div>
        {/* ===== Navbar MOBILE (Top) ===== */}
        <div className="md:hidden block text-center text-black">
            <button className="text-2xl">☰</button>
        </div>
    </div>;
}