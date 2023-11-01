import "./index.css";
import Navbar from "./components/Navbar";
import Form from "./router";

function App() {
  return (
    <div className="App">
      <div className="content">
        <Navbar />
        <div>
          <Form />
        </div>
      </div>
    </div>
  );
}

export default App;
