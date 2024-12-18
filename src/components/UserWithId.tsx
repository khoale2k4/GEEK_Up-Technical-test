import { useEffect, useState } from "react";
import Link from "next/link";
import Loading from "./Loading";

const UserProfile = ({ id }: { id: string }) => {
    const [albums, setAlbums] = useState<AlbumType[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAlbums = async () => {
            try {
                setLoading(true);
                const response = await fetch(`/api/albums/byUserId/${id}`);
                const result = await response.json();

                if (result.success) {
                    setAlbums(result.data);
                }
            } catch (error) {
                console.error("Failed to fetch albums:", error);
                setLoading(false);
            }
            setLoading(false);
        };

        fetchAlbums();
    }, [id]);

    if (loading) {
        return <Loading />;
    }

    return (
        <div className="container mx-auto my-5 p-5 bg-white rounded">
            <div className="flex items-center mb-4">
                <img src={albums[0].author.avatar} alt={albums[0].author.name} className="w-10 h-10 rounded-full mr-2" />
                <div>
                    <p className="font-semibold">{albums[0].author.name}</p>
                    <a href={`mailto:${albums[0].author.email}`} className="hover:underline">
                        {albums[0].author.email}
                    </a>
                </div>
            </div>

            <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="py-3 px-4 text-left text-gray-600 font-semibold">ID</th>
                        <th className="py-3 px-4 text-left text-gray-600 font-semibold">Title</th>
                        <th className="py-3 px-4 text-left text-gray-600 font-semibold">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {albums.map((album) => (
                        <tr key={album.id} className="hover:bg-gray-50 transition duration-200">
                            <td className="py-3 border-t border-gray-200 px-4">{album.id}</td>
                            <td className="py-3 border-t border-gray-200 px-4">{album.title}</td>
                            <td className="py-3 border-t border-gray-200 px-4">
                                <Link
                                    href={`/albums/${album.id}`}
                                    className="text-blue-600 hover:underline font-semibold"
                                >
                                    Open
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserProfile;