import { type NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/app/backend/database/connection";
import User from "@/app/backend/database/models/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.SECRET_KEY as string;

export async function POST(req: NextRequest) {
  try {
    await connectToDatabase();

    if (!SECRET_KEY) {
      return NextResponse.json(
        { message: "SECRET_KEY is not defined in environment variables" },
        { status: 500 },
      );
    }

    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { message: "Invalid input fields" },
        { status: 400 },
      );
    }

    const existingUser = await User.findOne({ email: email });
    if (!existingUser) {
      return NextResponse.json(
        { message: `User with email ${email} does not exist` },
        { status: 404 },
      );
    }

    const isMatch = await bcrypt.compare(password, existingUser.password);
    if (!isMatch) {
      return NextResponse.json(
        { message: "Passwords did not match" },
        { status: 400 },
      );
    }

    const token = jwt.sign({ id: existingUser._id }, SECRET_KEY);

    return NextResponse.json(
      {
        message: "User logged in successfully",
        token,
        name: existingUser.name,
        email: existingUser.email
      },
      { status: 200 },
    );
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error";
    const status = 500;
    return NextResponse.json({ message }, { status });
  }
}
