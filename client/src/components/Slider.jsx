import React from "react";
import '../components/Slider.css'

const Slider = () => {
  return (
    <div>
      <div class="parent">
        <div class="div1"> 
           <img src="https://bc.imgix.net/banner/a6/68/e9/167929759359439.png?auto=format&q=80&dpr=1&w=320" alt="" />
        </div>
        <div class="div2">
            <img src="https://bc.imgix.net/banner/b7/43/52/167903007661032.png?auto=format&q=80&dpr=1&w=320" alt="" />
        </div>
        <div class="div3">
            <img src="https://bc.imgix.net/banner/b9/20/bd/167903216435116.png?auto=format&q=80&dpr=1&w=320" alt="" />
        </div>
        <div class="div4"> 
           <img src="https://bc.imgix.net/banner/83/c5/44/166936355032979.png?auto=format&q=80&dpr=1&w=320" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Slider;