import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Signup from './componets/Signup';
import Login from './componets/Login';
import Navbar from './componets/Navbar';
import MyAccount from './componets/MyAccount';
import CreateBlog from './componets/CreateBlog';
import MyPost from './componets/MyPost';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <div className="container">
          <Routes>


            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/Myaccount' element={<MyAccount />} />
            <Route path='/Createblog' element={<CreateBlog />} />
            <Route path='/MyPost' element={<MyPost />} />




          </Routes>

        </div>

      </Router>
    </div>
  );
}

export default App;
