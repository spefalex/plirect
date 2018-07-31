import React from 'react';

import Glyphicon from './SUBCOMPONENTS/Glyphicon';


export default class extends React.Component{
  render(){
    return (
      <div class="jumbotron">
        <div className="row">
        <div className="col-sm">
       <h1>PREPA POUR</h1><h1>TOUS</h1>
       </div>
       <div className="col">
       <nav className="navbar">
       <div class="row">
           <input type="text" id="search" placeholder="Votre recherche ici ..."/>
           <button>
           <span><i class="glyphicon glyphicon-search"></i></span>
           </button>
     	</div>
       <div class="collapse navbar-collapse" id="navbarNav">
         <ul class="navbar-nav">
           <li class="nav-item active">
             <a class="nav-link" href="#">A PROPOS <span class="sr-only">(current)</span></a>
           </li>
         </ul>
         <ul class="navbar-nav">
           <li class="nav-item active">
             <a class="nav-link" href="#">PREPA ET APPUI<span class="sr-only">(current)</span></a>
           </li>
         </ul>
         <ul class="navbar-nav">
           <li class="nav-item active">
             <a class="nav-link" href="#">METHODE <span class="sr-only">(current)</span></a>
           </li>
         </ul>
         <ul class="navbar-nav">
           <li class="nav-item active">
             <a class="nav-link" href="#">NOS PACKS <span class="sr-only">(current)</span></a>
           </li>
         </ul>
         <ul class="navbar-nav">
           <li class="nav-item active">
             <a class="nav-link" href="#">ACTUALITES <span class="sr-only">(current)</span></a>
           </li>
         </ul>
         <ul class="navbar-nav">
           <li class="nav-item active">
             <a class="nav-link" href="#">CONTACT <span class="sr-only">(current)</span></a>
           </li>
         </ul>
       </div>
       </nav>
       </div>
       <div className="col">
            <Glyphicon className="glyphicon glyphicon-user" link="#" linkname="Espace parent"/>
            <Glyphicon className="glyphicon glyphicon-user" link="#" linkname="Espace parent"/>
            <Glyphicon className="glyphicon glyphicon-user" link="#" linkname="S'inscrire"/>
       </div>
       </div>
     </div>
    );
  }
}
