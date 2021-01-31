import Routes from "./Routes";
import { UserProvider } from "./util/UserContext";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Routes />
      </UserProvider>
    </div>
  );
}

export default App;
