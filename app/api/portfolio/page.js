import dbConnect from '@/lib/dbConnect';
import Portfolio from '@/models/Portfolio';

export default async function handler(req, res) {
  await dbConnect();

  const { method, query: { id } } = req;

  switch (method) {
    case 'GET':
      try {
        const portfolio = await Portfolio.findById(id);
        if (!portfolio) return res.status(404).json({ error: 'Portfolio not found' });
        res.status(200).json(portfolio);
      } catch (error) {
        res.status(500).json({ error: 'Server Error' });
      }
      break;

    case 'PUT':
      try {
        const updatedPortfolio = await Portfolio.findByIdAndUpdate(id, req.body, {
          new: true,
        });
        res.status(200).json(updatedPortfolio);
      } catch (error) {
        res.status(400).json({ error: 'Invalid Data' });
      }
      break;

    case 'DELETE':
      try {
        await Portfolio.findByIdAndDelete(id);
        res.status(200).json({ success: true });
      } catch (error) {
        res.status(400).json({ error: 'Failed to delete portfolio' });
      }
      break;

    default:
      res.status(405).end(); // Method Not Allowed
      break;
  }
}
