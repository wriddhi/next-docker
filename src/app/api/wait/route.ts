import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {

    const { searchParams } = new URL(request.url)

    const time = Number(searchParams.get('time') ?? 0)

    await new Promise(resolve => setTimeout(resolve, time))

    return NextResponse.json(time);
}