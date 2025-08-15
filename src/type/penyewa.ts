export interface PenyewaData {
    id: number;
    nama: string;
    kamar: string;
    status: TagihanStatusBadgeProps['status'];
    sewa: string;
    jatuhTempo: string;
}

export interface TagihanData {
    id: number;
    invoice: string;
    nama: string;
    kamar: string;
    status: TagihanStatusBadgeProps['status'];
    sewa: string;
    jatuhTempo: string;
}

export interface TagihanStatusBadgeProps {
    status: 'Lunas' | 'Belum Bayar' | 'Terlambat' | 'Sebagian';
}