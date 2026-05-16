import { type NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/app/backend/database/connection";
import User from "@/app/backend/database/models/User";
import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.SECRET_KEY as string;

export async function POST(req: NextRequest) {
  try {
    await connectToDatabase();

    const { email, password } = await req.json();

    if (!SECRET_KEY) {
      return NextResponse.json(
        { message: "SECRET_KEY is not defined in environment variables" },
        { status: 500 },
      );
    }

    return NextResponse.json(
      { message: "Connected to database!" },
      { status: 200 },
    );
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error";
    const status = 500;
    return NextResponse.json({ message }, { status });
  }
}
