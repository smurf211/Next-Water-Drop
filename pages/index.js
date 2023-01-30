import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.box}>
      <div className={styles.drop_left}></div>
      <div className={styles.drop_left_text1}>Your Home</div>
      <div className={styles.drop_left_text2}>1,200,000 Gallons</div>
      <div className={styles.drop_right}></div>
      <div className={styles.drop_right_text1}>Similar Home</div>
      <div className={styles.drop_right_text2}>100 Gallons</div>
    </div>
  );
}
