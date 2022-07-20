import styles from "../styles/Load.module.css";

export default function Load({ setImageData, setCurrentState }) {
  let readImage = (e) => {
    const fr = new FileReader();
    fr.onload = () => {
      setImageData(fr.result);
      setCurrentState(1);
    };
    fr.readAsDataURL(e.target.files[0]);
  };

  return (
    <form className={styles.container}>
      <h1>Upload your image</h1>
      <label>File should be Jpeg, Png,...</label>
      <div className={styles.drag_container}>
        <input onChange={readImage} type="file" />
        <img src="./image.svg" />
        <p>Drag &amp; Drop your image here</p>
      </div>
      <h2>Or</h2>
      <button className={styles.choose_button}>
        {" "}
        <input onChange={readImage} type="file" />
        Choose a file
      </button>
    </form>
  );
}
