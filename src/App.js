import './App.css';
import {Routes,Route} from "react-router-dom";
import Home from './pages/Home';
import Navbar from './components/Navbar'
import Translate from './pages/Translate';
function App() {
  return (
    <>
     <Navbar title='TextUtils' aboutText='About'></Navbar>
      <Routes>
        <Route path='/' element = {<Home></Home>}></Route>
        <Route path='/translate' element = {<Translate></Translate>}></Route>
      </Routes>
    </>
  );
}

export default App;
