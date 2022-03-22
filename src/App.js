import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"

import * as React from "react";
import "./App.css";
import Navbar from "./MyComponents/Navbar";
import CardComponent from "./MyComponents/CardComponent";
import StarIcon from '@mui/icons-material/Star';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

// import {Button} from '@mui/material';
// import Button from '@mui/material/Button';
// import Card from '@mui/material/Card';

import {
  Typography,
  Button,
  Card,
  CardContent,
  CardActions,
} from "@mui/material";

function App() {
  return (
    <>
      <Navbar />
      <CardComponent />

      <footer className="footer d-flex bg-dark text-light justify-content-center align-items-center" >
        <div>
        Copyright &copy; Your Website 2021
        </div>
      </footer>
      
    </>
  );
}

export default App;
