import styles from "./MealList.module.css";
import Meal from "./Meal";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const MealList = () => (
  <ul className={styles["meal-list"]}>
    {DUMMY_MEALS.map(({ id, name, description, price }) => (
      <Meal
        key={id}
        id={id}
        name={name}
        description={description}
        price={price}
      />
    ))}
  </ul>
);

export default MealList;
