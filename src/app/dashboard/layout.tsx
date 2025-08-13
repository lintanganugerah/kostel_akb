import React from 'react';
import {Navbar} from "@/app/dashboard/_component/navbar";

function DashboardLayout({children}: Readonly<{ children: React.ReactNode }>) {
    return (
        <div
            className="grid grid-cols-1 md:grid-rows-1 grid-rows-[72px_1fr] md:grid-cols-[256px_1fr] min-h-screen gap-4">
            {/* Navbar */}
            <Navbar/>
            {/* Content */}
            <div className="p-4">{children}</div>
        </div>
    );
}

export default DashboardLayout;