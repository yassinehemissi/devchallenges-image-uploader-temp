import axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";
import Load from "../components/Load";
import Loaded from "../components/Loaded";
import Loading from "../components/Loading";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [ImageData, setImageData] = useState(false);
  const [code, setCode] = useState(0);
  const [CurrentState, setCurrentState] = useState(0);
  useEffect(() => {
    if (!ImageData) return;
    axios.post("/api", { retrieve: false, data: ImageData }).then((res) => {
      if (res.data.code) {
        setTimeout(() => {
          setCode(res.data.code);
          setCurrentState(2);
        }, 1000);
      }
    });
  }, [ImageData]);
  return (
    <div className={styles.container}>
      <Head>
        <title>devchallenges - Image Uploader</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {CurrentState == 0 ? (
          <Load setCurrentState={setCurrentState} setImageData={setImageData} />
        ) : null}
        {CurrentState == 1 ? <Loading /> : null}
        {CurrentState == 2 ? <Loaded code={code} image={ImageData} /> : null}
      </main>

      <footer className={styles.footer}>
        <h6>created by MY Hemissi - devChallenges.io</h6>
      </footer>
    </div>
  );
}
