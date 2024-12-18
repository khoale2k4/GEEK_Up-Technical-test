import { NextResponse } from 'next/server';
import { albums } from '@/data';

function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export async function GET(
    request: Request,
    context: { params: Promise<{ id: string }> }
  ) {
    try {
        await sleep(500);
        const params = await context.params;
        const { id } = params;
        if (!Array.isArray(albums)) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Dữ liệu albums không hợp lệ.",
                },
                { status: 500 }
            );
        }
        
        if (id === "-1") {
            return NextResponse.json(
                {
                    success: false,
                    message: "Không tìm được album" + id,
                },
                { status: 400 }
            );
        }

        const album = albums.find((album) => album.id === id);

        if(!album) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Không tìm được album" + id,
                },
                { status: 400 }
            );
        }

        return NextResponse.json(
            {
                success: true,
                message: "Lấy album thành công!",
                data: album
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
