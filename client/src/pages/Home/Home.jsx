import Header from "../../components/Header/Header";
import styles from "./Home.module.scss";
import MainContent from "../../components/MainContent/MainContent";
import MySkills from "../../components/MySkills/MySkills";
import AboutMe from "../../components/About Me/AboutMe";

const Home = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <Header />
        <MainContent />
        <AboutMe />
        <MySkills />
      </div>
    </>
  );
};

export default Home;
