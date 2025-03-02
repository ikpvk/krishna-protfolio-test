import xIcon from "../../assets/twitter-light.svg";
import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";
import themeIcon from "../../assets/sun.svg";
import githubIcon from "../../assets/github-light.svg";
import linkedinIcon from "../../assets/linkedin-light.svg";
function Hero() {
  return (
    <section className={styles.container} id="hero">
      <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={heroImg} alt="Proficle pic"></img>
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode"
        ></img>
      </div>
      <div className={styles.info}>
        <h1>
          Krishna<br></br>Prasad
        </h1>
        <h2>Developer</h2>
        <span>
          <a href="https://x.com/" target="_blank">
            <img src={xIcon} alt="xdotcom" />
          </a>
          <a href="https://github.com/" target="_blank">
            <img src={githubIcon} alt="github" />
          </a>
          <a href="https://linkedin.com/" target="_blank">
            <img src={linkedinIcon} alt="linkedin" />
          </a>
        </span>
      </div>
    </section>
  );
}

export default Hero;
