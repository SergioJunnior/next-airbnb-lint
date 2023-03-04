import type { NextApiResponse } from 'next';

type Data = {
  name: string;
};

function handler(res: NextApiResponse<Data>) {
  res.status(200).json({ name: 'John Doe' });
}

export default handler;
