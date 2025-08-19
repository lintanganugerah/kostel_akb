"use client";

import React, {useState, ChangeEvent} from 'react';
import {
    getPropertyById,
    getRoomTypesByPropertyId,
    getRoomsByRoomTypeId,
    RoomType,
    Room
} from "@/lib/dummyData/dataProperti";
import {ArrowLeft, Edit, PlusCircle, DoorOpen, Save, X} from "lucide-react";
import Link from 'next/link';
import {Button} from "@/components/button";
import Image from 'next/image';
import {FormHargaTipeKamar} from "@/app/dashboard/properti/[id_properti]/_components/formHargaTipeKamar";

type NewRoomTypeData = {
    nama_tipe: string;
    jumlah_kamar: number;
    auto_generate_kamar: boolean;
    sewa_harian: number | null;
    sewa_mingguan: number | null;
    sewa_bulanan: number | null;
    sewa_tahunan: number | null;
};

function RoomStatusCard({room}: { room: Room }) {
    const statusStyles = {
        tersedia: {
            bg: 'bg-green-100',
            text: 'text-green-800',
            dot: 'bg-green-500'
        },
        dihuni: {
            bg: 'bg-red-100',
            text: 'text-red-800',
            dot: 'bg-red-500'
        },
        kosong_perbaikan: {
            bg: 'bg-yellow-100',
            text: 'text-yellow-800',
            dot: 'bg-yellow-500'
        }
    };
    const currentStatus = statusStyles[room.status];

    return (
        <div className={`flex-shrink-0 w-36 border rounded-lg p-3 text-center ${currentStatus.bg}`}>
            <p className="font-bold text-gray-800">{room.nomor_kamar}</p>
            <div className="flex items-center justify-center mt-1">
                <span className={`h-2 w-2 rounded-full ${currentStatus.dot} mr-2`}></span>
                <span className={`text-xs font-medium capitalize ${currentStatus.text}`}>
                    {room.status.replace('_', ' ')}
                </span>
            </div>
        </div>
    );
}

function RoomTypeCard({roomType}: { roomType: RoomType }) {
    // Ambil data kamar yang sesuai dengan tipe kamar ini
    const rooms = getRoomsByRoomTypeId(roomType.id);

    return (
        <div className="bg-white p-4 rounded-lg border flex flex-col">
            {/* Bagian info tipe kamar (tidak berubah) */}
            <h3 className="font-bold text-lg">{roomType.name}</h3>
            <p className="text-accent-primary font-semibold mt-1">
                Rp {roomType.monthlyRent.toLocaleString('id-ID')} / bulan
            </p>
            <div className="flex items-center gap-2 text-gray-500 mt-2">
                <DoorOpen size={16}/>
                <span>{roomType.roomCount} Total Unit</span>
            </div>
            <div className="mt-4 pt-4 border-t flex gap-2">
                <Button size="sm" variant="outlinePrimary" className="w-full">
                    <Edit size={14} className="mr-2"/> Edit Tipe
                </Button>
            </div>

            {/* Bagian baru: Daftar kamar yang bisa di-scroll horizontal */}
            <div className="mt-4 pt-4 border-t">
                <h4 className="text-sm font-semibold mb-3 text-gray-600">Daftar Kamar</h4>
                <div
                    className="flex space-x-3 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                    {rooms.length > 0 ? (
                        rooms.map(room => <RoomStatusCard key={room.id} room={room}/>)
                    ) : (
                        <p className="text-sm text-gray-500">Belum ada data kamar untuk tipe ini.</p>
                    )}
                </div>
            </div>
        </div>
    );
}

// --- Komponen Modal (Sekarang menjadi lebih sederhana) ---
function AddRoomTypeModal({isOpen, onClose}: { isOpen: boolean, onClose: () => void }) {
    if (!isOpen) return null;

    const handleSuccess = (data: NewRoomTypeData) => {
        console.log("Data Tipe Kamar Baru:", data);
        onClose(); // Tutup modal setelah submit berhasil
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4">
            <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-lg">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold text-xl">Tambah Tipe Kamar Baru</h3>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-800">
                        <X size={24}/>
                    </button>
                </div>
                {/* Panggil komponen form di sini */}
                <FormHargaTipeKamar
                    onCancel={onClose}
                    onSubmitSuccess={handleSuccess}
                />
            </div>
        </div>
    );
}

// --- Sub-komponen untuk Tampilan Detail ---
function DetailItem({label, value}: { label: string, value: string | undefined }) {
    return (
        <div>
            <p className="text-sm font-semibold text-gray-500">{label}</p>
            <p className="text-gray-800">{value}</p>
        </div>
    );
}

