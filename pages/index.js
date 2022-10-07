

import Script from "next/script";
import {useEffect} from "react";
import {$,jQuery} from 'jquery';

export default function Home() {
  useEffect(()=>{
    window.$ = $;
    window.jQuery = jQuery;

    const fn1 =()=>{
      document.querySelector('.overley').classList.toggle('open')
      document.querySelector('.sidebar').classList.toggle('open')
    }

    const fn2 =()=>{
      document.querySelector('.sidebar').classList.remove('open')
      document.querySelector('.overley').classList.remove('open')
    }
    document.querySelector('#menu-icon').addEventListener('click',fn1)
    document.querySelector('.overley').addEventListener('click',fn2)
   return ()=>{
     document.querySelector('#menu-icon').removeEventListener('click',fn1)
     document.querySelector('.overley').removeEventListener('click',fn2)
   }

  },[])
  return (
   <div>
     <header>
       <div className="navbar header-navigation">
         <div className="brand-logo">
           <div className="menu-bar" id="menu-icon">
             <span className="bar"></span>
             <span className="bar bar1"></span>
             <span className="bar bar2"></span>
           </div>
           <a href="#"><img src="img/logo.jpeg"/></a>
         </div>
         <div className="right-navigation">
           <ul>
             <li><a href="#timing">Book Your Cab</a></li>
             <li><a href="#price">Price</a></li>
             <li><a href="#about-us">About Us</a></li>
             <li><a href="#service">Services</a></li>
           </ul>
         </div>
       </div>
     </header>
     <div className="overley"></div>
     <div className="sidebar">
       <ul>
         <li><a href="#timing">Book Your Cab</a></li>
         <li><a href="#price">Price</a></li>
         <li><a href="#about-us">About Us</a></li>
         <li><a href="#service">Services</a></li>
       </ul>
     </div>
     <div className="banner-container">
       <div className="banner-wrappr">
         <div className="banner-caption">
           <h1>Book Your Cab <span> Instantly </span></h1>
         </div>
         <div className="banner-img">
           <img src="img/banner-bg.jpeg"/>
         </div>
       </div>
     </div>
     <div className="about-us-section" id="about-us">
       <div className="container">
         <div className="about-us-wrappr">
           <h2 className="heading">About Longford taxi</h2>
           <p>
             Fair deal taxi service for people travelling. We only accept card payments for all runs over 15 euros. Fix
             fare on long runs, special fixed fare for airport runs. Register your card details and get taxi service in
             night also. No animal or pets allowed in taxi. No smoking, no drinking. No drugs
           </p>
         </div>
       </div>
     </div>
     <div className="service-section" id="price">
       <div className="container">
         <div className="service-wrappr">
           <h2 className="heading">Longford taxi Services</h2>
           <div className="service-box">
             <div className="service-item">
               <div className="service-title">Longford to Dublin City centre</div>
               <div className="service-price"> €100</div>
               <div className="people">4 people</div>
             </div>
             <div className="service-item">
               <div className="service-title">Longford to mullingar</div>
               <div className="service-price"> €50</div>
               <div className="people">4 people</div>
             </div>
             <div className="service-item">
               <div className="service-title">Clondra to Longford town</div>
               <div className="service-price"> €15</div>
             </div>
             <div className="service-item">
               <div className="service-title">Termonbarry to Longford town</div>
               <div className="service-price"> €20</div>
             </div>
             <div className="service-item">
               <div className="service-title">Clondra to Roscommon</div>
               <div className="service-price"> €50</div>
             </div>
             <div className="service-item">
               <div className="service-title">Longford to Athlone</div>
               <div className="service-price"> €80</div>
             </div>
           </div>
         </div>
       </div>
     </div>
     <div className="parallax-section" id="service">
       <div className="container position-relative">
         <div className="parallax-wrappr">
           <div className="parallax-txt">
             Day tour can be arranged if requested or hire by day basis. Special rates to Dublin airport and Shannon
             Airport.
           </div>
           <button type="button" className="btn know-more">Know More</button>
         </div>
       </div>
     </div>
     <div className="work-time-section" id="timing">
       <div className="container">
         <div className="work-time-wrappr">
           <h2 className="heading">Work Timing</h2>
           <div className="timing-box">
             <ul>
               <li>
                 Mon 5.00 AM to 16.00 PM
               </li>
               <li>
                 Tues 5.00 AM to 16.00 PM
               </li>
               <li>
                 Wed 5.00 AM to 16.00 PM
               </li>
               <li>
                 Thrus 5.00 AM to 16.00 PM
               </li>
               <li>
                 Friday 5.00 AM to 16.00 PM
               </li>
               <li>
                 Sat 5.00 AM to 16.00 PM
               </li>
               <li>
                 Sun 5.00 AM to 16.00PM
               </li>
             </ul>
           </div>
         </div>
       </div>
     </div>
     <footer>
       <div className="container">
         <div className="footer-wrappr">
           <div className="footer-logo">
             <img src="img/logo.jpeg"/>
           </div>
           <div className="footert-link">
             <ul>
               <li><a href="#timing">Book Your Cab</a></li>
               <li><a href="#price">Price</a></li>
               <li><a href="#about-us">About Us</a></li>
               <li><a href="#service">Services</a></li>
             </ul>
           </div>
           <div className="copy-right">
             @copyright 2020. All rights reserved
           </div>
         </div>
       </div>
     </footer>
     <Script type="text/javascript" src="js/jquery.slim.min.js"></Script>
     <Script type="text/javascript" src="js/bootstrap.min.js"></Script>
     <Script type="text/javascript" src="js/popper.min.js"></Script>
     <Script type="text/javascript" src="js/bootstrap.bundle.min.js"></Script>
   </div>
  )
}
