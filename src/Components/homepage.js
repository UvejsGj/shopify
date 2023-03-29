import "./homepage.css"
import { FaShopify } from "react-icons/fa"
import { GiMagnifyingGlass } from "react-icons/gi"
import { CgSun } from "react-icons/cg"
import { WiDirectionUpRight } from "react-icons/wi"
import { WiDirectionRight } from "react-icons/wi"
import house from "../Images/div1img.png"
import mattel from "../Images/mattel.png"
import allbirds from "../Images/allbirds.png"
import glossier from "../Images/glossier.png"
import spanx from "../Images/spanx.png"
import staples from "../Images/staples.png"
import coty from "../Images/coty.png"
import klaviyo from "../Images/klaviyo.png"
import mining from "../Images/div2img.png"

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
            <h1 className="title" > Build any commerce <br></br> experience </h1>
            <p className="compose" > Compose, customize, and extend every part of the commerce stack—from storefront to checkout to backend integrations—and create unique experiences for your brand or millions of merchants around the world. </p>
            <h3 className="explore" > Explore Docs <WiDirectionRight className="right" size={50} /></h3>
        </div>

        <div className="logos" >
            <img className="mattel" src={mattel} />
            <img className="allbirds" src={allbirds} />
            <img className="glossier" src={glossier} />
            <img className="spanx" src={spanx} />
            <img className="staples" src={staples} />
            <img className="coty" src={coty} />
            <img className="klaviyo" src={klaviyo} />
        </div>

        <div className="maindiv2" >
                <img className="mining" src={mining} />
                <h1 className="title2" > A complete set of APIs, primitives,  and tools designed for commerce </h1>
                <h3 className="platform" > Shopify’s platform provides APIs, SDKs, primitives, and tools for building storefronts, custom cart and checkout flows, and seamless integrations with your systems. </h3>
                <h3 className="full" > Get full flexibility to assemble, customize, and extend the entire commerce experience, all with the backing of our global infrastructure, scalability, and reliability. </h3>
            <div className="list" >
                <p className="api" > ✓ APIs in GraphQL and REST </p>
                <p className="react" > ✓ React-based framework and component library for accelerating storefront development </p>
                <p className="commerce"> ✓ Commerce primitives for building subscription plans, selling B2B, expanding internationally, and more </p>
                <p className="shopify1"> ✓ Shopify CLI for building, testing, and managing your integration </p>
                <p className="ready"> ✓ Ready-to-use UI components for getting started quickly </p>
                <p className="ecosystem" > ✓ Ecosystem of prebuilt and reference implementations for integrations with systems like Netsuite and Sanity </p>
            </div>
        </div>

        <div className="maindiv3" >

        </div>
        </>
    )
} 

export default HomePage;