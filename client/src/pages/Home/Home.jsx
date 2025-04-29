import Header from "../../components/Header/Header";
import styles from "./Home.module.scss";
import MainContent from "../../components/MainContent/MainContent";

const Home = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <Header />
        <MainContent />
      </div>
    </>
  );
};

export default Home;
