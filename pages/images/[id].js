import { useEffect, useState } from "react";
import axios from "axios";
import styles from "../../styles/id.module.css";

const LoadedImage = () => {
  const [ImageData, setImageData] = useState(false);
  useEffect(() => {
    let id = window.location.pathname.replace("/images/", "");
    axios.post("/api", { retrieve: id }).then((res) => {
      setImageData(res.data.image);
    });
  }, []);
  return ImageData ? (
    <div className={styles.container}>
      <img src={ImageData} />
    </div>
  ) : (
    <div className={styles.container}>
      <h1>Not Found</h1>
    </div>
  );
};

export default LoadedImage;
