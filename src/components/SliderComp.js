import React from 'react';
import Slider from "react-slick";
import Sdata from "./Sdata";
import { Grid } from '@mui/material';

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
const SliderComp = () => {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => {
      return <ul style={{ margin: "0px" }}>{dots}</ul>
    },
  };

  
  return (
    <div>
      <Slider {...settings}>
      {Sdata.map((value, index) => {
          return (
            <>
            <Grid  xs={12} key={index} container>
              <Grid xs={2}></Grid>
           <Grid xs={4}>
           <h1>{value.title}</h1>
                  <p>{value.desc}</p>
                  
           </Grid>
           <Grid xs={6} style={{width:"150px",height:'450px',objectFit:'cover'}}>
           <img src={value.cover} alt='' />
           </Grid>

            </Grid>
              
            </>
          )
        })}
      </Slider>
      </div>
  )
}
export default SliderComp