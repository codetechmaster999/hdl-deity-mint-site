import type { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';
import { promises as fs } from 'fs';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { account } = req.query;

  const jsonDirectory = path.join(process.cwd(), 'proofs');

  try {
    const merkleJson = await fs.readFile(
      jsonDirectory + `/${account}.json`,
      'utf8',
    );

    res.status(200).json(merkleJson);
  } catch (error) {
    res.status(404).json({ error: 'Not found' });
  }
}
