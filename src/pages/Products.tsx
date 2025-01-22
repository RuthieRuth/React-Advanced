import { Box, Button, Card, CardActions, CardContent, CardMedia, Rating, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Product } from "../types/product";
import { getProducts } from "../services/api";
import { Link } from "react-router-dom";
//import { CastRounded } from "@mui/icons-material";

function Products() {
  const [products, setProducts] = useState<Product[]>([]);

  //search bar

  useEffect(() => {
    getProducts().then((products) => setProducts(products)); }, []);

  console.log(products);


  return (
    <div>
    <Typography variant="h4" component="h1" gutterBottom> Products Page </Typography>

    <Box sx ={{mx:'auto', p:2}}>
      <div>
      <Stack sx={{justifyContent: 'space-around', direction:'row', flexWrap: 'wrap', display: 'grid', gap: 5}}>

       {products.map ((product) => (
        <Card sx = {{minWidth: 200, display:"flex", flexDirection:"column", justifyContent:"space-between", width: '15%'}}>
          <CardMedia sx = {{height:250}} image={product.image} title={product.title} ></CardMedia>
            <Typography variant="h6" component="h2">{product.title}</Typography>
            <Typography variant="body2" component="p">{product.price}</Typography>

          <CardContent>
            <Typography variant="body2" component="p">{product.description}</Typography>
          </CardContent>

          <CardActions>
            <Rating value={product.rating.rate}/>
          </CardActions>

          <Button  color="inherit" to={`/products/${product.id}`} component={Link} state={{product}}> Single Page</Button> 
        </Card>
       ))}

     
      </Stack>
      
      </div>
    </Box>
  
  </div>
  );
}

export default Products;
