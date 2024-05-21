// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { simpleLogger } from "../../lib/simple-logger";

const logger = simpleLogger("my simple logger");

// export const runtime = 'edge'
export default function handler(req, res) {
  logger.info(req.body);
  res.status(200).json({ log: "Hello Loggin" });
  // return new Response(
  //   JSON.stringify('Hello Loggin'),
  //   {
  //       status: 200,
  //       headers: {
  //           'Content-Type': 'application/json'
  //       }
  //   }
  // )
}
