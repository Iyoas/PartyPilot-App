import { NextResponse } from "next/server";

export async function GET() {
  try {
    console.log("Fetching events..."); // Debug log
    const response = await fetch("https://partypilot.nl/all_evets.php");

    if (!response.ok) {
      return NextResponse.json({ error: "Failed to fetch events" }, { status: response.status });
    }

    const data = await response.json();
    console.log("Fetched events:", data); // Debug log
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching events:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
