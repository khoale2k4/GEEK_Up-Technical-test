'use client'

import AlbumId from "@/components/AlbumWithId";
import { redirect } from "next/navigation";

interface AlbumIdViewProps {
    albumId: string;
}

const AlbumIdView: React.FC<AlbumIdViewProps> = ({ albumId }) => {
    return (
        <div className="container mx-auto">
            <div onClick={() => {redirect("/albums");}} className="flex items-center space-x-2 cursor-pointer mb-6">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path stroke="currentColor" strokeWidth="1" fill="none" d="M8 3h9a3 3 0 0 1 3 3v13a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3m0 1a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-3v6.7l-3-2.1l-3 2.1zm5 0H9v4.78l2-1.4l2 1.4zM8 24a5 5 0 0 1-5-5V7h1v12a4 4 0 0 0 4 4h8v1z" />
                </svg>
                <span className="text-gray-500 hover:bg-gray-300 rounded px-2 py-1 transition duration-200">Albums</span>
                <span className="text-gray-500">/</span>
                <span className="font-semibold text-black">Show</span>
            </div>

            <button
                onClick={() => {redirect("/albums");}}
                className="text-black font-bold hover:underline"
            >
                ← Show Album
            </button>

            <AlbumId id={albumId} />
        </div>
    );
}

export default AlbumIdView;