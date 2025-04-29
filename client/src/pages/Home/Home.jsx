import Header from "../../components/Header/Header";
import styles from "./Home.module.scss";
import MainContent from "../../components/MainContent/MainContent";
import MySkills from "../../components/MySkills/MySkills";

const Home = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <Header />
        <MainContent />
        <MySkills />
      </div>
    </>
  );
};

export default Home;
