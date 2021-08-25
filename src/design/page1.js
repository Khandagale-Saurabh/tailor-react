import React from 'react'
import ReactDOM from 'react-dom'
import one from './images/1.png'
import two from './images/2.png'
import three from './images/3.png'
import four from './images/4_1.png'
import five from './images/5.png'
import All_image from './images/All_image'
let page1=()=>
{
   return(
      <>
      <h1>Hello</h1>
      <div className="main_container">
                <div class="img-container">
                    <img src={All_image.load} id="one"/> 
                    {/* <img src={two} id="two"/> 

                    <img src={three} id="three"/> 
                    <img src={four} id="four"/> 

                    <img src={five} id="five"/> 
                 */}
                    {/* <img src="plate.png" id="seven"/>  */}
                </div>
    </div>
      </>
   )
}
export default page1;