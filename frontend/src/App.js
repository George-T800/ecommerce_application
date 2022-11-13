import { Container } from 'react-bootstrap'
import {BrowserRouter, Routes, Route, Links} from 'react-router-dom'

import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';



function App() {
 
  return (
    <BrowserRouter className="App">
      <Header/>
      <main>
        <Container>
        <Routes>
          <Route path={'/'} element={<HomeScreen/>} exact></Route>
          <Route path={'/login'} element={<LoginScreen/>} exact></Route>
          <Route path={'/product/:id'} element={<ProductScreen/>}></Route>
          <Route path={'/Cart/:id?'} element={<CartScreen/>} ></Route>
        
        </Routes>
        {/* <HomeScreen></HomeScreen> */}
        </Container>
      </main>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
