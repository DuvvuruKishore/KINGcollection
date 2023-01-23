import { Paper,Grid,Button} from '@mui/material';
import React,{useEffect,useState} from 'react';
import { useParams } from 'react-router';
import ShoppingItems from './Products/ShoppingItems';
import AddIcon from '@mui/icons-material/Add';
import {useNavigate,} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import {addToCart } from './reducers/cartSlice';
import Navbar from './Navbar';



const Productdesc = () => {

    const {id}=useParams();
    const [state,setState]=useState(ShoppingItems);
    const [product,setProduct]=useState({})
    const navigate = useNavigate();
    const dispatch=useDispatch();
  

    useEffect(()=>{
    setProduct(state[id])
    },[])

    useEffect(()=>{
        console.log(product)
    })
  return (
    <div>
        <Navbar/>
        <Grid xs={3} style={{justifyContent: "flex-start"}}>
              </Grid>
       <Paper style={{marginLeft:"15%",marginRight:"15%",paddingTop:"6%",paddingBottom:"6%"}}>
        <Grid container xs={12}>
        <Grid xs={6}>
        <img src={product.cover} alt=""/>
        </Grid>
        <Grid xs={6}>
        <Grid sx={{textAlign:"left"}}>
            <h3 >{product.name}</h3>
        </Grid>
        <Grid sx={{textAlign:"left"}}>
            <p>{product.desc}</p>
        </Grid>
        <Grid xs={12} container>
        <Grid xs={6}>
        <Grid sx={{textAlign:"left",fontWeight:"bold"}}>
           Discount:${product.discount}
        </Grid>

        <Grid sx={{textAlign:"left",fontWeight:"bold"}}>
            Cost:${product.price}
        </Grid>
        </Grid>
        <Grid style={{textAlign:"right"}}>
        <button onClick={()=>{dispatch(addToCart(product))}}>
                <AddIcon/>
                  </button>
               
                </Grid>
       
        </Grid>
        <Grid style={{marginTop:"6%",textAlign:"left"}}>
        <Button color="inherit" variant="outlined" onClick={()=>navigate("/Cart")}>view Cart</Button>
        </Grid>
        </Grid>
        </Grid>
       </Paper>
    </div>
  )
}

export default Productdesc