import { NextResponse } from 'next/server';
import { albums } from '@/data';

function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export async function GET(req: Request) {
    try {
        await sleep(500);
        const { searchParams } = new URL(req.url);
        const page = parseInt(searchParams.get('page') || '1', 10);
        const size = parseInt(searchParams.get('size') || '10', 10);

        if (isNaN(page) || page < 1 || isNaN(size) || size < 1) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Tham số 'page' và 'size' phải là số dương.",
                },
                { status: 400 }
            );
        }

        const startIndex = (page - 1) * size;
        const endIndex = startIndex + size;

        const paginatedAlbums = albums.slice(startIndex, endIndex);

        return NextResponse.json(
            {
                success: true,
                message: "Lấy danh sách album thành công!",
                data: paginatedAlbums,
                total: albums.length,
                page,
                size,
            },
            { status: 200 }
        );
    } catch (error: unknown) {
        if (error instanceof Error) {
            return NextResponse.json(
                {
                    success: false,
                    error: error.message,
                },
                { status: 500 }
            );
        }
        return NextResponse.json(
            {
                success: false,
                error: 'Đã có lỗi xảy ra',
            },
            { status: 500 }
        );
    }
}
