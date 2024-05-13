import { request, gql } from 'graphql-request';

export const config = {
  runtime: "edge"
}

const endpoint = 'https://spacex-production.up.railway.app/';
const query = gql`
  {
    launchesPast(limit: 5) {
      mission_name
      launch_date_local
    }
  }
`;

export default async function handler() {
  try {
    const data = await request(endpoint, query);
    return new Response(
      JSON.stringify({ launches: data.launchesPast }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({ error: "Error fetching data" }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }
}