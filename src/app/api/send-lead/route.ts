import { GoogleSheetHelper } from "@/helpers/google-sheet.helper";
import { LeadType } from "@/types/lead.type";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const fileId = process.env.GOOGLE_SHEET_DOC_ID || "";
    const document = await GoogleSheetHelper.getDocument(fileId);

    const body = await req.json();

    const lead: LeadType = {
      Name: body.name,
      Email: body.email,
      Subject: body.subject,
      Message: body.message,
      Date: new Date().toISOString(),
    };

    await GoogleSheetHelper.addRow(document, lead);
    return NextResponse.json({
      success: true,
      data: { message: "Contact saved" },
    });
  } catch (error) {
    console.log("🚀 ~ POST ~ error:", error);
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}
