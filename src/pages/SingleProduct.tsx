import { Link, useLocation } from "react-router-dom";
import { Product } from "../types/product";
import { Button, CardMedia } from "@mui/material";


const SingleProduct = () => {

    const location = useLocation();
    const product = (location.state as {product: Product})?.product;
    console.log(product); 

    return (
        <div>
            <h3>SingleProduct</h3>
            <p>{product.title}</p>
            <CardMedia sx = {{height:250, width:250}} image={product.image} ></CardMedia>
            <p>{product.price}</p>
            <p>{product.description}</p>
            <Button color="inherit" to={`/products/`} component={Link}> Back to Products </Button>
        </div>
    )
};

export default SingleProduct;