import { NextResponse } from 'next/server';
import { users } from '@/data';

function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export async function GET() {
    try {
        await sleep(500);
        if (!Array.isArray(users)) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Dữ liệu user không hợp lệ.",
                },
                { status: 500 }
            );
        }
        return NextResponse.json(
            {
                success: true,
                message: "Lấy danh sách người dùng thành công!",
                data: users,
            },
            { status: 200 }
        );
    } catch (error: unknown) {
        if (error instanceof Error) {
            return NextResponse.json(
                {
                    success: false, error: error.message
                }, { status: 500 }
            );
        }
        return NextResponse.json(
            {
                success: false, error: 'An unknown error occurred'
            }, { status: 500 }
        );
    }
}