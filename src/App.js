
import './App.css';
import { Routes , Route} from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { Cart } from './components/Cart';

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
     <Routes>
     
      <Route path="/" element={<Home/>}/>
      <Route path="/cart" element={<Cart/>}/>
    
      </Routes>
      </main>
     <Footer/>
    </div>
  );
}

export default App;
