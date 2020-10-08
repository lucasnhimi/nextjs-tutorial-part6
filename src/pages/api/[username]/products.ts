import { NextApiRequest, NextApiResponse } from 'next';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { method, query } = req;

    switch (method) {
      case 'GET':
        res.status(200).json([
          { id: 1, description: 'Produto 1', method, query: query.username },
          { id: 2, description: 'Produto 2', method, query: query.username },
          { id: 3, description: 'Produto 3', method, query: query.username },
        ]);
        break;
      default:
        res.setHeader('Allow', ['GET', 'PUT']);
        res.status(405).end(`Method ${method} Not Allowed`);
    }
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;
