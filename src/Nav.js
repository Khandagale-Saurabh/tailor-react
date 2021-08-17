import React, { Component } from 'react'
import {NavLink,Link} from 'react-router-dom'
let Nav=()=>
{
   return(
     <>
     <nav>
      <ul> 
       <li><NavLink to ="/" activeStyle={{fontWeight:"bold"}}>HOME</NavLink></li>
       
       <li><NavLink to ="/ChangeShirt">ChangeShirt</NavLink></li>
       <li><NavLink to ="/Erro"></NavLink></li>
     
      </ul>
      </nav>
     </>
   );
        
}
export default Nav