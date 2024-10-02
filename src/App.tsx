import { Sidebar } from "./components/Sidebar";
import { Home } from "./pages/Home";

function App() {
  return (
    <main>
      <Sidebar />
      <div className="content">
      <Home />
      </div>
    </main>
  );
}

export default App;
