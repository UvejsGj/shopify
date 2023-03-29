import "./homepage.css"
import { FaShopify } from "react-icons/fa"
import { GiMagnifyingGlass } from "react-icons/gi"
import { CgSun } from "react-icons/cg"
import { WiDirectionUpRight } from "react-icons/wi"
import house from "../Images/div1img.png"

function HomePage() {
    return (
        <>
        <div className="navbar" >
          <p className="logo">  <FaShopify className="shopify" color='green' size={25} /> .dev </p> 
          <a> Solutions ▼ </a>
          <a> Blog </a>
          <a> Documentation ▼ </a>
          <input className="input" type={"search"} placeholder="     Search docs"  /> <GiMagnifyingGlass className="glass" color="white" size={17}/>
          <CgSun className="sun" color="orange" size={20}/>
          <a className="login" > Log In </a>
          <a className="signup"> Sign Up </a>   
        </div>

        <div className="maindiv" >
            <img className="image" src={house} />
            <h1 className="green" > Shopify Editions | Winter '23: Explore 100+ product updates <WiDirectionUpRight className="rightup" size={50} color={'green'} /> </h1>
        </div>
        </>
    )
} 

export default HomePage;