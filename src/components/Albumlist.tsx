'use client';

import { Link, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react";
import { useEffect, useState } from "react";
import Loading from "./Loading";

const albumColumns = [
    { key: "id", label: "ID", align: "start" },
    { key: "title", label: "Title", align: "start" },
    { key: "user", label: "User", align: "end" },
    { key: "action", label: "Action", align: "end" },
] as Column[];

const AlbumList: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [albumsPerPage, setAlbumsPerPage] = useState(10);
    const [albums, setAlbums] = useState<AlbumType[]>([]);
    const [totalPages, setTotalPages] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAlbums = async () => {
            try {
                setLoading(true);
                const apiUrl = process.env.NEXT_PUBLIC_API_URL_SCHEDULE;
                const res = await fetch(`${apiUrl}api/albums?size=${albumsPerPage}&page=${currentPage}`);
                const data = await res.json();
                console.log(data);
                if (data.success) {
                    setAlbums(data.data);
                    setTotalPages(Math.ceil(data.total / albumsPerPage));
                    setCurrentPage(data.page);
                    setLoading(false);
                } else {
                    console.error(data.message);
                }
            } catch (error) {
                console.error("Error fetching albums:", error);
            }
        };
        fetchAlbums();
    }, [currentPage, albumsPerPage]);

    const renderFileCell = (album: AlbumType, columnKey: AlbumColumnKey) => {
        switch (columnKey) {
            case "id":
                return album.id;
            case "title":
                return <div className="font-semibold text-gray-800">{album.title}</div>;
            case "user":
                return (
                    <div className="flex items-center space-x-4 justify-center">
                        <div className="flex justify-center items-center">
                            <img
                                src={album.author.avatar}
                                alt={album.author.name}
                                className="w-10 h-10 rounded-full border-2 border-blue-500 object-cover shadow-sm"
                            />
                        </div>
                        <div className="text-lg font-semibold text-gray-800">
                            {album.author.name}
                        </div>
                    </div>
                );
            case "action":
                return <Link
                    href={"/albums/" + album.id}
                    className="text-blue-600 hover:underline font-semibold"
                >
                    Open
                </Link>;
            default:
                return null;
        }
    };

    const handleAlbumsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setAlbumsPerPage(Number(e.target.value));
        setCurrentPage(1);
    };

    const buttonI = (i: number) => (
        <button
            key={i}
            onClick={() => setCurrentPage(i)}
            className={`px-4 py-2 rounded-lg transition duration-300 ease-in-out ${currentPage === i ? "bg-[#146d6d] text-white shadow-md" : "hover:bg-gray-400"}`}
        >
            {i}
        </button>
    );

    if (loading) {
        return <Loading />;
    }

    return (
        <div>
            <div className="bg-white rounded pt-6">
                <Table aria-label="Album List">
                    <TableHeader columns={albumColumns}>
                        {(column) => (
                            <TableColumn key={column.key} align={column.align} className="border-none bg-gray-50">
                                {column.label}
                            </TableColumn>
                        )}
                    </TableHeader>
                    <TableBody items={albums}>
                        {(album) => (
                            <TableRow key={album.id} className="border-b hover:bg-gray-50 transition duration-200">
                                {(columnKey) => (
                                    <TableCell className="text-center">
                                        {renderFileCell(album, columnKey as AlbumColumnKey)}
                                    </TableCell>
                                )}
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>


            <div className="flex justify-between items-center mt-4">
                <div className="flex justify-center space-x-2">
                    {currentPage > 3 && (
                        buttonI(1)
                    )}

                    {currentPage > 4 && (
                        <div className="px-4 py-2 rounded-lg transition duration-300 ease-in-out">
                            ...
                        </div>
                    )}

                    {(() => {
                        const buttonsToShow = [];
                        const start = Math.max(1, currentPage - 2);
                        const end = Math.min(totalPages, start <= 2 ? 5 : currentPage + 2);
                        console.log(start, end);

                        for (let i = start; i <= end; i++) {
                            buttonsToShow.push(
                                buttonI(i)
                            );
                        }

                        return buttonsToShow;
                    })()}

                    {currentPage < totalPages - 3 && (
                        <div className="px-4 py-2 rounded-lg transition duration-300 ease-in-out">
                            ...
                        </div>
                    )}

                    {currentPage < totalPages - 2 && (
                        buttonI(totalPages)
                    )}
                </div>

                <select
                    onChange={handleAlbumsPerPageChange}
                    value={albumsPerPage}
                    className="ml-4 border rounded-lg px-2 py-1 bg-white shadow-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#146d6d] focus:border-[#146d6d] transition duration-200 ease-in-out"
                >
                    {[10, 20, 50, 100].map((num) => (
                        <option key={num} value={num} className="bg-white">
                            {num} / page
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default AlbumList;
