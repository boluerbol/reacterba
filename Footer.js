import facebook from './img/facebook.png'
import i from './img/i.png'
import insta from './img/insta.png'
import bom from './img/bom.png'
import tvitter from './img/tvitter.png'
import React from 'react'

export default function Footer() {
  return (
    <div>
        <footer>
        
        <div class="a2">
            <img class="i" src={bom} alt=" bom"/>
            <div class="aa">

            <div class="c"><img src={tvitter} alt="tvitter"/></div>
            <div class="c"><img src={insta} alt="insta"/></div>
            <div class="c"><img src={facebook} alt="facebook"/></div>

            </div>
        </div>
        
    </footer>
    <div class="a3"><span class="color"> Powered  ,</span> by Webflow<span class="color">.All rigths reserved by Heppy Apps.Inc </span>, Licensing</div>

    </div>
    
  )
}
