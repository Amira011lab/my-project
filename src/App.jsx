import "./App.css";
import Header from "./components/Header";
import Greetings from "./components/Greetings";
import {Tiriye} from "./components/Counter";
import ThemeToggel from "./components/ThemeSwicher";
import Clicker from "./components/Clicker";
import Inputer from "./components/Inputer";
import WelcomeMessage from "./components/WelcomeMessage";
import Dashboard from "./components/Dashboard";
import Notification from "./components/Notification";
function App() {
  return (
    <>
      <ThemeToggel />
      <Header />
      <Notification hasNewMessages={true}/>
      <Dashboard isloggedIn={true} />
      <Greetings name="Amira" surname="Muse" />
      <WelcomeMessage isloggedIn={true} />
      <Clicker />
      <Inputer />
      <Tiriye />
    </>
  );
}

export default App;
