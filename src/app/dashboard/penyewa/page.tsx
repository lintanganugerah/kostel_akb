"use client";

import React from 'react';
import {Button} from "@/components/button";
import SearchFilter from "@/app/dashboard/penyewa/_components/searchFilter";
import {Plus, Users} from "lucide-react";
import {ResponsiveTable} from "@/components/responsiveTable";
import {PenyewaData} from "@/type/penyewa";

function Page() {
    const penyewaData: PenyewaData[] = [
        {
            id: 1,
            nama: 'Budi Santoso',
            kamar: 'Kamar 101',
            status: 'Lunas',
            sewa: 'Rp 850.000',
            jatuhTempo: '15 Agu 2025'
        },
        {
            id: 2,
            nama: 'Citra Lestari',
            kamar: 'Kamar 102',
            status: 'Lunas',
            sewa: 'Rp 850.000',
            jatuhTempo: '15 Agu 2025'
        },
        {
            id: 3,
            nama: 'Doni Firmansyah',
            kamar: 'Kamar 203',
            status: 'Terlambat',
            sewa: 'Rp 1.700.000',
            jatuhTempo: '15 Jul 2025'
        },
        {
            id: 4,
            nama: 'Eka Putri',
            kamar: 'Kamar 301',
            status: 'Lunas',
            sewa: 'Rp 900.000',
            jatuhTempo: '15 Agu 2025'
        },
    ];

    const columns = [
        {
            header: 'Penyewa',
            accessor: 'nama',
        },
        {
            header: 'Kamar',
            accessor: 'kamar',
        },
        {
            header: 'Sewa',
            accessor: 'sewa', // Diubah dari 'sewa'
        },
        {
            header: 'Jatuh Tempo',
            accessor: 'jatuhTempo',
        },
    ] as const;

    return (
        <div className="grid grid-cols-1 grid-rows-auto gap-4 min-h-screen">
            {/* Title Page Name */}
            <div
                className="grid grid-rows-2 gap-2 md:grid-rows-1 md:grid-cols-[1fr_auto] items-center rounded-2xl md:my-5">
                <div className="flex flex-col">
                    <p className="font-raleway font-bold text-3xl">Kelola Penyewa</p>
                    <p className="font-raleway">Kelola penyewa Anda, lacak pembayaran, dan simpan catatan penyewa.</p>
                </div>
                <Button size={"md"} variant={"fillPrimary"}><Plus size={16} className={"mr-4"}/> Tambah Penyewa</Button>
            </div>
            {/* Card Search Filter */}
            <SearchFilter/>
            {/* Table Penyewa */}
            <div
                className="bg-accent-secondary rounded-2xl row-span-3 border-1 border-gray-300 p-4 flex flex-col gap-8">
                <div className="flex items-center gap-4">
                    <div className='bg-accent-primary p-2 rounded-lg'>
                        <Users className={'w-5 h-5 text-accent-secondary'}/>
                    </div>
                    <p className="font-bold font-raleway text-lg">Daftar Penyewa</p>
                </div>
                <ResponsiveTable columns={columns} dataTabel={penyewaData}/>
            </div>
        </div>
    );
}

export default Page;