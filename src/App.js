import './index.css';
import Navbar from './components/Navbar';
import Auth from './layout/Auth';

function App() {
  return (
    <div className="App">
      <div className="content">
      <Navbar />
      <div>
        <Auth />
      </div>
      </div>
    </div>
  );
}

export default App;
