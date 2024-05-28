import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Shubham</h1>
        <p className={styles.description}>
          I'm a Front-End developer with 6 Months of experience using React and
          Python. Reach out if you'd like to learn more!
        </p>
        <a href="mailto:asbeshubham143@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/Shubham-new.png")}
        alt="Hero image of me"
        className={styles.heroImg}
        style={{
          width: "60vw", // Set the desired width
          height: "60vh", // Set the desired height
          objectFit: "cover", // Ensure the image covers the specified dimensions
          borderRadius: "50%", // Set border radius for rounded edges
          backgroundColor: "#3d547a" // Clear the background color
        }}
      />

      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
