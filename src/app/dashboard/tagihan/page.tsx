"use client";

import React from 'react';
import {Button} from "@/components/button";
import SearchFilter from "@/app/dashboard/penyewa/_components/searchFilter";
import {Calendar, CircleDollarSign, Plus, Receipt, Send, Users} from "lucide-react";
import {ResponsiveTable} from "@/components/responsiveTable";
import {TagihanStatusBadge} from "@/components/tagihanStatusBadge";
import {TagihanData} from "@/type/penyewa";

function Page() {
    const tagihanData: TagihanData[] = [
        {
            id: 1,
            invoice: '12DASERCQAZ',
            nama: 'Budi Santoso',
            kamar: 'Kamar 101',
            status: 'Lunas',
            sewa: 'Rp 850.000',
            jatuhTempo: '15 Agu 2025'
        },
        {
            id: 2,
            invoice: '12DASERCQAZ',
            nama: 'Citra Lestari',
            kamar: 'Kamar 102',
            status: 'Lunas',
            sewa: 'Rp 850.000',
            jatuhTempo: '15 Agu 2025'
        },
        {
            id: 3,
            invoice: '12DASERCQAZ',
            nama: 'Doni Firmansyah',
            kamar: 'Kamar 203',
            status: 'Terlambat',
            sewa: 'Rp 1.700.000',
            jatuhTempo: '15 Jul 2025'
        },
        {
            id: 4,
            invoice: '12DASERCQAZ',
            nama: 'Eka Putri',
            kamar: 'Kamar 301',
            status: 'Lunas',
            sewa: 'Rp 900.000',
            jatuhTempo: '15 Agu 2025'
        },
    ];

    const columns = [
        {
            header: 'Invoice',
            accessor: 'invoice',
        },
        {
            header: 'Penyewa',
            accessor: 'nama',
        },
        {
            header: 'Kamar',
            accessor: 'kamar',
        },
        {
            header: 'Tagihan',
            accessor: 'sewa',
        },
        {
            header: 'Jatuh Tempo',
            accessor: 'jatuhTempo',
        },
        {
            header: 'Status',
            accessor: 'status',
            render: (dataRow: TagihanData) => <TagihanStatusBadge status={dataRow.status}/>,
        },
    ] as const;

    const tagihanDataLunas = tagihanData.filter((data) => data.status == 'Lunas');

    return (
        <div className="grid grid-cols-1 grid-rows-auto gap-4 min-h-screen">
            {/* Title Page Name */}
            <div
                className="grid grid-rows-2 gap-2 md:grid-rows-1 md:grid-cols-[1fr_auto] items-center rounded-2xl md:my-5">
                <div className="flex flex-col">
                    <p className="font-raleway font-bold text-3xl">Kelola Tagihan</p>
                    <p className="font-raleway">Kelola tagihan dan pembayaran penyewa yang jatuh tempo disini</p>
                </div>
                <Button size={"md"} variant={"fillPrimary"}><Send size={16} className={"mr-4"}/>Kirim Semua
                    Tagihan</Button>
            </div>
            {/* Card Total Tagihan */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-accent-secondary border-1 border-gray-300 rounded-xl p-4">
                    <div className="flex items-center justify-between">
                        <div className="flex flex-col">
                            <p>Total Tagihan Tertunggak</p>
                            <p className="font-bold text-2xl truncate">
                                Rp. 2.500.000
                            </p>
                        </div>
                        <div className='bg-accent-primary p-2 rounded-lg'>
                            <CircleDollarSign className={'w-5 h-5 text-accent-secondary'}/>
                        </div>
                    </div>
                </div>
                <div className="bg-accent-secondary border-1 border-gray-300 rounded-xl p-4">
                    <div className="flex items-center justify-between">
                        <div className="flex flex-col">
                            <p>Tagihan Terlambat</p>
                            <p className="font-bold text-2xl truncate">
                                3
                            </p>
                        </div>
                        <div className='bg-accent-primary p-2 rounded-lg'>
                            <Calendar className={'w-5 h-5 text-accent-secondary'}/>
                        </div>
                    </div>
                </div>

                <div className="bg-accent-secondary border-1 border-gray-300 rounded-xl p-4">
                    <div className="flex items-center justify-between">
                        <div className="flex flex-col">
                            <p>Total Invoice</p>
                            <p className="font-bold text-2xl truncate">
                                Rp. 2.500.000
                            </p>
                        </div>
                        <div className='bg-accent-primary p-2 rounded-lg'>
                            <Receipt className={'w-5 h-5 text-accent-secondary'}/>
                        </div>
                    </div>
                </div>
            </div>
            {/* Card Search Filter */}
            <SearchFilter/>
            {/* Table Tagihan */}
            <div
                className="bg-accent-secondary rounded-2xl row-span-3 border-1 border-gray-300 p-4 flex flex-col gap-8">
                <div className="flex items-center gap-4">
                    <div className='bg-accent-primary p-2 rounded-lg'>
                        <Receipt className={'w-5 h-5 text-accent-secondary'}/>
                    </div>
                    <p className="font-bold font-raleway text-lg">Daftar Tagihan Terlambat</p>
                </div>
                <ResponsiveTable columns={columns} dataTabel={[tagihanData[2]]}/>
            </div>
            <div
                className="bg-accent-secondary rounded-2xl row-span-3 border-1 border-gray-300 p-4 flex flex-col gap-8">
                <div className="flex items-center gap-4">
                    <div className='bg-accent-primary p-2 rounded-lg'>
                        <Receipt className={'w-5 h-5 text-accent-secondary'}/>
                    </div>
                    <p className="font-bold font-raleway text-lg">Daftar Tagihan Lunas</p>
                </div>
                <ResponsiveTable columns={columns} dataTabel={tagihanDataLunas}/>
            </div>
        </div>
    );
}

export default Page;