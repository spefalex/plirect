import React from 'react';

export default class Cours extends React.Component{

render(){
  return (
    <section className="indent-1">
    
    <section id="section_horizontal">
        <h4 className="text-center" id="cours">COURS D'APPUI PARTICULIER</h4>
        <br>
        <p><span className="fas fa-user-circle" id="user" aria-hidden="true"></span></p>
        <h4 className="text-center" id="nom">Adrien LECLERC</h4>
        <h5 className="text-center" id="h5_text">Terminale S</h5>
        </br>
          <div className="menu_vertical">
            <ul className="nav flex-column">
          <li className="nav-item">
              <a className="nav-link text-left" id="menu_left" href="#">
              <span className="fas fa-th-list" id="icon_menus"></span>
              MON PROGRAMME
              </a>
          </li>
          <li className="nav-item">
              <a className="nav-link text-left" id="menu_left" href="#">
              <span className="fas fa-chart-bar" id="icon_menus"></span>
              PROGRESSION
              </a>
          </li>
          <li className="nav-item">
              <a className="nav-link text-left" id="menu_left" href="#">
              <span className="fas fa-newspaper" id="icon_menus"></span>
              BULLETINS
              </a>
          </li>
          </ul>
          </div>

          <div className="footer">
            <p className="text-right">PRÉPA POUR</p>
            <p className="text-right">TOUS</p>
          </div>
    </section>

    <section>
        <section id="section_vertical">
          <nav className="nav navbar navbar-default" id="icon_menu">
            <a className="nav-link" id="liens" href="#"><span className="fas fa-th-list" id="icon_menu"></span></a>
            <a className="nav-link" id="liens" href="#"><span className="fas fa-chart-bar" id="icon_menu"></span></a>
            <a className="nav-link" id="liens" href="#"><span className="fas fa-newspaper" id="icon_menu"></span></a>
            <a className="nav-link" id="liens" href="#"><span className="fas fa-bell" id="icon_menu"></span></a>
            <a className="nav-link" id="liens" href="#"><span className="fas fa-calendar-alt" id="icon_menu"></span></a>
            <a className="nav-link" id="liens" href="#"><span className="fas fa-envelope" id="icon_menu"></span></a>

            <ul className="nav navbar-nav navbar-right" style="flex-direction: row;">
            <li className="nav-item">
                <a className="nav-link" href="#"><span className="fas fa-cog" id="icon_menu"></span></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#"><span className="fas fa-sign-in-alt" id="icon_menu"></span></a>
            </li>
          </ul>
          </nav>
        </section>
        <section>
          <h1>Asio anreo contenu reo fa ts atratrak koa f be asa iah ioh</h1>
        </section>
    </section>
</section> 
)
}
}
