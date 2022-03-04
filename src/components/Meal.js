import styles from "./Meal.module.css";
import MealInfo from "./MealInfo";
import MealForm from "./MealForm";

const Meal = ({ name, description, price }) => (
  <li className={styles.meal}>
    <MealInfo name={name} description={description} price={price} />
    <MealForm />
  </li>
);

export default Meal;
