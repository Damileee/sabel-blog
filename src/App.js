import './index.css';
import Navbar from './components/Navbar';
import Auth from './layout/Auth';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className="content">
      <Navbar />
      <Header />
      <div>
        <Auth />
      </div>
      <Footer />
      </div>
    </div>
  );
}

export default App;
