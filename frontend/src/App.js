// import './App.css';
import{
  BrowserRouter as Router,
  Routes,
  Route,
  Link
}from "react-router-dom"
import Signin from './pages/signin/Signin'
import Signup from "./pages/signup/Signup"
import Reset from "./pages/reset/Reset"
import Feed from "./pages/feed/Feed"


function App() {
  return (
    <div>
        <Router>
          <Routes>
              <Route path ="/" element={<Signin/>}/>
              <Route path="/Signup" element = {<Signup/>}/>
              <Route path="/Reset" element = {<Reset/>}/>
              <Route path="/Feed" element={<Feed/>}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
