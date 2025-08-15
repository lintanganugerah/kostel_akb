import React from 'react';
import {TagihanStatusBadgeProps} from "@/type/penyewa";

export function TagihanStatusBadge({status}: TagihanStatusBadgeProps) {
    const baseClasses = "px-3 py-1 text-xs font-semibold rounded-full";

    const statusStyles = {
        'Lunas': 'bg-green-100 text-green-800',
        'Belum Bayar': 'bg-gray-200 text-gray-800',
        'Terlambat': 'bg-red-200 text-red-800',
        'Sebagian': 'bg-yellow-200 text-yellow-800',
    };

    return (
        <span className={`${baseClasses} ${statusStyles[status] || 'bg-gray-200 text-gray-800'}`}>
          {status}
        </span>
    );
}