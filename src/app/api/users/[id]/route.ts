import { NextResponse } from 'next/server';
import { users } from '@/data';

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

        if (id === "-1") {
            return NextResponse.json(
                {
                    success: false,
                    message: "Không tìm được người dùng " + id,
                },
                { status: 400 }
            );
        }

        const user = users.find((user) => user.id === id);

        if (!user) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Không tìm được người dùng " + id,
                },
                { status: 400 }
            );
        }

        return NextResponse.json(
            {
                success: true,
                message: "Lấy người dùng thành công!",
                data: user,
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
                error: "Đã có lỗi xảy ra",
            },
            { status: 500 }
        );
    }
}
