import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Games from './components/Games/Games';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Games></Games>
      <Footer></Footer>
    </div>
  );
}

export default App;
