"use client";

import React, { useState } from "react";
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Sidebar: React.FC = () => {
    const [isCollapsed, setIsCollapsed] = useState(true);
    const pathname = usePathname();

    const isActive = (path: string) => pathname.startsWith(path);

    return (
        <aside className={`bg-white text-gray-800 ${isCollapsed ? 'w-17' : 'w-48'} h-screen p-4 shadow-md transition-width`}>
            <div className="flex justify-between items-center">
                {!isCollapsed && <Link href="/">
                    <Image
                        src="/sidebar/geekup-logo-general.svg"
                        alt="Logo"
                        width={100}
                        height={40}
                        className="cursor-pointer mb-6"
                    />
                </Link>}

                <button
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    className="mb-4 p-1 rounded hover:bg-[#d7eaef]"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#000" d="M4 18q-.425 0-.712-.288T3 17t.288-.712T4 16h16q.425 0 .713.288T21 17t-.288.713T20 18zm0-5q-.425 0-.712-.288T3 12t.288-.712T4 11h16q.425 0 .713.288T21 12t-.288.713T20 13zm0-5q-.425 0-.712-.288T3 7t.288-.712T4 6h16q.425 0 .713.288T21 7t-.288.713T20 8z" /></svg>
                </button>
            </div>


            <ul className="space-y-2">
                <li>
                    <Link
                        href="/albums"
                        className={`p-2 rounded block flex items-center transition-all ${isActive('/albums') ? 'bg-[#d7eaef] text-[#146d6d] font-bold' : 'hover:bg-gray-100'
                            }`}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6 min-w-[24px] min-h-[24px] mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path stroke="currentColor" strokeWidth="1" fill="none" d="M8 3h9a3 3 0 0 1 3 3v13a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3m0 1a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-3v6.7l-3-2.1l-3 2.1zm5 0H9v4.78l2-1.4l2 1.4zM8 24a5 5 0 0 1-5-5V7h1v12a4 4 0 0 0 4 4h8v1z" />
                        </svg>
                        {!isCollapsed && <p>Albums</p>}
                    </Link>
                </li>
                <li>
                    <Link
                        href="/users"
                        className={`p-2 rounded block flex items-center transition-all ${isActive('/users') ? 'bg-[#d7eaef] text-[#146d6d] font-bold' : 'hover:bg-gray-100'
                            }`}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6 min-w-[24px] min-h-[24px] mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path stroke="currentColor" strokeWidth="1" fill="none" d="M11.5 14c4.14 0 7.5 1.57 7.5 3.5V20H4v-2.5c0-1.93 3.36-3.5 7.5-3.5m6.5 3.5c0-1.38-2.91-2.5-6.5-2.5S5 16.12 5 17.5V19h13zM11.5 5A3.5 3.5 0 0 1 15 8.5a3.5 3.5 0 0 1-3.5 3.5A3.5 3.5 0 0 1 8 8.5A3.5 3.5 0 0 1 11.5 5m0 1A2.5 2.5 0 0 0 9 8.5a2.5 2.5 0 0 0 2.5 2.5A2.5 2.5 0 0 0 14 8.5A2.5 2.5 0 0 0 11.5 6" />
                        </svg>
                        {!isCollapsed && <p>Users</p>}
                    </Link>
                </li>
            </ul>
        </aside>
    );
};

export default Sidebar;