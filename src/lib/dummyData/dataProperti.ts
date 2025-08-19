// Definisikan tipe data kita menggunakan TypeScript
export interface RoomType {
    id: string;
    propertyId: string;
    name: string;
    monthlyRent: number;
    roomCount: number;
}

export interface Property {
    id: string;
    title: string;
    imageUrl: string;
    alamat: string;
    kode_pos: string;
    provinsi: string;
    kecamatan: string;
    kota_kabupaten: string;
    kelurahan: string;
}

const properties: Property[] = [
    {
        id: "1",
        title: "Kos Puncak Sejuk",
        imageUrl: "https://placehold.co/600x400/png?text=Puncak+Sejuk",
        alamat: "Jl. Kober No. 45, RT 03/RW 05",
        kode_pos: "16424",
        provinsi: "Jawa Barat",
        kecamatan: "Beji",
        kota_kabupaten: "Kota Depok",
        kelurahan: "Kukusan",
    },
    {
        id: "2",
        title: "Kos Astoria",
        imageUrl: "https://placehold.co/600x400/png?text=Kos+Astoria",
        alamat: "Jl. Jenderal Sudirman Kav. 52-53",
        kode_pos: "12190",
        provinsi: "DKI Jakarta",
        kecamatan: "Kebayoran Baru",
        kota_kabupaten: "Kota Jakarta Selatan",
        kelurahan: "Senayan",
    },
];

const roomTypes: RoomType[] = [
    {id: "101", propertyId: "1", name: "Standard Fan", monthlyRent: 950000, roomCount: 10},
    {id: "102", propertyId: "1", name: "Deluxe AC", monthlyRent: 1600000, roomCount: 5},
    {id: "103", propertyId: "1", name: "VIP + TV", monthlyRent: 2100000, roomCount: 3},
    {id: "201", propertyId: "2", name: "Tipe Studio A", monthlyRent: 4500000, roomCount: 8},
    {id: "202", propertyId: "2", name: "Tipe Studio B (Plus)", monthlyRent: 5200000, roomCount: 6},
];

export interface Room {
    id: string;
    tipe_kamar_id: string;
    nomor_kamar: string;
    status: 'tersedia' | 'dihuni' | 'kosong_perbaikan';
}

const rooms: Room[] = [
    {"id": "301", "tipe_kamar_id": "101", "nomor_kamar": "A101", "status": "dihuni"},
    {"id": "302", "tipe_kamar_id": "101", "nomor_kamar": "A102", "status": "tersedia"},
    {"id": "303", "tipe_kamar_id": "101", "nomor_kamar": "A103", "status": "kosong_perbaikan"},
    {"id": "304", "tipe_kamar_id": "102", "nomor_kamar": "B201", "status": "dihuni"},
    {"id": "305", "tipe_kamar_id": "102", "nomor_kamar": "B202", "status": "tersedia"},
    {"id": "306", "tipe_kamar_id": "103", "nomor_kamar": "C301", "status": "tersedia"},
    {"id": "307", "tipe_kamar_id": "201", "nomor_kamar": "L10-05", "status": "dihuni"},
    {"id": "308", "tipe_kamar_id": "201", "nomor_kamar": "L10-06", "status": "tersedia"},
];

// simulasi API
export function getPropertyById(id: string) {
    return properties.find(p => p.id === id);
}

export function getProperty() {
    return properties;
}

export function getRoomsByPropertyId(id: string) {
    return rooms.find(p => p.id === id);
}

export function getRoomTypesByPropertyId(propertyId: string) {
    return roomTypes.filter(rt => rt.propertyId === propertyId);
}

export const getRoomsByRoomTypeId = (roomTypeId: string) => {
    return rooms.filter(r => r.tipe_kamar_id === roomTypeId);
}