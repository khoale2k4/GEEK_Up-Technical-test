// AlbumContent.tsx
import { useState } from "react";

type Props = {
    album: AlbumType;
};

const AlbumContent: React.FC<Props> = ({ album }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : album.content.length - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % album.content.length);
    };

    return (
        <>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {album.content.map((color, index) => {
                    console.log(color);
                    return (


                        <div
                            key={index}
                            className={`flex w-full items-center justify-center h-60 object-cover rounded-lg shadow-md overflow-hidden relative transition-all duration-300 ${hoveredIndex === index ? "brightness-50" : ""}`}
                            style={{ backgroundColor: color }}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            onClick={() => {
                                setCurrentIndex(index);
                                setIsOpen(true);
                            }}
                        >
                            {hoveredIndex != index && <p className="text-white font-semibold">{color}</p>}
                            {hoveredIndex === index && (
                                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                                    <span className="text-white font-semibold">Review</span>
                                </div>
                            )}
                        </div>
                    )
                })}
            </div>

            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
                    <div className="relative bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
                        <div
                            className="w-[300px] h-72 rounded-lg shadow-md mb-6 flex items-center justify-center"
                            style={{ backgroundColor: album.content[currentIndex] || '#ccc' }}
                        >
                            <p className="text-lg font-semibold text-white">
                                {album.content[currentIndex] ? album.content[currentIndex] : "No Color"}
                            </p>
                        </div>

                        <div className="flex justify-between w-full max-w-[320px]">
                            <button
                                onClick={handlePrev}
                                className="bg-[#2db1a9] text-white px-4 py-2 rounded-md shadow hover:bg-[#146d6d] transition duration-200"
                            >
                                Prev
                            </button>

                            <button
                                onClick={handleNext}
                                className="bg-[#2db1a9] text-white px-4 py-2 rounded-md shadow hover:bg-[#146d6d] transition duration-200"
                            >
                                Next
                            </button>
                        </div>

                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-4 right-4 bg-red-500 text-white px-3 py-2 rounded-md shadow hover:bg-red-600 transition duration-200"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}

        </>
    );
};

export default AlbumContent;
