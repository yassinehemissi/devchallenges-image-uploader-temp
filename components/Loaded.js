import styles from "../styles/Loaded.module.css";

export default function Loaded({ image, code }) {
  return (
    <div className={styles.container}>
      <span class="material-symbols-outlined">check_circle</span>
      <h1>Uploaded Successfully!</h1>
      <img src={image} />
      <div className={styles.link_container}>
        <p>{"https://" + window.location.hostname + "/images/" + code}</p>
        <button
          onClick={(e) => {
            navigator.clipboard.writeText(
              "https://" + window.location.hostname + "/images/" + code
            );
          }}
        >
          Copy Link
        </button>
      </div>
    </div>
  );
}
