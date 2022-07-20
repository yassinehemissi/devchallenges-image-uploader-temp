import styles from "../styles/Loading.module.css";

export default function Loading() {
  return (
    <div className={styles.container}>
      <h1>Uploading...</h1>
      <div className={styles.loading_bar}>
        <div className={styles.loading_bar_dynamic}></div>
      </div>
    </div>
  );
}
