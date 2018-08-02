import React from 'react';

import Button from './SUBCOMPONENTS/Button';
import Input from './SUBCOMPONENTS/Input';
import Select from './SUBCOMPONENTS/Select';
import Checkbox from './SUBCOMPONENTS/Checkbox';
import Accordion from './SUBCOMPONENTS/Accordion';

export default class Inscription extends React.Component{

render(){
  return (
  <div className="container inscription">
      <div className="row">
      <div className="panel panel-default">
        <div className="panel-body">
          <form  noValidate>
            <h5>Créez votre compte</h5>
            <Input typeForm="text"  placeholder="Email" iconClass="envelope"/>
            <Input typeForm="text"  placeholder="Nom" iconClass="user"/>
            <Input typeForm="text"  placeholder="Prénom" iconClass="user"/>
            <Input typeForm="text"  placeholder="Tél"  iconClass="earphone"/>
            <Input typeForm="password"  placeholder="Password" iconClass="lock"/>
            <Input typeForm="password"  placeholder="Confirmation mot de passe" iconClass="lock"/>
            <Input typeForm="text"  placeholder="Date de naissance" />
            <Input typeForm="text" placeholder="Adresse" iconClass="home"/>
            <Input typeForm="text" placeholder="Ville" iconClass="map-marker"/>
            <Input typeForm="text" placeholder="Code postal" iconClass="envelope"/>
            <Select optionTitle="Cursus scolaire"/>
            <Select optionTitle="Comment avez vous connu Prépa pour tous?"/>
            <div className="row">
                <div className="col-sm">
                  <Checkbox checkID="primant">Primant</Checkbox>
                </div>
                <div className="col-sm">
                    <Checkbox checkID="doublant">Doublant </Checkbox>
                </div>
            </div>

            <Input typeForm="text"  placeholder="Code parrain"/>
              <div className="form-group">
              <Button idButton="code" btncontent="Valider code parrain" typeButton="submit" className="primary" />
              </div>
              <div className="form-group">
              <div class="accordion" id="accordionEx" role="tablist" aria-multiselectable="true">
                      <Accordion/>
              </div>
                  <div className="form-group">
                  <div className="row">
                        <div className="col">
                        <Checkbox checkID="accepte1">
                        J'accepte les <br></br>
                         <a href="#">conditions générales d'utilisation</a>
                        </Checkbox>
                        <Checkbox checkID="accepte2">
                          J'accepte les
                          <br></br>
                          <a href="#">conditions générales de ventes</a>
                        </Checkbox>
                        <Checkbox checkID="accepte3">J'accepte que mes informations <br></br> soient transmises aux partenaires</Checkbox>
                          </div>
                    <div className="col">
                              <Button idButton="creer" btncontent="Créer Compte" typeButton="submit" className="primary"/>

                    </div>
                    </div>
                    </div>
            </div>
          </form>
          <div id="top">
          <a href="#"> J'ai déjà un compte</a>
          </div>
          </div>
          </div>
      </div>
  </div>
)
}
}
