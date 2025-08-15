import React from 'react';
import {Button} from "@/components/button";
import {Activity, Calendar, Eye, HomeIcon, OctagonAlert, Plus, TrendingUp, Users} from "lucide-react";

function Page() {
    return (
        <div className="grid grid-rows-[240px_auto_1fr] min-h-screen gap-8">
            {/* Hero Section */}
            <div
                className="flex flex-col relative justify-center rounded-2xl hero-section-image bg-cover bg-center text-white font-raleway overflow-hidden">
                <div className="p-4 md:p-16">
                    <h1 className="font-bold text-xl md:text-4xl">Selamat Datang, Pak Budi</h1>
                    <h3 className="text-md md:text-2xl font-light">Ini ringkasan keuangan kost Anda bulan ini.
                        Semua
                        terlihat baik!
                    </h3>
                    <div className="flex md:flex-row flex-col gap-2 mt-6">
                        <Button size={'md'} variant={"transparentSecondary"}>
                            <Plus className={'w-5 h-5 mr-2'}/>
                            Tambah Penyewa
                        </Button>
                        <Button size={'md'} variant={"transparentSecondary"}>
                            <Eye className={'w-5 h-5 mr-2'}/>
                            Lihat Keuangan
                        </Button>
                    </div>
                </div>
            </div>
            {/* Card Performa */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
                <div
                    className="flex flex-col bg-accent-secondary border-1 border-gray-300 shadow-md rounded-2xl p-4 gap-2 drop-shadow-md hover:scale-101 hover:drop-shadow-xl transition-all duration-500">
                    <div className="flex justify-between items-center">
                        <div className="font-light text-2xl">Total Kamar</div>
                        <div className='bg-accent-primary p-2 rounded-lg'>
                            <HomeIcon className={'w-5 h-5 text-accent-secondary'}/>
                        </div>
                    </div>
                    <div className="flex flex-col"><p className="font-bold text-3xl">10</p><p className="text-sm">6
                        terisi penuh</p></div>
                    <div className="flex gap-2 text-sm"><p className=" text-green-700">+8%</p><p>dari bulan
                        lalu</p></div>
                </div>
                <div
                    className="flex flex-col bg-accent-secondary border-1 border-gray-300 shadow-md rounded-2xl p-4 gap-2 drop-shadow-md hover:scale-101 hover:drop-shadow-xl transition-all duration-500">
                    <div className="flex justify-between items-center">
                        <div className="font-light text-2xl">Tingkat Hunian</div>
                        <div className='bg-accent-primary p-2 rounded-lg'>
                            <Users className={'w-5 h-5 text-accent-secondary'}/>
                        </div>
                    </div>
                    <div className="flex flex-col"><p className="font-bold text-3xl font-lato">60%</p><p
                        className="text-sm">Dari total
                        kamar</p>
                    </div>
                    <div className="flex gap-2 text-sm"><p className=" text-green-700 font-lato">+8%</p><p>Dari bulan
                        lalu</p></div>
                </div>
                <div
                    className="flex flex-col bg-accent-secondary border-1 border-gray-300 shadow-md rounded-2xl p-4 gap-2 drop-shadow-md hover:scale-101 hover:drop-shadow-xl transition-all duration-500">
                    <div className="flex justify-between items-center">
                        <div className="font-light text-2xl">Pendapatan</div>
                        <div className='bg-accent-primary p-2 rounded-lg'>
                            <TrendingUp className={'w-5 h-5 text-accent-secondary'}/>
                        </div>
                    </div>
                    <div className="flex flex-col"><p className="font-bold text-3xl">Rp. 20.500.000</p>
                        <p className="text-sm">Revenue
                            Bulan
                            ini</p></div>
                    <div className="flex gap-2 text-sm"><p className=" text-green-700">+10%</p><p>dari
                        bulan
                        lalu</p></div>
                </div>
                <div
                    className="flex flex-col bg-accent-secondary border-1 border-gray-300 shadow-md rounded-2xl p-4 gap-2 drop-shadow-md hover:scale-101 hover:drop-shadow-xl transition-all duration-500">
                    <div className="flex justify-between items-center">
                        <div className="font-light text-2xl">Tagihan Tertunggak</div>
                        <div className='bg-accent-primary p-2 rounded-lg'>
                            <OctagonAlert className={'w-5 h-5 text-accent-secondary'}/>
                        </div>
                    </div>
                    <div className="flex flex-col"><p className="font-bold text-3xl">3</p><p
                        className="text-sm">Perlu follow up</p></div>
                    <div className="flex gap-2 text-sm"><p className=" text-red-700">-2%</p><p>dari bulan
                        lalu</p></div>
                </div>
            </div>
            {/* Recent Activity & Tagihan Mendatang */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                {/* Recent Activity */}
                <div
                    className="grid grid-cols-1 grid-rows-[30px_1fr] gap-2 bg-accent-secondary border-1 border-gray-300 rounded-2xl p-4 drop-shadow-md hover:scale-101 hover:drop-shadow-xl transition-all duration-500">
                    {/* Header */}
                    <div className="flex gap-4 items-center">
                        <div className='bg-accent-primary p-2 rounded-lg'>
                            <Activity className={'w-5 h-5 text-accent-secondary'}/>
                        </div>
                        <p className='font-bold text-xl'>Recent Activity</p>
                    </div>
                    {/* List Daftar Activity */}
                    <ul className="flex flex-col gap-4 p-4">
                        {/* Item 1 */}
                        <li className="flex gap-4">
                            <div className="w-2 h-2 bg-gray-500 rounded-full mt-[7px]"></div>
                            <div>
                                <p className="text-gray-800">Ahmad Rizki melakukan pembayaran untuk bulan Agustus</p>
                                <p className="text-sm text-gray-400">2 jam yang lalu</p>
                            </div>
                        </li>

                        {/* Item 2 */}
                        <li className="flex gap-4">
                            <div className="w-2 h-2 bg-gray-500 rounded-full mt-[7px]"></div>
                            <div>
                                <p className="text-gray-800">Penyewa baru Dewi Lestari telah ditambahkan ke kamar 04</p>
                                <p className="text-sm text-gray-400">1 hari yang lalu</p>
                            </div>
                        </li>

                        {/* Item 3 */}
                        <li className="flex gap-4">
                            <div className="w-2 h-2 bg-gray-500 rounded-full mt-[7px]"></div>
                            <div>
                                <p className="text-gray-800">Pengingat tagihan dikirim ke 3 penyewa</p>
                                <p className="text-sm text-gray-400">2 hari yang lalu</p>
                            </div>
                        </li>

                        {/* Item 4 */}
                        <li className="flex gap-4">
                            <div className="w-2 h-2 bg-gray-500 rounded-full mt-[7px]"></div>
                            <div>
                                <p className="text-gray-800">Pengeluaran maintenance AC sebesar Rp 250.000</p>
                                <p className="text-sm text-gray-400">3 hari yang lalu</p>
                            </div>
                        </li>
                    </ul>
                </div>
                {/* Tagihan Mendatang */}
                <div
                    className="grid grid-cols-1 grid-rows-[30px_1fr] gap-2 bg-accent-secondary border-1 border-gray-300 rounded-2xl p-4 drop-shadow-md hover:scale-101 hover:drop-shadow-xl transition-all duration-500">
                    {/* Header */}
                    <div className="flex items-center gap-4">
                        <div className='bg-accent-primary p-2 rounded-lg'>
                            <Calendar className={'w-5 h-5 text-accent-secondary'}/>
                        </div>
                        <p className='font-bold text-xl'>Tagihan Mendatang</p>
                    </div>
                    {/* Content Daftar Tagihan */}
                    <ul className="flex flex-col gap-4 p-2 md:p-4">
                        {/* Item 1 */}
                        <li className="group flex flex-col md:flex-row md:items-center md:justify-between gap-3 p-4  border border-gray-200 rounded-lg shadow-sm transition-colors hover:bg-gray-50">
                            <div className="flex-1">
                                <p className="font-semibold text-gray-800">Siti Nurhaliza</p>
                                <p className="text-sm text-gray-500">Kamar 02</p>
                                <div className="flex items-center flex-wrap gap-2 mt-2">
                                    <span
                                        className="text-xs font-medium bg-gray-200 text-gray-700 px-2 py-0.5 rounded-full">Belum Bayar</span>
                                    <p className="text-xs text-gray-400">Jatuh tempo: 1 Agustus 2024</p>
                                </div>
                            </div>
                            <div
                                className="flex flex-col items-stretch gap-2 mt-3 md:mt-0 md:flex-row md:items-center md:gap-6">
                                <p className="font-semibold text-gray-700 text-left md:text-right">Rp 1.200.000</p>
                                <button
                                    className="w-full md:w-auto text-sm font-medium text-center text-gray-600 bg-white border-gray-300 px-4 py-2 rounded-lg shadow-sm hover:bg-gray-100 transition-colors">
                                    Lihat Detail
                                </button>
                            </div>
                        </li>

                        {/* Item 2  */}
                        <li className="group flex flex-col md:flex-row md:items-center md:justify-between gap-3 p-4  border-gray-200 rounded-lg shadow-sm transition-colors hover:bg-gray-50">
                            <div className="flex-1">
                                <p className="font-semibold text-gray-800">Budi Setiawan</p>
                                <p className="text-sm text-gray-500">Kamar 03</p>
                                <div className="flex items-center flex-wrap gap-2 mt-2">
                                    <span
                                        className="text-xs font-medium bg-red-700 text-white px-2 py-0.5 rounded-full">Terlambat</span>
                                    <p className="text-xs text-gray-400">Jatuh tempo: 10 Juli 2024</p>
                                </div>
                            </div>
                            <div
                                className="flex flex-col items-stretch gap-2 mt-3 md:mt-0 md:flex-row md:items-center md:gap-6">
                                <p className="font-semibold text-gray-700 text-left md:text-right">Rp 1.300.000</p>
                                <button
                                    className="w-full md:w-auto text-sm font-medium text-center text-gray-600 bg-white border border-gray-300 px-4 py-2 rounded-lg shadow-sm hover:bg-gray-100 transition-colors">
                                    Lihat Detail
                                </button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Page;