import dbConnect from "../../../mongoose/connectDB";
import Blog from "../../../mongoose/models/Blog";

const handler = async (req, res) => {
  const {
    method,
    query: { customID },
  } = req;

  const errorMessage = "Error has occured";

  try {
    await dbConnect();

    if (method === "POST") {
      const update = await Blog.updateOne(
        {
          customID,
        },
        {
          $inc: {
            totalViews: 1,
          },
        }
      );
      if (update.modifiedCount) return res.status(200).json({ success: true });
      return res.status(400).send({ errorMessage });
    } else if (method === "GET") {
      const document = await Blog.findOne({ customID }, "totalViews");
      if (!document) return res.status(400).send({ errorMessage });
      return res.status(200).json({ totalViews: document.totalViews });
    }
  } catch (_) {
    return res.status(400).send({ errorMessage });
  }
};

export default handler;
