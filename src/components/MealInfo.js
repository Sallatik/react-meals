import styles from "./MealInfo.module.css";

const MealInfo = ({ name, description, price }) => (
  <section>
    <h3 className={styles.name}>{name}</h3>
    <p className={styles.description}>{description}</p>
    <p className={styles.price}>${price}</p>
  </section>
);

export default MealInfo;
