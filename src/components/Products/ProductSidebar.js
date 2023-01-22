import { Button, Card, Grid,Paper } from "@mui/material"
import React,{useState} from "react";
import Shoppingdata from "./ShoppingItems";
import AddIcon from '@mui/icons-material/Add';
import {NavLink, useNavigate} from "react-router-dom"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useSelector, useDispatch } from 'react-redux';
import {addToCart } from '../reducers/cartSlice';
import Navbar from "../Navbar";



const ProductSidebar = () => {
 
    const [count, setCount] = useState(0);
    const [productsData, setProductdata]=useState(Shoppingdata);

    const [cartProducts,setCardproducts]=useState([])
  const increment = () => {
    setCount(count + 1)
  }
  const navigate = useNavigate();
  const dispatch=useDispatch();
    
  
  
 
  return (
    <>
    <Grid>
<Navbar/>
    </Grid>
     {/* <Grid style={{display:'flex',justifyContent:'flex-end',backgroundColor:"grey"}}>
            <Button color="inherit">View Cart</Button>
        </Grid> */}
      <Grid xs={12} container style={{marginLeft:'30%',marginTop:"3%"}}>
        {/* <Grid style={{marginLeft:"1%"}}>
            
            <Button color="inherit" variant="outlined" onClick={()=>{handleAllproducts()}}>All</Button>
        </Grid> */}
        <Grid style={{marginLeft:"1%"}}>
            <Button color="inherit" variant="outlined">Mens wear</Button>
        </Grid>
        <Grid style={{marginLeft:"1%"}}>
            <Button color="inherit" variant="outlined">Women's Wear</Button>
        </Grid>
        <Grid style={{marginLeft:"1%"}}>
            <Button color="inherit" variant="outlined">Children Wear</Button>
        </Grid>
        
        </Grid>
        
        <Grid xs={12} container style={{marginLeft:"10%",marginTop:"3%"}} > 
             
         {productsData.map((shopItems, index) => {
        return (
           <Grid xs={2} style={{marginLeft:"2%",marginRight:"2%",marginBottom:"3%"}} >
            <Paper style={{paddingBottom:"5%"}}>
                <Grid xs={12}>
                    <img src={shopItems.cover} alt="" style={{width:"150px",height:"150px"}}/>
                </Grid>
                <Grid style={{marginTop:"30%"}}>
                {/* <Grid xs={4}><span style={{alignItems:'left'}}>{shopItems.discount}% Off</span></Grid> */}
                <Grid xs={8} style={{color:'grey'}}>
                    <Button color="inherit" onClick={()=>{navigate(`/Product/${index}`)}}>{shopItems.name}</Button>
                    </Grid>
                <Grid container>
                <Grid xs={6} style={{color:'#f88379'}}> 
                <h4>${shopItems.price}.00 </h4>
                </Grid>
               
                <Grid xs={6} style={{paddingTop:"8%"}}>
                <button onClick={()=>{dispatch(addToCart(shopItems))}}>
                <AddIcon/>
                  </button>
                </Grid>
                </Grid>
                </Grid>
            </Paper>
        </Grid>
    
        )
      })}
      </Grid>


     
    </>
  )
}

export default ProductSidebar
