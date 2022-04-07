import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './Home.css';
const Home = () => {
  const [users, setUser] = useState([]);
 
  useEffect(() => {
    loadUsers();
  }, []);
 
  const loadUsers = async () => {
    const result = await axios.get("http://localhost/ci_cart_geek/show_product");
    setUser(result.data.reverse());
  };
 
  const deleteUser = (productId) =>
  {
    axios.delete('http://localhost/ci_cart_geek/delete-product/delete/'+productId)
    .then((result)=>{
      loadUsers();
    })
    .catch(()=>{
      alert('Error in the Code');
    });
  };
 
  return (
    <body>
    <div>
    <a href=" ">Add Product</a>
    <div className="container">
      <div className="py-4">
        <h3 class="mb-3 text-center">Product Details</h3>
        <table class="table border shadow">
          <thead class="thead-orange">
            <tr bgcolor="#FF8C00">
              <th scope="col">Image</th>
              <th scope="col">Item Name</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.product_name}</td>
                <td>{user.product_price}</td>
                <td>{user.product_description}</td>
                <td>
                 <Link class=" mr-2" to={`/products/edit/${user.id}`}>
                     <i class="fa fa-edit" aria-hidden="true"></i> 
                  </Link>
                  <Link class="" onClick={() => deleteUser(user.id)}>
                  <i class="fa fa-trash" aria-hidden="true"></i> 
                  </Link>
                </td>
              </tr>
             ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
    </body>
  );
};
 
export default Home;