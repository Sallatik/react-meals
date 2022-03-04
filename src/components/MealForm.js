import styles from "./MealForm.module.css";

const MealForm = () => {
  return (
    <form
      className={styles["meal-form"]}
      onSubmit={(event) => event.preventDefault()}
    >
      <label className={styles["amount-label"]}>Amount</label>
      <input className={styles["amount-input"]} type="number"></input>
      <button className={styles["add-button"]} type="submit">
        + Add
      </button>
    </form>
  );
};

export default MealForm;
