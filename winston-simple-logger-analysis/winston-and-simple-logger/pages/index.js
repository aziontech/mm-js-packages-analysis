import Head from "next/head";
import Image from "next/image";
function Home() {
  const sendErrorWinston = (err) => {
    try {
      console.log(x);
    } catch (error) {
      fetch("/api/winston", {
        method: "POST",
        body: JSON.stringify({
          message: error.message,
          page: window.location.href,
        }),
      });
    }
  };

  const sendErrorSimpleLog = (err) => {
    try {
      console.log(x);
    } catch (error) {
      fetch("/api/simplelog", {
        method: "POST",
        body: JSON.stringify({
          message: error.message,
          page: window.location.href,
        }),
      });
    }
  };
  return (
    <div>
      <h1>Nextjs</h1>
      <button onClick={(e) => sendErrorWinston(e)}>test winston</button>
      <button onClick={(e) => sendErrorSimpleLog(e)}>test simpleloger</button>
    </div>
  );
}

export default Home;
