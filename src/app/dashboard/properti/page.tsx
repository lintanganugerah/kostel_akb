"use client";

import React from 'react';
import {Button} from "@/components/button";
import {Building, HousePlus} from "lucide-react";
import {PropertyCard} from "@/app/dashboard/properti/_components/propertyCard";
import {getProperty, getRoomTypesByPropertyId} from "@/lib/dummyData/dataProperti"; // Sesuaikan path jika perlu

function Page() {
    const properties = getProperty();

    return (
        <div className="grid grid-cols-1 grid-rows-[auto_1fr] gap-4 min-h-screen">
            {/* Title Page Name */}
            <div
                className="grid grid-rows-2 gap-2 md:grid-rows-1 md:grid-cols-[1fr_auto] items-center rounded-2xl md:my-5">
                <div className="flex flex-col">
                    <p className="font-raleway font-bold text-3xl">Properti</p>
                    <p className="font-raleway">Kelola properti anda disini</p>
                </div>
                <Button size={"md"} variant={"fillPrimary"}>
                    <HousePlus size={16} className={"mr-4"}/>
                    Tambah Properti Baru
                </Button>
            </div>
            {/* Card Daftar Properti */}
            <div
                className="bg-accent-secondary rounded-2xl row-span-3 border-1 border-gray-300 p-4 flex flex-col gap-8">
                <div className="flex items-center gap-4">
                    <div className='bg-accent-primary p-2 rounded-lg'>
                        <Building className={'w-5 h-5 text-accent-secondary'}/>
                    </div>
                    <p className="font-bold font-raleway text-lg">Daftar Properti Anda</p>
                </div>
                {/* Card Properti */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {properties.map((property) => {
                        const roomTypesForProperty = getRoomTypesByPropertyId(property.id);
                        const totalRoomsType = roomTypesForProperty.length;
                        const totalRooms = roomTypesForProperty.reduce((sum, type) => sum + type.roomCount, 0);
                        const description = `${property.alamat}, ${property.kelurahan}, ${property.kecamatan}`;

                        return (
                            <PropertyCard
                                key={property.id}
                                id={property.id}
                                title={property.title}
                                imageUrl={property.imageUrl}
                                totalRoomsType={totalRoomsType}
                                totalRooms={totalRooms}
                                description={description}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Page;