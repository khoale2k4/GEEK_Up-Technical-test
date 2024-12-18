'use client'

import AlbumList from "@/components/Albumlist";

export default function AlbumsView() {
    return (
        <div className="container mx-auto">
            <div>
                <h1 className="text-3xl font-bold pb-6">Albums</h1>
                <AlbumList />
            </div>
        </div>
    );
}
