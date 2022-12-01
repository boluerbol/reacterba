import React from 'react'
import logo from './img/logo.png'

export default function Header() {
  return (
    <section class="top-nav">
    <div class="log">
    <img src={logo} alt="Logo" />
    </div>
    <input id="menu-toggle" type="checkbox" />
    <label class='menu-button-container' for="menu-toggle">
    <div class='menu-button'></div>
  </label>
    <ul class="menu">
      <li>Features</li>
      <li>Pricing</li>
      <li>Testimonials</li>
      <li>Instructions</li>
    </ul>
    <button class="curex"> <div class="G">Get template</div> </button>
  </section>

    
  )
}


// export default function Header(){
//     return(
//         <div>
//             Header
//         </div>
//     )
// }