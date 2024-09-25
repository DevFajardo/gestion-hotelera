import { NextResponse } from "next/server";
import handler from "@/app/actions/actions";

export async function GET(request) {
   const response = await handler(request);
    return NextResponse.json(response);
}