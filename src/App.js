import "./App.css";
import Rate from "./components/Rate";
import styles from "./components/styles/stylesApp.module.css";

function App() {
  return (
    <div className={styles.App}>
      <Rate
        className="blue"
        rateName="Безлимитный 300"
        price="300"
        speed="до 10 Мбит/сек"
        volume="Объем включенного трафика не ограничен"
        color="blue"
      />
      <Rate
        rateName="Безлимитный 450"
        price="450"
        speed="до 50 Мбит/сек"
        volume="Объем включенного трафика не ограничен"
        color="green"
      />
      <Rate
        rateName="Безлимитный 550"
        price="550"
        speed="до 100 Мбит/сек"
        volume="Объем включенного трафика не ограничен"
        color="red"
      />
      <Rate
        rateName="Безлимитный 1000"
        price="1000"
        speed="до 200 Мбит/сек"
        volume="Объем включенного трафика не ограничен"
        color="black"
      />
    </div>
  );
}

export default App;
