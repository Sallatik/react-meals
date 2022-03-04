import styles from "./Meal.module.css";
import MealInfo from "./MealInfo";
import MealForm from "./MealForm";

const Meal = ({ id, name, description, price }) => (
  <li className={styles.meal}>
    <MealInfo name={name} description={description} price={price} />
    <MealForm id={id} name={name} price={price} />
  </li>
);

export default Meal;
