import DrawerNav from "./src/Navigations/DrawerNav";
import "./gesture-handler.native";
import { store } from "./src/store/store";
import { Provider } from "react-redux";

export default function App() {
  return (
    <>
      <Provider store={store}>
        <DrawerNav />
      </Provider>
    </>
  );
}
