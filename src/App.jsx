import './app.css'
import Home from './pages/Home/Home'
import UserList from './pages/userList/UserList'
import User from './pages/user/User'
import NewUser from './pages/newUser/NewUser'
import ProductList from './pages/productList/ProductList'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Product from './pages/product/Product'
import NewProduct from './pages/newProduct/NewProduct'
import Login from './pages/login/Login'
import { useSelector } from 'react-redux'


function App() {
  const admin=useSelector(state=>state.user.admin)
  return (
    <Router>
      <Routes >
        {!admin &&
        <Route path='/' element={<Login />} />
        }
        {admin && (
          <>
            <Route exact path="/" element={<Home />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/user/:id" element={<User />} />
            <Route path="/newuser" element={<NewUser />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/newproduct" element={<NewProduct />} />
          </>
        )
        }
      </Routes>
    </Router>
  )
}

export default App
