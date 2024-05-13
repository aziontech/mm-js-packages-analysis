// @ts-nocheck
import Image from "next/image";
import { useEffect, useState } from 'react';

export const runtime = "experimental-edge";

export default function Home() {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    const fetchLaunches = async () => {
      try {
        const response = await fetch('/api/missions');
        const data = await response.json();
        console.log(data)
        setLaunches(data.launches);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchLaunches();
  }, []);

  return (
    <section>
      <div className="header">
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