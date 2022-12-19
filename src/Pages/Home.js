import React from "react";
import { SysInfo } from "../models";
import { HeroLayout2 } from "../ui-components";

function Home() {
  const overs ={
    "HeroLayout2":{
      width:"100%"
    },
    "name":{
      fontSize:"40px"
    }
  }
  var sysInfo = {name:"Deals", description:"Пошук товарів з найкращою ціною"}
    return (
      <div className="App">
        <HeroLayout2 sysInfo={sysInfo} overrides={overs}></HeroLayout2>
        </div>
    );
  }

export default Home;