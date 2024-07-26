import "./styles/global.css";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./store";
import { Player } from "./pages/Player";
import Footer from "./components/Footer";

export function App() {
  return (
    <ReduxProvider store={store}>
      <Player />
      <Footer />
    </ReduxProvider>
  );
}
