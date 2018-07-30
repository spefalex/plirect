import React from 'react';

export default class Inscription extends React.Component{

render(){
  return (
  <div className="container inscription">
      <div className="row">
      <div className="panel panel-default">
        <div className="panel-body">
          <form  noValidate>
            <div className="form-group  has-feedback">
              <input placeholder="Email"
                className="form-control"
               />
               <span><i class="glyphicon glyphicon-envelope form-control-feedback"></i></span>
            </div>
            <div className="form-group  has-feedback">
              <input placeholder="Nom"
                className="form-control"
               />
               <span><i class="glyphicon glyphicon-user form-control-feedback"></i></span>
            </div>
            <div className="form-group  has-feedback">
              <input placeholder="Prénom"
                className="form-control"
               />
               <span><i class="glyphicon glyphicon-user form-control-feedback"></i></span>
            </div>
            <div className="form-group  has-feedback">
              <input placeholder="Tél"
                className="form-control"
               />
               <span><i class="glyphicon glyphicon-earphone form-control-feedback"></i></span>
            </div>
            <div className="form-group has-feedback">
              <input placeholder="Mot de passe"
                type="password"
                className="form-control"
               />
               <span class="glyphicon glyphicon-lock form-control-feedback"></span>
            </div>
            <div className="form-group has-feedback">
              <input placeholder="Confirmation de mot de passe"
                type="password"
                className="form-control"
               />
               <span class="glyphicon glyphicon-lock form-control-feedback"></span>
            </div>
            <div className="form-group  has-feedback">
              <input placeholder="Date de naissance"
                className="form-control"
               />
               <span><i class="glyphicon glyphicon-envelope form-control-feedback"></i></span>
            </div>
            <div className="form-group  has-feedback">
              <input placeholder="Adresse"
                className="form-control"
               />
               <span><i class="glyphicon glyphicon-home form-control-feedback"></i></span>
            </div>
            <div className="form-group  has-feedback">
              <input placeholder="Ville"
                className="form-control"
               />
               <span><i class="glyphicon glyphicon-map-marker form-control-feedback"></i></span>
            </div>
            <div className="form-group  has-feedback">
              <input placeholder="Code postal"
                className="form-control"
               />
               <span><i class="glyphicon glyphicon-envelope form-control-feedback"></i></span>
            </div>
            <div className="form-group">
            <select class="form-control">
              <option value="" selected disabled>Cursus scolaire</option>
                 <option value="un">Un</option>
                 <option value="deux">Deux</option>
                 <option value="trois">Trois</option>
            </select>
            </div>
            <div className="form-group">
            <select class="form-control">
              <option value="" selected disabled>Comment avez vous connu Prépa pour tous?</option>
                 <option value="un">Un</option>
                 <option value="deux">Deux</option>
                 <option value="trois">Trois</option>
            </select>
            </div>
            <div className="form-group">
            <div class="checkbox  bolo">
                  <input type="checkbox" class="form-check-input" id="souv" value=""/>
                  <label id="labcheck" for="souv">
                  Primant
                  </label>
              </div>
              <div class="checkbox  bolo">
                    <input type="checkbox" class="form-check-input" id="souv" value=""/>
                    <label id="labcheck" for="souv">
                    Doublant
                    </label>
                </div>
              </div>
              <div className="form-group  has-feedback">
                <input placeholder="Code parrain"
                  className="form-control"
                 />
                 <span><i class="glyphicon glyphicon-envelope form-control-feedback"></i></span>
              </div>
              <div class="row">
              <button type="submit" className="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off">
                Valider code parrain
              </button>
              </div>
              <div className="row">
              <div class="accordion" id="accordionEx" role="tablist" aria-multiselectable="true">
                <div class="card">
                  <div class="dropdown pull-left">
                      <a class="collapsed" data-toggle="collapse" data-parent="#accordionEx" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <h5>
                            L'inscription d'un représentant légal n'est nécessaire que si vous avez moins de 18 ans
                            <i class="fa fa-angle-down rotate-icon"></i>
                        </h5>
                      </a>
                  </div>
              <div id="collapseTwo" class="collapse" role="tabpanel" aria-labelledby="headingTwo" data-parent="#accordionEx">
                  <div class="card-body">
                  <div className="form-group  has-feedback">
                    <input placeholder="Email du représentant légal"
                      className="form-control"
                     />
                     <span><i class="glyphicon glyphicon-envelope form-control-feedback"></i></span>
                  </div>
                  <div className="form-group  has-feedback">
                    <input placeholder="Nom du représentant légal"
                      className="form-control"
                     />
                     <span><i class="glyphicon glyphicon-user form-control-feedback"></i></span>
                  </div>
                  <div className="form-group  has-feedback">
                    <input placeholder="Prénom du représentant légal"
                      className="form-control"
                     />
                     <span><i class="glyphicon glyphicon-user form-control-feedback"></i></span>
                  </div>
                  <div className="form-group  has-feedback">
                    <input placeholder="Tél du représentant légal"
                      className="form-control"
                     />
                     <span><i class="glyphicon glyphicon-earphone form-control-feedback"></i></span>
                  </div>
                      </div>
                      <h6>Fonction</h6>
                      <div className="row">
                      <div class="checkbox  bolo">
                            <input type="checkbox" class="form-check-input" id="souv" value=""/>
                            <label id="labcheck" for="souv">
                            Père
                            </label>
                        </div>
                        <div class="checkbox  bolo">
                              <input type="checkbox" class="form-check-input" id="souv" value=""/>
                              <label id="labcheck" for="souv">
                              Mère
                              </label>
                          </div>
                          <div class="checkbox  bolo">
                                <input type="checkbox" class="form-check-input" id="souv" value=""/>
                                <label id="labcheck" for="souv">
                                Tuteur
                                </label>
                            </div>
                        </div>
                    </div>
                  </div>
                  <div className="form-group">
                  <div class="checkbox  bolo">
                        <input type="checkbox" class="form-check-input" id="souv" value=""/>
                        <label id="labcheck" for="souv">
                        J'accepte les <a href="#">conditions générales d'utilisation</a>
                        </label>
                    </div>
                    <div class="checkbox  bolo">
                          <input type="checkbox" class="form-check-input" id="souv" value=""/>
                          <label id="labcheck" for="souv">
                          J'accepte les <a href="#">conditions générales de ventes</a>
                          </label>
                      </div>
                      <div class="checkbox  bolo">
                            <input type="checkbox" class="form-check-input" id="souv" value=""/>
                            <label id="labcheck" for="souv">
                            J'accepte que mes informations soient transmises aux partenaires
                            </label>
                        </div>
                    </div>
                </div>
            </div>
          </form>
          </div>
          </div>
      </div>
  </div>
)
}
}
