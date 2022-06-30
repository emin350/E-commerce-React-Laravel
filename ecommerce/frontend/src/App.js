import Login from "./Login";
import Register from "./Register";
import AddProduct from "./AddProduct";
import UpdateProduct from "./UpdateProduct";
import Protected from "./Protected";
import ProductList from "./ProductList";
import Search from "./Search";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Protected Cmp={ProductList}/>}/>
          <Route path="/add" element={<Protected Cmp={AddProduct}/>}/>
          <Route path="/update/:id" element={<Protected Cmp={UpdateProduct}/>} />
          <Route path="/search" element={<Protected Cmp={Search}/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
