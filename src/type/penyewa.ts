export interface PenyewaData {
    id: number;
    nama: string;
    kamar: string;
    status: TagihanStatusBadgeProps['status'];
    tagihan: string;
    jatuhTempo: string;
}

export interface TagihanStatusBadgeProps {
    status: 'Lunas' | 'Belum Bayar' | 'Terlambat' | 'Sebagian';
}