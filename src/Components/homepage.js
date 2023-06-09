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
import dotted from "../Images/dottedimg.png"
import laptop from "../Images/div3img.png"
import meter from "../Images/meter.png"
import potion from "../Images/potion.png"
import shield from "../Images/shield.png"
import light from "../Images/light.png"
import palace from "../Images/palace.png"
import dudes from "../Images/dudes.png"
import blog from "../Images/blog.png"
import chat from "../Images/chat.png"
import color from "../Images/color.png"
import custom from "../Images/custom.png"
import developer from "../Images/developer.png"
import puzzle from "../Images/puzzle.png"

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
                <h3 className="platform" > Shopify's platform provides APIs, SDKs, primitives, and tools for building storefronts, custom cart and checkout flows, and seamless integrations with your systems. </h3>
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

        <div className="maskimage"> <img src={dotted} /> </div>

        <div className="maindiv3" >
            <h1 className="best" > Best-in-class developer <br></br> experience </h1>
            <p className="testing" > Accelerate development, testing, and deployment with our suite of <br></br> tools, including the Hydrogen framework, Shopify CLI, example apps, <br></br> and development stores. </p>
            <p className="build" > Build quickly with official libraries for popular frameworks and <br></br> languages from JavaScript and React to Node, Ruby, and PHP. </p>
            <img className="laptop" src={laptop} />
        </div>

        <div className="div4">
            <h1 className="flex" > Flexibility & extensibility <br></br> without compromise </h1>
            <img className="dotted" src={dotted} /> 
            <div className="windows" >
                <div className="design"> <img src={meter} /> 
                <h3> Designed for scale </h3> 
                <p className="designp" > Build custom solutions using the same components and infrastructure from Shopify that powers 10% of all US commerce. </p>
            </div>
                <div className="global"> <img src={light} />
                 <h3> Global infrastructure </h3> 
                 <p className="globalp"> Our global footprint spans 275+ points of presence to deliver 100ms average Storefront API response times. </p>
            </div>
                <div className="battle"> <img src={shield} />
                 <h3> Battle-tested reliability </h3> 
                 <p className="battlep" > Shopify's platform powers the largest brands and sales events in the world, offering peace of mind with 99.99% uptime. </p>
            </div>
                <div className="innovation"> <img src={potion} />
                 <h3> Continued innovation </h3> 
                 <p className="innovationp" > We're always improving our platform, and investing in open source tools like Hydrogen and Remix for building storefronts. </p>
            </div>
        </div>

        <div className="div5">
            <h1 className="audience" > A built-in, global <br></br> audience </h1>
            <p className="sell" > Build and sell apps and themes that customize and extend Shopify's <br></br> capabilities for millions of merchants around the world. </p>
            <p className="app" > The Shopify App Store and Theme Store make it easy to build great <br></br> experiences that attract merchants and open up new revenue streams. </p>
            <img className="palace" src={palace} />
        </div>

        <div className="div6" >
            <div className="row1">
                <div className="start"> 
                    <img src={dudes}/>
                    <h2> Get started </h2> 
                </div>
                <div className="custom">
                    <img src={custom}/>
                    <h2> Build a custom storefront </h2>
                    <p> Create custom storefronts and deliver <br></br> unique shopping experiences </p>
                </div>
                <div className="buildapp">
                    <img src={puzzle} />
                    <h2> Build an App  </h2>
                    <p> Develop apps to customize and extend <br></br> Shopify's platform </p>
                </div>
                <div className="color">
                <img src={color} />
                    <h2> Build a Theme  </h2>
                    <p> Design beautiful themes to shape the <br></br> online store experience </p>
                </div>
            </div>
            <div className="row2">
                <div className="join">
                    <h2> Join a Community <br></br> of builders </h2>
                </div>
                <div className="chat">
                    <img src={chat} />
                    <h2> Developer Forums </h2>
                    <p> Q&A and advice from Shopify <br></br> community experts </p>
                </div>
                <div className="developer">
                    <img src={developer} />
                    <h2> Developer Changelog </h2>
                    <p> The latest shopify ecosystem updates </p>
                </div>
                <div className="blog">
                    <img src={blog} />
                    <h2> Shopify partner blog </h2>
                    <p> Educational resources and product previews </p>
                </div>
            </div>
        </div>

        <div className="footer">
            <div className="updates">
                <h3> Updates & News </h3>
                <p className="log"> Developer changelog </p>
                <p className="partner"> Partner blog </p>
                <p className="engi"> Engineering blog </p>
                <p className="ux"> UX blog </p>
            </div>
            <div className="community">
                <h3> Community </h3>
                <p className="forum"> Developer forum </p>
                <p className="discord"> Discord </p>
                <p className="twitter"> Twitter </p>
                <p className="youtube"> YouTube </p>
            </div>
            <div className="events">
            <h3> Events </h3>
                <p className="unite"> Unite </p>
                <p className="meetups"> Meetups </p>
            </div>
            <div className="legal"> 
            <h3> Legal </h3>
                <p className="service"> Terms of Service </p>
                <p className="appi"> API Terms of Service </p>
                <p className="privacy"> Privacy policy </p>
            </div>
            <div>
                <p className="to"> Subscribe to receive updates from Shopify </p>
                <input className="input1" type={"search"} placeholder="Enter Email"/>
                <input value={"Subscribe"} className="button" type={"button"} />
            </div>
        </div>

    </div>
</>
    )
} 

export default HomePage;