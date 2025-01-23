import { Box, Button, Card, CardActions, CardContent, CardMedia, Rating, Stack, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Product } from "../types/product";
import { getProducts } from "../services/api";
import { Link } from "react-router-dom";
//import { CastRounded } from "@mui/icons-material";

function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  
  //search bar
  const [searchInput, setSearchInput] = useState<string>('');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  const handleSearch = (event: any) => {
    event.preventDefault();

      const searchInput = event.target.value.toLowerCase();
      setSearchInput(searchInput);
      console.log(searchInput);
  
      if (searchInput === '') {
        setFilteredProducts(products);
      } else {
        const filteredProducts = products.filter((product) =>
          product.title.toLowerCase().includes(searchInput)
        );
        setFilteredProducts(filteredProducts);
      }
    };


  useEffect(() => {
      getProducts().then((products) => {
        setProducts(products);
        setFilteredProducts(products); // Show all products initially
      });
    }, []);

  console.log(products);


  return (
    <div>
    <Typography variant="h4" component="h1" gutterBottom> Products Page </Typography>

    <TextField type="text" value={searchInput} label="search" onChange={handleSearch}></TextField>
    

    <Box sx ={{mx:'auto', p:2}}>
      <div>
      <Stack display='row' sx={{justifyContent: 'space-around', flexWrap: 'wrap',  gap: 5}}>

       {filteredProducts.map ((product) => (
        <Card sx = {{minWidth: 200, display:"flex", flexDirection:"column", justifyContent:"space-between", width: '15%'}}
              key= {product.id}>
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
