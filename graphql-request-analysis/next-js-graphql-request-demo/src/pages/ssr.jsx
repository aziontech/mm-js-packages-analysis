// @ts-nocheck
import Image from "next/image";
import { Inter } from "next/font/google";
import { request, gql } from 'graphql-request';

const inter = Inter({ subsets: ["latin"] });

export const config = {
  runtime: "experimental-edge",
};

const endpoint = 'https://spacex-production.up.railway.app/';
const query = gql`
  {
    launchesPast(limit: 5) {
      mission_name
      launch_date_local
      launch_site {
        site_name_long
      }
    }
  }
`;

export const getServerSideProps = async () => {
  try {
    const data = await request(endpoint, query);
    return { props: { launches: data.launchesPast } };
  } catch (error) {
    console.error("Error:", error);
    return { props: { launches: [] } };
  }
};

export default function Home({ launches }) {
  return (
    <section>
      <div className={`header ${inter.className}`}>
        <Image src="azion.svg" alt="Azion Logo" width={100} height={24} />
      </div>
      <div className="content space-y-6">
        <ul>
          {launches.map((launch, index) => (
            <>
            <li key={index}>
              <strong>Mission:</strong> {launch.mission_name} <br />
              <strong>Date:</strong> {new Date(launch.launch_date_local).toLocaleDateString()} <br />
            </li>
            <hr></hr>
            </>
          ))}
        </ul>
      </div>
      <div className="footer">
      </div>
    </section>
  );
}