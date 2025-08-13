import React from 'react';

function Page() {
    return (
        <div className="grid grid-rows-[200px_1fr_1fr_1fr] min-h-screen gap-4">
            <div className="flex flex-col relative justify-center p-4 md:p-16 rounded-2xl bg-cover bg-center text-white"
                 style={{backgroundImage: `url(https://placehold.co/400x200/png)`}}>
                <div className="absolute inset-0 bg-black/60 rounded-2xl"></div>
                <div className="relative z-10">
                    <h1 className="font-bold text-3xl md:text-4xl">Selamat Datang, Pak Budi</h1>
                    <h3 className="text-xl md:text-2xl font-extralight">Ini ringkasan keuangan kost Anda bulan ini.
                        Semua
                        terlihat baik!</h3>
                    <div className="flex gap-2">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-4"></button>
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"></button>
                    </div>
                </div>
            </div>
            <div className="bg-gray-300">B</div>
            <div className="bg-gray-300">C</div>
            <div className="bg-gray-300">D</div>
        </div>
    );
}

export default Page;