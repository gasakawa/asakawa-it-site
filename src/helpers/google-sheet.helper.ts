import { LeadType } from "@/types/lead.type";
import { JWT } from "google-auth-library";
import { GoogleSpreadsheet } from "google-spreadsheet";

const serviceAccountAuth = new JWT({
  email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
  key: process.env.GOOGLE_PRIVATE_KEY,
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

export class GoogleSheetHelper {
  static async getDocument(fileId: string): Promise<GoogleSpreadsheet> {
    const document = new GoogleSpreadsheet(fileId, serviceAccountAuth);

    await document.loadInfo();

    return document;
  }

  static async addRow(document: GoogleSpreadsheet, data: LeadType) {
    const sheet = document.sheetsByIndex[0];

    await sheet.addRow(data);
  }
}
