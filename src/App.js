import './App.css';
import Home from './components/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from './components/Cart'
import Product from './components/Product'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      
      <Router>
      <Home/>
        <Routes>
        <Route exact path="/" element={<Product/>}/>
        <Route exact  path="/cart" element={<Cart/>}/>
        </Routes>          

      </Router>
    </div>
  );
}

export default App;
