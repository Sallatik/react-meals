import Header from "./components/Header";
import Info from "./components/Info";
import MealList from "./components/MealList";
import { CartContextProvider } from "./context/CartContext";

const App = () => (
  <CartContextProvider>
    <Header />
    <Info />
    <MealList />
  </CartContextProvider>
);

export default App;
