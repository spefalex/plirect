import React from 'react';

import Contact from './Contact';
import Content from './ContentBlog';
import Button from './Button';
import Offre from './Offrons';
import Actualite from './Actualite';

export default class ContentApropos extends React.Component{
    render(){
        return(
            <div id="apropos">
                <div className="col-sm contOffr">
                    <div className="row  apropos">
                            <Contact/>
                    </div>
                        <Offre id="offre" cntTitle="NOUS VOUS OFFRONS"/>
                </div>
                <div className="col-lg-7">
                <h1 className="titre">Prépa Pour Tous</h1>
                <h4 className="titre">Une prépa accessible partout, pour tous</h4>
                <p>
                    Nous avons été, nous aussi, des étudiants en quête de réussite.<br></br>
                    Lorsque nous avons commencé nos études de médecine, nous ne savions pas comment nous y prendre ni vers qui se tourner pour nous aider à réviser... <br></br>
                    <ul className="marginlist">
                        <li>Déboussolé par la multitude d'offres d'accompagnements et de prépas éxistantes!</li>
                        <li>Découragé par les emplois du temps proposés et le temps perdu pour se rendre aux cours!</li>
                        <li>Efarrés par les tarifs prohibitifs</li>
                    </ul>
                    Nous avons eu l'idée de créer une alternative pour travailler de façon méthodique et ciblée, peu importe le lieu, l'heure et la durée, tout en maitrisant son budget. <br></br>
                    Le coût ne devrait pas être un frein pour la réussite!
                </p>
                <h4 className="titre">"Prépa Pour Tous, pour gagner du temps et réviser efficacement sans se ruiner!"</h4>

                </div>
                <div className="col">
                <Actualite/>
                <Button typeButton="submit" className="glyphicon glyphicon-arrow-right" btncontent="Toutes nos actualités"/>
                </div>
            </div>
        );
    }
}