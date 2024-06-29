import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import { Container, Box, Typography, TextField, IconButton, Avatar, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const categories = [
  { id: 1, name: 'Best Sales', color: '#FFEB3B' },
  { id: 2, name: 'Best Matched', color: '#FF9800' },
  { id: 3, name: 'Popular', color: '#4CAF50' },
];

const products = [
  { id: 1, name: 'Smartphone', price: 899, rating: 4.5, image: 'smartphone1.png' },
  { id: 2, name: 'Smartphone', price: 899, rating: 4.0, image: 'smartphone2.png' },
  { id: 3, name: 'Smartphone', price: 789, rating: 4.7, image: 'smartphone3.png' },
  { id: 4, name: 'Smartphone', price: 999, rating: 5.0, image: 'smartphone4.png' },
];

function App() {
  return (
    <ErrorBoundary>
      <Container>
        {/* Верхняя панель */}
        <Box display="flex" justifyContent="space-between" alignItems="center" py={2}>
          <Typography variant="h5">Electronics</Typography>
          <Box display="flex" alignItems="center">
            <TextField placeholder="Search" variant="outlined" size="small" />
            <IconButton>
              <SearchIcon />
            </IconButton>
            <IconButton>
              <ShoppingCartIcon />
            </IconButton>
            <IconButton>
              <Avatar>
                <AccountCircleIcon />
              </Avatar>
            </IconButton>
          </Box>
        </Box>

        {/* Категории */}
        <Box py={2}>
          <Typography variant="h6">Categories</Typography>
          <Grid container spacing={2}>
            {categories.map(category => (
              <Grid item key={category.id}>
                <Button variant="contained" style={{ backgroundColor: category.color }}>
                  {category.name}
                </Button>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Список продуктов */}
        <Box py={2}>
          <Grid container spacing={2}>
            {products.map(product => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                <Card>
                  <CardMedia
                    component="img"
                    height="140"
                    image={`/${product.image}`}  // Убедитесь, что изображения доступны по этому пути
                    alt={product.name}
                  />
                  <CardContent>
                    <Typography variant="h6">{product.name}</Typography>
                    <Typography variant="body2" color="textSecondary">${product.price}</Typography>
                    <Typography variant="body2" color="textSecondary">Rating: {product.rating} ⭐</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </ErrorBoundary>
  );
}

export default App;
