import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../lib/dbConnect";
import Profile from "../../models/Profile";
import { ReceivedProfile } from "../../types/db_types";

type ResponseData = {
    success: boolean;
    data?: ReceivedProfile | ReceivedProfile[];
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {
    const { method } = req;

    await dbConnect();

    switch (method) {
        case "GET":
            try {
                let db_profiles = (await Profile.find({})) as any[];

                let profiles = db_profiles.map((v) => {
                    return v.toObject();
                }) as ReceivedProfile[];

                res.status(200).json({ success: true, data: profiles });
                break;
            } catch (error) {
                console.error(error);
            }
            /* fallthrough on error */
        default:
            res.status(400).json({ success: false });
            break;
    }
}
