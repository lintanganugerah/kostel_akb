import React from 'react';
import Image from 'next/image';
import {Button} from "@/components/button";
import {BedDouble, DoorOpen, ArrowRight} from "lucide-react";
import Link from "next/link";

interface PropertyCardProps {
    id: string;
    imageUrl: string;
    title: string;
    description?: string;
    totalRoomsType: number;
    totalRooms: number;
}

export function PropertyCard({id, imageUrl, title, description, totalRoomsType, totalRooms}: PropertyCardProps) {
    return (
        <Link href={`/dashboard/properti/${id}`} className="block group">
            <div
                className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                {/* Bagian Gambar */}
                <div className="relative w-full h-48">
                    <Image
                        src={imageUrl}
                        alt={`Gambar untuk ${title}`}
                        layout="fill"
                        objectFit="cover"
                    />
                </div>

                {/* Bagian Konten */}
                <div className="p-4 flex flex-col flex-grow">
                    {/* Judul Properti */}
                    <h3 className="font-raleway font-bold text-xl mb-2 text-gray-800 truncate">{title}</h3>
                    <h5 className="font-raleway text-sm mb-2 text-gray-800">{description ?? ""}</h5>

                    {/* Detail Informasi Kamar */}
                    <div className="flex flex-col gap-2 text-gray-600 mb-4">
                        <div className="flex items-center gap-2">
                            <BedDouble size={16} className="text-primary"/>
                            <span>{totalRoomsType} Tipe Kamar</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <DoorOpen size={16} className="text-primary"/>
                            <span>{totalRooms} Total Kamar</span>
                        </div>
                    </div>

                    {/* Tombol Aksi (diletakkan di bagian bawah) */}
                    <div className="mt-auto pt-2">
                        <Button size={"sm"} variant={"outlinePrimary"} className="w-full cursor-pointer">
                            Kelola Properti
                            <ArrowRight size={16} className="ml-2"/>
                        </Button>
                    </div>
                </div>
            </div>
        </Link>
    );
}