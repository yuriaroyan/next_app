// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'
import {social, socialType} from "@/pages/api/data/social";


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<socialType[]>
) {
  res.status(200).json(social)
}
