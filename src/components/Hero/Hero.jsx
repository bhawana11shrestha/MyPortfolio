import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";


export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi I'am Bhawana ❤</h1>
        <p className={styles.description}>
          I am a Backend Developer with 2 years of experience in Python Django.
          Reach out if you'd like to know more!
        </p>
        <a href="mailto:bhawanastha9999@gmail.com" className={styles.contactBtn}>Contact Me</a>
      </div>
      <img src={getImageUrl("hero/heroImage.png")} alt="Image of me" className={styles.heroImg}/>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
