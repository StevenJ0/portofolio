import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Vercel sets x-vercel-ip-country header in production
  const country =
    req.headers['x-vercel-ip-country'] ||
    req.headers['cf-ipcountry'] || // Cloudflare fallback
    '';

  const locale = country === 'ID' ? 'id' : 'en';

  res.status(200).json({ locale });
}
