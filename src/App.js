import "./App.css";
import Rate from "./components/Rate";
import styles from "./components/styles/stylesApp.module.css";

const data = [
  {
    color: "blue",
    rateName: "Безлимитный 300",
    price: "300",
    speed: "до 10 Мбит/сек",
    volume: "Объем включенного трафика не ограничен",
    id: 11,
  },
  {
    color: "green",
    rateName: "Безлимитный 450",
    price: "450",
    speed: "до 50 Мбит/сек",
    volume: "Объем включенного трафика не ограничен",
    id: 12,
  },
  {
    rateName: "Безлимитный 550",
    price: "550",
    speed: "до 100 Мбит/сек",
    volume: "Объем включенного трафика не ограничен",
    color: "red",
    id: 13,
  },
  {
    rateName: "Безлимитный 1000",
    price: "1000",
    speed: "до 200 Мбит/сек",
    volume: "Объем включенного трафика не ограничен",
    color: "black",
    id: 14,
  },
];

function App() {
  return (
    <div className={styles.App}>
      {data.map((elem) => {
        return <Rate {...elem} key={elem.id} />;
      })}
    </div>
  );
}

export default App;
