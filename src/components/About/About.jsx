import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        {/* <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        /> */}
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in building responsive
                and optimized websites in react.js
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
          {/* <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" /> */}
            <img src={getImageUrl("about/cursorIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Machine Learning Developer</h3>
              <p>
              I specialize in crafting high-performance Machine Learning Dashboards, enabling streamlined data analysis and visualization, while seamlessly integrating various algorithms for enhanced insights.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI/UX Designer</h3>
              <p>
                I have designed multiple landing pages and have created some design
                systems as well
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
