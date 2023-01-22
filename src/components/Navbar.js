import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {useNavigate} from "react-router-dom"




export default function Navbar(props) {
  const navigate = useNavigate();

 
  
  return (
    <Box sx={{ display: 'flex',}}>
      <CssBaseline />
      <AppBar component="nav" style={{ background: '#2E3B55' }}>
        <Toolbar>
         
          <Typography
            variant="h6"
            noWrap
            sx={{ flexGrow: 1,textAlign:"left"}}
          >
            KING collections
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {/* {navItems.map((item) => ( */}
            <Button  sx={{ color: '#fff' }} onClick={()=>navigate("/")}>
                Home
              </Button>
              <Button  sx={{ color: '#fff' }} onClick={()=>navigate("/products")}>
                products
              </Button>
              <Button  sx={{ color: '#fff' }} onClick={()=>navigate("/Cart")}>
                Cart
              </Button>
            {/* ))} */}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        
      </Box>
    </Box>
  );
}
