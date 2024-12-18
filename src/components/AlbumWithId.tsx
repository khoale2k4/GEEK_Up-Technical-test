'use client';

import { useEffect, useState } from "react";
import Loading from "./Loading";
import { redirect } from "next/navigation";
import AlbumContent from "./AlbumContent";

const AlbumId: React.FC<{ id: string }> = ({ id }) => {
    const [album, setAlbum] = useState<AlbumType | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchAlbum = async () => {
            try {
                const response = await fetch(`/api/albums/${id}`);
                const data = await response.json();
                console.log(data);

                if (!response.ok) {
                    setLoading(false);
                    throw new Error(data.message || "Không thể lấy dữ liệu");
                }

                setAlbum(data.data);
                setError(null);
            } catch (err: unknown) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError("Đã xảy ra lỗi không xác định");
                }
            } finally {
                setLoading(false);
            }
        };

        fetchAlbum();
    }, [id]);

    if (!album || loading) {
        return (
            <Loading />
        );
    }

    if (error) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p className="text-red-500">Error: {error}</p>
            </div>
        );
    }

    return (
        <div className="container mx-auto my-5 p-5 bg-white rounded">
            <h1 className="text-2xl font-bold mb-4">{album.title}</h1>

            <div className="flex items-center mb-4">
                <img
                    src={album.author.avatar}
                    alt={album.author.name}
                    className="w-10 h-10 rounded-full mr-2"
                />
                <div>
                    <p onClick={() => { redirect("/users/" + album.author.id); }} className="font-semibold cursor-pointer">
                        {album.author.name}
                    </p>
                    <a href={`mailto:${album.author.email}`} className="hover:underline">
                        {album.author.email}
                    </a>
                </div>
            </div>

            <AlbumContent album={album} />
        </div>

    );
};

export default AlbumId;
