import './App.css';
import Divider from './components/Divider';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      {/* <Divider/> */}
      <Footer/>
      
    </div>
  );
}

export default App;
