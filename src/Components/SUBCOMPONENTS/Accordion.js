import React from 'react';
import Checkbox from './Checkbox';
import Input from './Input';

export default class Accordio extends React.Component{
      render(){
        return (
          <div class="card">
            <div class="dropdown pull-left">
                <a id="accord" class="collapsed" data-toggle="collapse" data-parent="#accordionEx" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  <h5>
                  L'inscription d'un représentant légal n est nécessaire que si vous avez moins de 18 ans
                       &nbsp; <i id="rot" class="fa fa-angle-down rotate-icon"></i>
                  </h5>
                </a>
            </div>
                    <div id="collapseTwo" class="collapse" role="tabpanel" aria-labelledby="headingTwo" data-parent="#accordionEx">
                        <div class="card-body">
                              <Input typeForm="text"  placeholder="Email du représentant légal" iconClass="envelope"/>
                              <Input typeForm="text"  placeholder="Nom du représentant légal" iconClass="user"/>
                              <Input typeForm="text" placeholder="Prénom du représentant légal" iconClass="user"/>
                              <Input typeForm="text" placeholder="Tél du représentant légal" incoClass="earphone"/>
                        </div>
                                <h6>Fonction</h6>
                                <div className="row">
                                <div className="col-sm">
                                    <Checkbox checkID="pere" checkLabel="Père"/>
                                </div>
                                <div className="col-sm">
                                    <Checkbox checkID="mere" checkLabel="Mère"/>
                                </div>
                                <div className="col-sm">
                                    <Checkbox checkID="tuteur" checkLabel="Tuteur"/>
                                </div>
                               </div>
                          </div>
            </div>
        );
      }
}
