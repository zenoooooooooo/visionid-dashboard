import { type NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/backend/database/connection";

export async function POST(req: NextRequest) {
  try {
    await connectToDatabase();

    return NextResponse.json(
      { message: "Connected to database!" },
      { status: 201 },
    );
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error";
    const status = 500;
    return NextResponse.json({ message }, { status });
  }
}
