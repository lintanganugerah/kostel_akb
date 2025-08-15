"use client";

import React, {useState} from 'react';
import {ChevronDown, SearchIcon} from "lucide-react";
import {Listbox, ListboxButton, ListboxOption, ListboxOptions} from "@headlessui/react";

const filter = [
    {id: 1, name: 'All Status'},
    {id: 2, name: 'Lunas'},
    {id: 3, name: 'Ditunda'},
    {id: 4, name: 'Terlambat'},
]

function SearchFilter() {
    const [selected, setSelected] = useState(filter[0]);
    const [searchText, setSearchText] = useState("");
    return (
        <div
            className="flex flex-col md:flex-row items-center rounded-xl bg-accent-secondary p-4 gap-4 border border-gray-300 shadow-sm">
            {/* Search Input */}
            <div className="bg-white rounded-xl w-full flex items-center">
                <SearchIcon className="h-7 w-7 text-gray-400 pl-3"/>
                <input
                    type="text"
                    placeholder="Search tenants, properties, or units..."
                    className="flex-1 px-3 py-2 text-sm focus:outline-none"
                    value={searchText}
                    onChange={(e) => {
                        setSearchText(e.target.value)
                        console.log(searchText)
                    }}
                />
            </div>

            {/* Divider */}
            <div className="h-6 w-px bg-gray-300 hidden md:block"/>

            {/* Filter */}
            <div className="w-full md:w-[150px]">
                <Listbox value={selected} onChange={setSelected}>
                    <div className="relative">
                        <ListboxButton
                            className="w-full flex justify-between items-center rounded-lg bg-white border border-gray-200 px-3 py-2 text-sm text-gray-700 shadow-sm hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400">
                            {selected.name}
                            <ChevronDown className="h-4 w-4 text-gray-500"/>
                        </ListboxButton>

                        <ListboxOptions
                            className="absolute mt-1 w-full rounded-lg bg-white border border-gray-200 shadow-lg z-50 focus:outline-none"
                        >
                            {filter.map((opt) => (
                                <ListboxOption
                                    key={opt.id}
                                    value={opt}
                                    className="cursor-pointer select-none px-4 py-2 text-sm text-gray-700 ui-active:bg-gray-100 ui-active:text-gray-900 ui-selected:font-semibold ui-selected:text-blue-600"
                                >
                                    {opt.name}
                                </ListboxOption>
                            ))}
                        </ListboxOptions>
                    </div>
                </Listbox>
            </div>
        </div>
    );
}

export default SearchFilter;