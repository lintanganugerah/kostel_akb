"use client";

import React, {useState, FormEvent, ChangeEvent} from 'react';
import {Button} from "@/components/button";

type Prices = { harian: string; mingguan: string; bulanan: string; tahunan: string; };
type EnabledPrices = { harian: boolean; mingguan: boolean; bulanan: boolean; tahunan: boolean; };

// --- PriceInput ---
const PriceInput = ({label, name, isEnabled, value, onCheckedChange, onValueChange}: {
    label: string;
    name: keyof Prices;
    isEnabled: boolean;
    value: string;
    // Prop untuk checkbox
    onCheckedChange: (name: keyof Prices) => void;
    onValueChange: (e: ChangeEvent<HTMLInputElement>) => void;
}) => (
    <div>
        <label className="flex items-center space-x-3">
            <input
                type="checkbox"
                checked={isEnabled}
                // Panggil handler spesifik untuk checkbox, tanpa 'as any'
                onChange={() => onCheckedChange(name)}
                className="h-4 w-4 rounded border-gray-300 text-accent-primary focus:ring-accent-primary"
            />
            <span className={`text-sm ${isEnabled ? 'text-gray-700' : 'text-gray-400'}`}>{label}</span>
        </label>
        <div className="relative mt-1">
            <span
                className={`absolute inset-y-0 left-0 flex items-center pl-3 ${isEnabled ? 'text-gray-500' : 'text-gray-400'}`}>Rp</span>
            <input
                type="number"
                name={name}
                value={value}
                onChange={onValueChange}
                disabled={!isEnabled}
                className="pl-9 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-accent-primary focus:border-accent-primary disabled:bg-gray-50 disabled:cursor-not-allowed"
                placeholder="0"
            />
        </div>
    </div>
);


export function FormHargaTipeKamar({onCancel, onSubmitSuccess}: {
    onCancel: () => void;
    onSubmitSuccess: (data: any) => void;
}) {
    const [namaTipe, setNamaTipe] = useState('');
    const [jumlahKamar, setJumlahKamar] = useState('');
    const [autoGenerate, setAutoGenerate] = useState(true);
    const [enabledPrices, setEnabledPrices] = useState<EnabledPrices>({
        harian: false,
        mingguan: false,
        bulanan: true,
        tahunan: false
    });
    const [prices, setPrices] = useState<Prices>({harian: '', mingguan: '', bulanan: '', tahunan: ''});
    const [error, setError] = useState<string | null>(null);

    // --- 2. Pisahkan menjadi dua handler yang spesifik ---

    // Handler untuk checkbox
    const handleEnabledChange = (name: keyof EnabledPrices) => {
        setEnabledPrices(prev => ({...prev, [name]: !prev[name]}));
    };

    // Handler untuk input number
    const handlePriceValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setPrices(prev => ({...prev, [name]: value}));
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setError(null);

        const isAnyPriceEnabled = Object.values(enabledPrices).some(status => status);
        if (!isAnyPriceEnabled) {
            setError("Harap pilih dan isi minimal satu jenis harga sewa.");
            return;
        }

        const finalData = {
            nama_tipe: namaTipe,
            jumlah_kamar: parseInt(jumlahKamar, 10) || 0,
            auto_generate_kamar: autoGenerate,
            sewa_harian: enabledPrices.harian ? parseFloat(prices.harian) || null : null,
            sewa_mingguan: enabledPrices.mingguan ? parseFloat(prices.mingguan) || null : null,
            sewa_bulanan: enabledPrices.bulanan ? parseFloat(prices.bulanan) || null : null,
            sewa_tahunan: enabledPrices.tahunan ? parseFloat(prices.tahunan) || null : null,
        };

        onSubmitSuccess(finalData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="space-y-4">
                <div>
                    <label htmlFor="nama_tipe" className="block text-sm font-medium text-gray-700">Nama Tipe
                        Kamar</label>
                    <input type="text" value={namaTipe} onChange={(e) => setNamaTipe(e.target.value)} required
                           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-accent-primary focus:border-accent-primary"/>
                </div>
                <div>
                    <label htmlFor="jumlah_kamar" className="block text-sm font-medium text-gray-700">Jumlah
                        Kamar</label>
                    <input type="number" value={jumlahKamar} onChange={(e) => setJumlahKamar(e.target.value)} required
                           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-accent-primary focus:border-accent-primary"/>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                    {/* ---  --- */}
                    <PriceInput label="Harga per hari" name="harian" isEnabled={enabledPrices.harian}
                                value={prices.harian} onCheckedChange={handleEnabledChange}
                                onValueChange={handlePriceValueChange}/>
                    <PriceInput label="Harga per minggu" name="mingguan" isEnabled={enabledPrices.mingguan}
                                value={prices.mingguan} onCheckedChange={handleEnabledChange}
                                onValueChange={handlePriceValueChange}/>
                    <PriceInput label="Harga per bulan" name="bulanan" isEnabled={enabledPrices.bulanan}
                                value={prices.bulanan} onCheckedChange={handleEnabledChange}
                                onValueChange={handlePriceValueChange}/>
                    <PriceInput label="Harga per tahun" name="tahunan" isEnabled={enabledPrices.tahunan}
                                value={prices.tahunan} onCheckedChange={handleEnabledChange}
                                onValueChange={handlePriceValueChange}/>
                </div>

                {error && <p className="text-red-500 text-sm">{error}</p>}

                <div className="mt-4 border-t pt-4">
                    <label className="flex items-center">
                        <input type="checkbox" checked={autoGenerate}
                               onChange={(e) => setAutoGenerate(e.target.checked)}
                               className="h-4 w-4 rounded border-gray-300 text-accent-primary focus:ring-accent-primary"/>
                        <span className="ml-3 text-sm text-gray-700">Generate data kamar secara otomatis</span>
                    </label>
                </div>
            </div>
            <div className="mt-6 flex justify-end gap-3">
                <Button type="button" variant={"outlineSecondary"} onClick={onCancel}>Batal</Button>
                <Button type="submit" variant="fillPrimary">Tambah</Button>
            </div>
        </form>
    );
}