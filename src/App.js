import { useEffect, useRef, useState } from "react";

import AOS from "aos"
import 'aos/dist/aos.css'

function App() {
  useEffect(_=> { AOS.init({duration:2000}) },[])
  const [close , setclose]  = useState(true)

  return (
    <div className="App"  >

      {/* ( 1 ) */}
      <div className="nav ">
        <div className="container">

          <div className="left">
            <div className="icon">
              <img src="./icon.png" alt="" />
            </div>
            <ul className="ul">
              <li>Sell</li>
              <li>Market</li>
              <li>Manage</li>
            </ul>
          </div>

          <i onClick={_=> setclose(!close)} className={`fa-solid fa-${close ? "bars" :"xmark"}`}></i>

          <ul className="right" style={close ? {right: "-1000px"} : {right: "-20px"}}>
            <li>Learn</li>
            <li>Partners</li>
            <li>Pricing</li>
            <li>Login</li>
            <div className="btn">Get started for FREE</div>
          </ul>
        </div>
      </div>

      {/* ( 2 ) */}
      <div id="Landing" className="Landing"   >
        <div className="container">
        <div className="right">
          <h2>Start Selling <span></span></h2>
          <p>Become the next online success story — sell anything, anywhere, to anyone. Control everything from a single platform with centralized inventory,order management, and pricing.</p>
          <button> Get started for free</button>
        </div>

        <div className="left">

          {/* <div id="div2">
              <h1>Div 2</h1>
              <p>Content for div 2 here.</p>
              <img id="phone" src="https://don16obqbay2c.cloudfront.net/wp-content/themes/ecwid/images/hpc/phone-slide1_.jpg" alt="Phone"/>
          </div> */}
          <video autoPlay={true}  loop playsInline={true} type="video/mp4"     src="./WhatsApp Video 2023-10-10 at 23.42.53_e3723d33.mp4" ></video>

        </div>

        </div>
      </div>


      {/* ( 3 ) */}
      <div className="Sell" data-aos="fade-up" >
        <div className="container">
          <div className="coverImg">
            <div className="cover" data-aos="fade-left" ><img className="FirstImg" src="./Slider_Website_1.png" alt="" /></div>
            <div className="cover1" data-aos="fade-right" ><img className="SecondImg" src="./Slider_Website_2.png" alt="" /></div>
          </div>

          <div className="right">
            <h2>Sell everywhere</h2>
            <p>
              Bring your products and services to the world. Get started with
              selling on one channel and expand everywhere online and in person.
            </p>
            <ul>
              <li>
                Build a <span> new online store </span> or connect to{" "}
                <span> any website </span> in seconds
              </li>
              <li>
                Sell across <span>social media</span> platforms like Facebook,
                Instagram and TikTok
              </li>
              <li>
                Integrate with <span>online marketplaces</span> like Amazon,
                eBay, Walmart and Google Shopping
              </li>
              <li>
                Connect with <span>Point-of-Sale</span> in your physical store
              </li>
              <li>
                Sell <span>on the go</span> with our app for iOS and Android
              </li>
              <div className="Learn-more">
                Learn more <i className="fa-solid fa-arrow-right"></i>
              </div>
            </ul>
          </div>
        </div>
      </div>

      {/* ( 4 ) */}
      <div className="GrowFaster" data-aos="fade-left">
        <div className="container">
          <div className="right" data-aos="fade-right" >
            <h2>Grow faster</h2>
            <p>
              Take your business to the next level with our easy-to-use
              marketing tools to attract and retain more customers.
            </p>
            <ul>
              <li>Automated Google and Facebook ads </li>
              <li>TikTok, Pinterest and Snapchat Pixel integrations </li>
              <li>
                Automated abandoned cart emails and other customizable Marketing
                emails
              </li>
              <li> Discount coupons and gift cards</li>
              <li>SEO tools </li>
              <div className="Learn-more">
                Learn more <i className="fa-solid fa-arrow-right"></i>
              </div>
            </ul>
          </div>

          <div className="coverImg" data-aos="fade-left" >
            <img  className="FirstImg"  src="./Home_page_Google_MC_FB-1686055463.png"  alt=""/>
          </div>
        </div>
      </div>

      {/* ( 5 ) */}
      <div className="ManageSimply" >
        <div className="container">
          <div className="coverImg" >
            <div className="cover3" data-aos="fade-right">  <img  className="FirstImg"   src="./phc-slider-3_slide-1--layer2.png"  alt=""/> </div>
           <div className="cover2" data-aos="fade-left"> <img  className="SecondImg"  src="./phc-slider-3_slide-1--layer1.png"  alt=""/> </div> 

          </div>

          <div className="right">
            <h2>Manage simply</h2>
            <p>
              Make your life easier by automating tasks and integrating new
              tools to help you save time and resources.
            </p>

            <ul>
              <li>
                {" "}
                <span>Connect </span> to your customers’ favorite payment and
                shipping options from over a hundred of integrations.{" "}
              </li>
              <li>
                {" "}
                <span>Automate </span> shipping, tax calculations and inventory
                tracking.{" "}
              </li>
              <li>
                {" "}
                <span> Customize</span> the look of your catalog, checkout page,
                and customer notifications without coding.{" "}
              </li>
              <li>
                {" "}
                <span>Manage </span> orders, products, promotions and customers
                from our top-rated mobile app (iOS + Android).{" "}
              </li>
              <li className="CROWD">
                {" "}
                <svg
                  width="144"
                  height="56"
                  viewBox="0 0 144 56"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>G2Crowd</title>
                  <g fill="#000000" fill-rule="evenodd">
                    <path d="M23.47 32.8v-6.55H40V28A20 20 0 1 1 20 8v6.78a13.22 13.22 0 0 0 0 26.44c5.54 0 10.29-3.59 12.25-8.42h-8.78z"></path>
                    <path d="M26.78 20.4l2.03-2.13a15.07 15.07 0 0 0 2.67-3.49c.47-.96.71-1.86.71-2.69 0-.68-.2-1.37-.58-2.03a3.92 3.92 0 0 0-1.53-1.53A4.56 4.56 0 0 0 27.85 8c-1.39 0-2.49.42-3.37 1.29a4.92 4.92 0 0 0-1.37 3.03l-.03.27h2.23l.03-.2c.08-.62.3-1.13.66-1.52.44-.5 1-.75 1.67-.75.65 0 1.2.2 1.61.62.42.41.63.94.63 1.57 0 .58-.19 1.23-.57 1.94-.37.7-1.1 1.59-2.22 2.72L23 21.5v.99h9.31v-2.1h-5.53zM46.45 48h1V8h-1zM55.6 34.6V20.78c0-1.04.11-2.02.34-2.93.23-.91.6-1.71 1.14-2.4a5.56 5.56 0 0 1 2.09-1.63c.86-.4 1.91-.6 3.16-.6 1.14 0 2.13.15 2.96.47a5.28 5.28 0 0 1 3.26 3.37c.26.78.38 1.63.38 2.56l-4.21 1.07c0-1-.2-1.83-.58-2.46-.38-.64-1-.95-1.85-.95-.51 0-.92.1-1.24.32-.32.2-.56.48-.73.81a3.9 3.9 0 0 0-.36 1.08c-.07.39-.1.75-.1 1.08V34.6c0 .26.03.55.08.88.06.32.18.62.34.9.17.28.4.5.71.69.3.18.7.27 1.18.27 1.6 0 2.4-1.14 2.43-3.42.72.13 1.44.25 2.17.34l2.16.3c-.05 2.11-.63 3.78-1.73 5-1.11 1.23-2.75 1.84-4.91 1.84-2.28 0-3.97-.57-5.06-1.73-1.09-1.15-1.63-2.84-1.63-5.07M76.32 25.64h1.75c1.1 0 1.92-.33 2.45-.97.53-.65.8-1.7.8-3.13 0-1.26-.26-2.25-.78-2.95-.51-.7-1.36-1.06-2.55-1.06h-1.67v8.1zM72 41.17v-27.7h6.35c2.26 0 4.03.62 5.32 1.89 1.28 1.25 1.92 3.3 1.92 6.15 0 1.74-.25 3.22-.75 4.43a5.65 5.65 0 0 1-2.63 2.85l4.04 12.38H81.9L78.34 29.7h-2.02v11.47H72zM93.2 34.57c0 .7.18 1.35.54 1.92.36.57.97.85 1.84.85.88 0 1.5-.3 1.87-.9A4 4 0 0 0 98 34.3V20.26a4.3 4.3 0 0 0-.5-2.06c-.32-.62-.95-.92-1.88-.92-.5 0-.92.11-1.23.33-.32.23-.56.5-.73.84-.17.33-.28.7-.36 1.11-.07.42-.1.79-.1 1.12v13.9zm-4.34-.05V20.58c0-1.09.13-2.08.38-2.98.26-.9.65-1.68 1.18-2.33a5.33 5.33 0 0 1 2.1-1.51c.87-.37 1.9-.55 3.1-.55 1.27 0 2.33.17 3.2.5a4.9 4.9 0 0 1 2.08 1.47c.52.63.88 1.4 1.1 2.3a13 13 0 0 1 .33 3.06v13.53c0 2.41-.54 4.24-1.63 5.48-1.08 1.23-2.8 1.85-5.12 1.85-2.34 0-4.05-.59-5.12-1.77-1.06-1.18-1.6-2.88-1.6-5.11zM104.74 13.47h4.34l.7 5.17c.21 1.7.43 3.42.67 5.17l.18 1.4.27 2.24.26 2.23.17 1.42h.18l.5-3.1.48-3.08 1.72-11.45h3.65l2.32 11.49.52 3.12.52 3.14h.13l.54-6.3.93-11.45h4.34l-3.68 27.7h-4.42l-1.86-12.01-.4-2.34-.4-2.33h-.17l-.83 4.74c-.44 2-.9 3.99-1.33 5.97-.44 1.98-.85 3.97-1.23 5.97h-4.37l-3.73-27.7zM134.86 37.1h1.82c1.05 0 1.78-.27 2.18-.83.39-.56.59-1.37.59-2.43V20.75c0-1-.2-1.8-.57-2.37-.39-.57-1.12-.85-2.2-.85h-1.82V37.1zm-4.34 4.07v-27.7h6.9a7.6 7.6 0 0 1 3.9.85 4.62 4.62 0 0 1 2 2.88c.3.99.44 2.34.45 4.05l.01 6.03c0 2.28-.01 4.24-.04 5.89a13.8 13.8 0 0 1-.5 3.9c-.51 1.57-1.31 2.64-2.41 3.22-1.1.59-2.36.88-3.78.88h-6.53z">
                      {" "}
                    </path>
                  </g>{" "}
                </svg>{" "}
                №1 Easiest Admin e-commerce platform in 2023.{" "}
              </li>
              <div className="Learn-more">
                Learn more <i className="fa-solid fa-arrow-right"></i>
              </div>
            </ul>
          </div>
        </div>
      </div>

      {/* ( 6 ) */}
      <div className="Introducing" >
        <div className="container">
          <div className="right">
            <h2> Introducing Lightspeed Payments</h2>
            <p>
              A fully integrated payment method for your customers. Get paid for
              one-off orders or sell products by subscription. Accept cards,
              Google Pay and Apple Pay, and manage payments right in your store
              control panel.
            </p>
            <button>Learn more</button>
            <a href="">
              Available in the United States, Canada and the United Kingdom.
            </a>
          </div>

          <div className="CoverImg">
            {" "}
            <img src="./LS_Payments-1674548001.png" alt="" />
          </div>
        </div>
      </div>

      {/* ( 7 ) */}
      <div className="Shapes">
        <div className="container">
          <div className="row" data-aos="fade-right">
            <div className="inter">
              <img src="./1.png" alt="" />
              <h2>Live Support</h2>
              <p>Expert support, whenever you need it.</p>
              <div className="Learn-more">
                Learn more <i className="fa-solid fa-arrow-right"></i>
              </div>
            </div>
          </div>

          <div className="row" data-aos="fade-down">
            <div className="inter">
              <img src="./2.png" alt="" />
              <h2>Ecwid App Market</h2>
              <p>
                Take your store to the next level with new tools and apps from
                our Ecwid partners.
              </p>
              <div className="Learn-more">
                Learn more <i className="fa-solid fa-arrow-right"></i>
              </div>
            </div>
          </div>

          <div className="row" data-aos="fade-left">
            <div className="inter">
              <img src="./3.png" alt="" />
              <h2>Manage On Mobile</h2>
              <p>Manage business on the go with the Ecwid Mobile App.</p>
              <div className="Learn-more">
                Learn more <i className="fa-solid fa-arrow-right"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ( 8 ) */}
      <div className="CoverLater">
        <div className="container">
          <h2>Your Own Online Store is Just a Few Clicks Away</h2>
          <button>Get started for free </button>
          <a href="">No credit card required — pay when you're ready.</a>
        </div>
      </div>

      {/* ( 9 ) */}
      <div className="Footer">
        <div className="container">
          <div className="Logo">
            <img src="./LogoDark.png" alt="" />
          </div>
        <div className="top">

          <div className="row">
            <h3>SELL ONLINE</h3>
            <ul>
              <li> Sell Everywere </li>
              <li> Sell on Website </li>
              <li> Sell on Social Media </li>
              <li> Sell on Instagram </li>
              <li> Sell on TikT0k </li>
              <li> Sell on Facebook </li>
              <li> Sell on Google </li>
              <li> Sell on Amazon </li>
              <li> Sell on eBay </li>
              <li> Sell on Walrnart </li>
              <li> Sell on WhatsApp </li>
              <li> Sell on Pinterest </li>
              <li> Sell on Snapchat </li>
              <li> Sell on Youtube </li>
              <li> Sell on Mobile </li>
            </ul>
          </div>

          <div className="row">
            <h3>BUSINESS SOLUTIONS</h3>
            <ul>
              <li> Entrepreneurs </li>
              <li> Dropshipping </li>
              <li> Wholesale </li>
              <li> Local Business </li>
              <li> Retail </li>
              <li> Fashion </li>
              <li> Nonprofits </li>
              <li> Restaurants </li>
              <li> B2B </li>
              <li> B2C </li>
              <li> Health and </li>
              <li> beauty </li>
              <li> Cross-border </li>
              <li> commerce </li>
            </ul>
          </div>

          <div className="row">
            <h3>TECHNOLOGY SOLUTIONS</h3>
            <ul>
              <li> CMS </li>
              <li> WordPress </li>
              <li> Drupal </li>
              <li> Joomla </li>
              <li> Wix </li>
              <li> Squarespace </li>
              <li> Weebly </li>
              <li> Blogger </li>
              <li> Expression </li>
              <li> engine </li>
              <li> Contao </li>
              <li> Jimdo </li>
              <li> Tiida </li>
              <li> Static websites </li>
            </ul>
          </div>

          <div className="row">
            <h3>FOR INDIVIDUALS</h3>
            <ul>
              <li> Artists </li>
              <li> Bloggers </li>
              <li> Photographers </li>
              <li> Creators </li>
              <li> Designers </li>
              <li> Musicians </li>
              <li> Influencers </li>
              <li> Songwriters </li>
              <li> Travelers </li>
              <li> Artisans </li>
            </ul>
          </div>

          <div className="row">
            <h3> ECWID</h3>
            <ul>
              <li> Ecwid 101 </li>
              <li> Features </li>
              <li> Ecwid Reviews </li>
              <li> Showcase </li>
              <li> Derno </li>
              <li> Pricing </li>
              <li> Compare Ecwid </li>
              <li> For developers </li>
              <li> Partner program </li>
              <li> Experts </li>
              <li> API </li>
              <li> Documentation </li>
              <li> Status </li>
              <li> monitoring </li>
            </ul>
          </div>

          <div className="row">
            <h3>FEATURES</h3>
            <ul>
              <li> Insta ite </li>
              <li> Point-of-Sale </li>
              <li> Buy Now button </li>
              <li> Digital products </li>
              <li> Subscriptions </li>
              <li> Store </li>
              <li> management </li>
              <li> Security </li>
              <li> Payment </li>
              <li> gateways </li>
              <li> Store </li>
              <li> management </li>
              <li> app </li>
              <li> Mobile shopping </li>
              <li> app </li>
              <li> Shipping labels </li>
              <li> Automated taxes </li>
              <li> Customization </li>
            </ul>
          </div>

          <div className="row">
            <h3> RESOURCES</h3>
            <ul>
              <li> Help center </li>
              <li> Ecommerce </li>
              <li> Academy </li>
              <li> Blog </li>
              <li> Podcasts </li>
              <li> Guides </li>
              <li> Ecommerce stats </li>
              <li> Ecom glossary </li>
              <li> How to sell online </li>
              <li> Create an online </li>
              <li> store </li>
              <li> Products to sell </li>
            </ul>
          </div>

          <div className="row">
            <h3>LATEST BLOG</h3>
            <ul>
              <li> How to Sell Digital </li>
              <li> Downloads on a Website Hassle-Free </li>
              <li>
                {" "}
                Crafting Success: High-Demand Artisan Products to Sell Online{" "}
              </li>
            </ul>
          </div>
        </div>

        <div className="center">
          <div className="right">
            <div className="group">
              <input type="text" placeholder="Search" />{" "}
              <i className="fa-solid fa-magnifying-glass"></i>{" "}
            </div>
          </div>
          <div className="left">
            <ul className="icons">
              <i class="fa-brands fa-youtube"></i>
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-pinterest"></i>
              <i class="fa-solid fa-microphone"></i>
            </ul>
            <div className="coverImg">
              <img src="./black-app-store.svg" alt="" />
              <img src="./black-google.svg" alt="" />
            </div>
          </div>
        </div>

        <div className="bottom">
          <img src="./Screenshot 2023-10-10 202826.png" alt="" />
          <ul>
            <li>DPA</li>
            <li>Terms of Service</li>
            <li>Copyright Policy</li>
          </ul>
          <div className="Copyright">© 2023 Ecwid by Lightspeed</div>
        </div>


        </div>
      </div>


    </div>
  );
}

export default App;
