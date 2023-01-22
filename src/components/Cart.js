import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment,decrement,reset ,incrementByAmount} from './reducers/countReducer';

import {Paper,Grid, Divider,Button} from '@mui/material';
import Toolbar from '@mui/material/Toolbar';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import {NavLink, useNavigate} from "react-router-dom"
import Navbar from './Navbar';



function Counter() {
    const cart =useSelector((state)=>state.cart);
    const navigate = useNavigate();
  
    var total = cart.cartItems.reduce((accum,item) => accum + parseInt(item.price), 0)


  return (
    <div >
       <Navbar/>
        {cart.cartItems.length===0?"no items in the cart":
        <>
        
                 <TableContainer component={Paper} style={{}}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left" style={{fontWeight:"bold"}}>Item cover</TableCell>
            <TableCell align="left" style={{fontWeight:"bold"}}>Item name</TableCell>
            <TableCell align="left" style={{fontWeight:"bold"}}>quantity</TableCell>
            <TableCell align="left" style={{fontWeight:"bold"}}>price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart.cartItems.map((row) => (
            <TableRow>
              <TableCell align="left"><img src={row.cover} alt="" style={{width:"20%",height:"20%"}}/></TableCell>
              <TableCell align="left">{row.name}</TableCell>
              <TableCell align="left">{row.cartQuantity}</TableCell>
              <TableCell align="left">{row.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <Grid container xs={12}>
        <Grid xs={6}></Grid>
        <Grid xs={4}>
        <h4>Total summary</h4>
        </Grid>
        <Grid>
        <p>{total}</p>
        </Grid>
    </Grid>
{/* 
                </div>
          })} */}
             
            
        </>
        }
    </div>
  )
}

export default Counter