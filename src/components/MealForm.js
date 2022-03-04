import styles from "./MealForm.module.css";
import { useState, useContext } from "react";
import CartContext from "../context/CartContext";

const MealForm = ({ id, name, price }) => {
  const [amount, setAmount] = useState(0);
  const { addMeal } = useContext(CartContext);

  const onSumbit = (event) => {
    event.preventDefault();
    addMeal({ id, name, price, amount: +amount });
    setAmount(0);
  };

  return (
    <form className={styles["meal-form"]} onSubmit={onSumbit}>
      <label className={styles["amount-label"]} htmlFor="amount">
        Amount
      </label>
      <input
        id="amount"
        className={styles["amount-input"]}
        type="number"
        value={amount}
        onChange={(event) => setAmount(event.target.value)}
      ></input>
      <button className={styles["add-button"]} type="submit">
        + Add
      </button>
    </form>
  );
};

export default MealForm;
