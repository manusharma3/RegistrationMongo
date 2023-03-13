import './App.css';
import Signup from "./Signup"
import "./Mask2.css"
import Signin from './Signin';
import NavBar from './NavBar';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import About from './About';

function App() {

  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="about" element={<About/>}/>
      <Route path="signin" element={<Signin />}/>    
      {/* {//working on path Signin?} */}
      <Route path="signup" element={<Signup />}/>
    </Routes>
</BrowserRouter>
  );
}

export default App;
