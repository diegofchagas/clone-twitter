import { Sidebar } from "./components/Sidebar";
import { Tweet } from "./components/Tweet";
import { Home } from "./pages/Home";

function App() {
  return (
    <main>
      <Sidebar />
      <Home />
      <div>
        <Tweet />
      </div>
    </main>
  );
}

export default App;