// --- Sub-komponen untuk Form Input Edit ---
function EditInput({label, name, value, onChange}: {
    label: string,
    name: string,
    value: string | undefined,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}) {
    return (
        <div>
            <label htmlFor={name} className="block text-sm font-semibold text-gray-500">{label}</label>
            <input
                type="text"
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-accent-primary focus:border-accent-primary sm:text-sm"
            />
        </div>
    );
}

// --- Komponen Utama Halaman ---
type PageProps = {
    params: { id_properti: string };
};

export default function DetailPropertiPage({params}: PageProps) {
    const propertyId = params.id_properti;
    const property = getPropertyById(propertyId);

    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState(property);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const roomTypes = getRoomTypesByPropertyId(propertyId);

    if (!property || !formData) {
        return (
            <div className="text-center py-10">
                <p>Properti tidak ditemukan.</p>
                <Link href="/dashboard/properti" className="text-accent-primary hover:underline mt-2 inline-block">
                    Kembali ke daftar properti
                </Link>
            </div>
        );
    }

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormData(prev => prev ? {...prev, [name]: value} : undefined);
    };

    const handleCancel = () => {
        setFormData(property);
        setIsEditing(false);
    };

    return (
        <div className="p-4 md:p-6">
            <Link href="/dashboard/properti"
                  className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-black mb-4">
                <ArrowLeft size={16} className="mr-2"/>
                Kembali ke Daftar Properti
            </Link>

            <div className="bg-white p-6 rounded-lg border mb-8">
                <div className="flex justify-between items-start">
                    <h2 className="font-bold font-raleway text-2xl mb-4">Informasi Properti</h2>
                    {!isEditing && (
                        <Button size="sm" variant="outlinePrimary" onClick={() => setIsEditing(true)}>
                            <Edit size={16} className="mr-2"/> Edit
                        </Button>
                    )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="md:col-span-1">
                        <Image src={formData.imageUrl} width={200} height={200} alt={formData.title}
                               className="rounded-lg object-cover w-full h-auto"/>
                    </div>

                    <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                        {isEditing ? (
                            <>
                                <EditInput label="Nama Properti" name="title" value={formData.title}
                                           onChange={handleInputChange}/>
                                <div className="md:col-span-2">
                                    <EditInput label="Alamat" name="alamat" value={formData.alamat}
                                               onChange={handleInputChange}/>
                                </div>
                                <EditInput label="Kelurahan" name="kelurahan" value={formData.kelurahan}
                                           onChange={handleInputChange}/>
                                <EditInput label="Kecamatan" name="kecamatan" value={formData.kecamatan}
                                           onChange={handleInputChange}/>
                                <EditInput label="Kota/Kabupaten" name="kota_kabupaten" value={formData.kota_kabupaten}
                                           onChange={handleInputChange}/>
                                <EditInput label="Provinsi" name="provinsi" value={formData.provinsi}
                                           onChange={handleInputChange}/>
                                <EditInput label="Kode Pos" name="kode_pos" value={formData.kode_pos}
                                           onChange={handleInputChange}/>
                            </>
                        ) : (
                            <>
                                <div className="md:col-span-2">
                                    <p className="text-sm font-semibold text-gray-500">Nama Properti</p>
                                    <h1 className="font-raleway font-bold text-3xl">{formData.title}</h1>
                                </div>
                                <div className="md:col-span-2">
                                    <DetailItem label="Alamat" value={formData.alamat}/>
                                </div>
                                <DetailItem label="Kelurahan" value={formData.kelurahan}/>
                                <DetailItem label="Kecamatan" value={formData.kecamatan}/>
                                <DetailItem label="Kota/Kabupaten" value={formData.kota_kabupaten}/>
                                <DetailItem label="Provinsi" value={formData.provinsi}/>
                                <DetailItem label="Kode Pos" value={formData.kode_pos}/>
                            </>
                        )}
                    </div>
                </div>

                {isEditing && (
                    <div className="flex justify-end gap-2 mt-6 pt-4 border-t">
                        <Button size="sm" variant="outlineSecondary" onClick={handleCancel}>
                            <X size={16} className="mr-2"/> Batal
                        </Button>
                        <Button size="sm" variant="fillPrimary" onClick={() => setIsEditing(false)}>
                            <Save size={16} className="mr-2"/> Simpan Perubahan
                        </Button>
                    </div>
                )}
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="font-bold font-raleway text-xl">Daftar Tipe Kamar</h2>
                    <Button size="sm" variant="fillPrimary" onClick={() => setIsModalOpen(true)}>
                        <PlusCircle size={16} className="mr-2"/>
                        Tambah Tipe Kamar
                    </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {roomTypes.map(rt => <RoomTypeCard key={rt.id} roomType={rt}/>)}
                </div>
            </div>

            <AddRoomTypeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}/>
        </div>
    );
}