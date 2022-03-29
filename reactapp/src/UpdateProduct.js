mport react from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import React,{useState} from "react";
import "./ProductAdd.css"

const UpdateProduct =() =>{
    const [user,setUser] = useState({
        product_name: "",
        product_price: "",
        product_description: "",
        image_url:"",
        quantity:""

    });
const {product_name,product_price,product_description,image_url,quantity}=user;
const onInputChange = e =>{
    setUser({...user,[e.target.name]:e.target.value});
};
return(
    <div className="container g-light mt-4">
        <div className="row">
            <div className="col-sm-4 mx-auto ">
            <center>
                <h2 className="text-center mb-4">Update Product</h2>
                </center>
                <center>
                <form onSubmit="">
                    <div className="form-group">
                        <input 
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter Product Name"
                        name="product_name"
                        value={product_name}
                        onChange={e => onInputChange(e)}
                        />
                    </div>
                    <br>
                    </br>
                    <div className="form-group">
                        <input 
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter Product Price"
                        name="product_price"
                        value={product_price}
                    onChange={e => onInputChange(e)}
                    />
                    </div>
                    <br>
                    </br>
                    <div className="form-group">
                        <input 
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter Product Description"
                        name="product_description"
                        value={product_description}
                        onChange={e => onInputChange(e)}
                        />

                    </div>
                    <br>
                    </br>
                    <div className="form-group">
                        <input 
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter Image url"
                        name="image_url"
                        value={image_url}
                    onChange={e => onInputChange(e)}
                    />
                    </div>
                    <br>
                    </br>
                    <div className="form-group">
                        <input 
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter Quantity "
                        name="quantity"
                        value={quantity}
                    onChange={e => onInputChange(e)}
                    />
                    </div>
                    <br>
                    </br>
                    <br>
                    </br>
                    <center>
                    <button className="fluid ui button blue">Update</button>
                    </center>
                </form>
                </center>
            </div>
        </div>
    </div>
);
};
export default UpdateProduct;