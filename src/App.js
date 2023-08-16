import { Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cancel from './pages/Cancel';
import Success from './pages/Success';
import Store from './pages/Store';
import Navbarcom from './components/Navbar';
import {BrowserRouter ,Routes,Route } from 'react-router-dom'
import Cartprovider from './Cartcontext';

function App() {
     
  return (
       <Cartprovider>
       <Navbarcom/>
       <BrowserRouter>
       <Routes>
         <Route path='/' exact element={<Store/>} ></Route>
         <Route path='success' element={<Success/>} ></Route>
         <Route path='cancel' element={<Cancel/>} ></Route>
       </Routes>
       </BrowserRouter>
       </Cartprovider>
  );
}

export default App;
