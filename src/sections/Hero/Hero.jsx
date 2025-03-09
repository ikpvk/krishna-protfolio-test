import xLight from "../../assets/twitter-light.svg";
import xDark from "../../assets/twitter-dark.svg";
import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import CV from "../../assets/cv.pdf";
import { useTheme } from "../../common/ThemeContext";
function Hero() {
  const {theme, toggleTheme} = useTheme();

  const themeIcon  = theme === 'light'? sun : moon;
  const xIcon  = theme === 'light'? xLight : xDark;
  const githubIcon  = theme === 'light'? githubLight : githubDark;
  const linkedinIcon  = theme === 'light'? linkedinLight : linkedinDark;

  return (
    <section className={styles.container} id="hero">
      <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={heroImg} alt="Proficle pic"></img>
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode"
          onClick={toggleTheme}
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
        <p>Java backend developer, with expertise in Spring Boot</p>
        <a href={CV} download>
          <button className="hover">
            Resume
          </button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
