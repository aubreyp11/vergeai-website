import { NextResponse } from "next/server"
import { Client } from "@notionhq/client"

function getNotion() {
  if (!process.env.NOTION_API_KEY) {
    throw new Error("NOTION_API_KEY is not configured")
  }
  return new Client({ auth: process.env.NOTION_API_KEY })
}

export async function POST(req: Request) {
  try {
    const { email, name } = await req.json()

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ error: "Valid email required" }, { status: 400 })
    }

    const dbId = process.env.NOTION_LEADS_DB_ID
    if (!dbId) {
      console.error("NOTION_LEADS_DB_ID is not configured")
      return NextResponse.json(
        { error: "Something went wrong. Please try again." },
        { status: 500 },
      )
    }

    const notion = getNotion()

    await notion.pages.create({
      parent: { database_id: dbId },
      properties: {
        "Business Name": {
          title: [{ text: { content: name || "Professionals Waitlist Signup" } }],
        },
        "Contact Email": { email },
        "Contact Name": { rich_text: [{ text: { content: name || "" } }] },
        "Source": { select: { name: "waitlist" } },
        "Submitted At": {
          date: { start: new Date().toISOString() },
        },
      },
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error("Waitlist submission error:", err instanceof Error ? err.message : err)
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    )
  }
}
