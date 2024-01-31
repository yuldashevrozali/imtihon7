import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import './App.css'
import Products from "./pages/products";
import Register from "./pages/register";
import Login from "./pages/login";

export default function App() {
  return (
    <BrowserRouter>
      <div className="comforty">
        <div className="register">
          <button type="text"> <Link to='/sign-in'>sign in/guest</Link></button>
          <button className="pl-10" type="text"><Link to='/sign-up'>create account</Link></button>
        </div>


        <header className="header flex base-300 justify-between">
          <div className="logo">
            <Link to="/"><p>C</p></Link>
          </div>
          <nav>
            <ul className="flex">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/card">Cart</Link></li>
            </ul>
          </nav>
          <div >
            <div className="flex checkbox11">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.3807 2.01886C9.91573 3.38768 9 5.3369 9 7.49999C9 11.6421 12.3579 15 16.5 15C18.6631 15 20.6123 14.0843 21.9811 12.6193C21.6613 17.8537 17.3149 22 12 22C6.47715 22 2 17.5228 2 12C2 6.68514 6.14629 2.33869 11.3807 2.01886Z"></path></svg>
              <input type="checkbox" id="checkbox" />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.00488 9H19.9433L20.4433 7H8.00488V5H21.7241C22.2764 5 22.7241 5.44772 22.7241 6C22.7241 6.08176 22.7141 6.16322 22.6942 6.24254L20.1942 16.2425C20.083 16.6877 19.683 17 19.2241 17H5.00488C4.4526 17 4.00488 16.5523 4.00488 16V4H2.00488V2H5.00488C5.55717 2 6.00488 2.44772 6.00488 3V9ZM6.00488 23C4.90031 23 4.00488 22.1046 4.00488 21C4.00488 19.8954 4.90031 19 6.00488 19C7.10945 19 8.00488 19.8954 8.00488 21C8.00488 22.1046 7.10945 23 6.00488 23ZM18.0049 23C16.9003 23 16.0049 22.1046 16.0049 21C16.0049 19.8954 16.9003 19 18.0049 19C19.1095 19 20.0049 19.8954 20.0049 21C20.0049 22.1046 19.1095 23 18.0049 23Z"></path></svg>

            </div>
          </div>
        </header>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/products' element={<Products />} />
          <Route path='/sign-up' element={<Register />} />
          <Route path='/sign-in' element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
