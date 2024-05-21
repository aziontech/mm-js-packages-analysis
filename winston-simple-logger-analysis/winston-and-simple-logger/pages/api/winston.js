// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import logger from "../../lib/winston";

// export const runtime = 'edge'
export default function handler(req, res) {
  logger.error((req.body));
  res.status(200).json({ log: "Hello Loggin" });
//   return new Response(
//     JSON.stringify('Hello Loggin'),
//     {
//         status: 200,
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     }
// )
}
