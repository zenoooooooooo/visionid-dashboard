import { type NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/backend/database/connection";

import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
});

const GROQ_API_KEY = process.env.GROQ_API_KEY as string;

export async function POST(req: NextRequest) {
  try {
    if (!GROQ_API_KEY) {
      throw new Error("GROQ_API_KEY is not defined in environment variables");
    }

    await connectToDatabase();

    const { present, absent, avgArrTime } = await req.json();

    const prompt = `
You are an AI attendance analytics assistant for VisionID.

Generate a short professional summary based on the attendance analytics below.

Attendance Data:
- Present Today: ${present}
- Absent Today: ${absent}
- Average Arrival Time: ${avgArrTime}

Instructions:
- Keep the response concise.
- Sound professional and analytical.
- Mention attendance performance.
- Mention punctuality based on average arrival time.
- Mention if attendance appears healthy or concerning.
- Maximum of 3 sentences.
`;

    const response = await client.responses.create({
      model: "openai/gpt-oss-20b",
      input: prompt,
    });

    return NextResponse.json(
      {
        summary: response.output_text,
      },
      { status: 200 },
    );
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error";

    return NextResponse.json({ message }, { status: 500 });
  }
}
