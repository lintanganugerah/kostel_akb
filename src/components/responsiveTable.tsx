"use client";

import React from 'react';
import {Eye, Edit, Trash2} from 'lucide-react';

interface Column<T> {
    header: string;
    accessor: keyof T;
    render?: (row: T) => React.ReactNode;
}

interface ResponsiveTableProps<T> {
    columns: readonly Column<T>[];
    dataTabel: T[];
}

export function ResponsiveTable<T extends { id: string | number }>({columns, dataTabel}: ResponsiveTableProps<T>) {

    if (!dataTabel || dataTabel.length === 0) {
        return <p className="text-center text-gray-500 py-8">Tidak ada data untuk ditampilkan.</p>;
    }

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full">
                <thead className="hidden lg:table-header-group">
                <tr className="border-b border-gray-200 dark:border-slate-700">
                    {columns.map((col) => (
                        <th key={col.header}
                            className="px-6 py-4 text-left text-sm font-semibold text-gray-600 dark:text-gray-400">
                            {col.header}
                        </th>
                    ))}
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600 dark:text-gray-400">Aksi</th>
                </tr>
                </thead>
                <tbody>
                {dataTabel.map((row) => (
                    <tr key={row.id}
                        className="block lg:table-row mb-4 lg:mb-0 border lg:border-none rounded-lg lg:rounded-none shadow-md lg:shadow-none bg-white dark:bg-slate-900 lg:bg-transparent">
                        {columns.map((col) => (
                            <td key={`${row.id}-${String(col.accessor)}`}
                                className="block lg:table-cell p-3 lg:p-4 text-right lg:text-left border-b lg:border-b-0 dark:border-gray-700">
                                <span className="lg:hidden font-semibold float-left mr-2">{col.header}:</span>
                                <div className="inline-block text-left lg:text-left w-full">
                                    {col.render ? col.render(row) : String(row[col.accessor])}
                                </div>
                            </td>
                        ))}
                        <td className="block lg:table-cell px-4 py-3 lg:px-6 lg:py-4 text-right lg:text-left">
                            <span className="lg:hidden font-semibold float-left mr-2">Aksi:</span>
                            <div className="flex items-center justify-end lg:justify-start gap-3">
                                <button onClick={() => {
                                }} className="text-gray-500 hover:text-blue-600">
                                    <Eye size={18}/>
                                </button>
                                <button onClick={() => {
                                }} className="text-gray-500 hover:text-green-600">
                                    <Edit size={18}/>
                                </button>
                                <button onClick={() => {
                                }} className="text-gray-500 hover:text-red-600">
                                    <Trash2 size={18}/>
                                </button>
                            </div>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}