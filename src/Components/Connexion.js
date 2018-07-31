import React from 'react';


export default class Connexion extends React.Component {

goAcceuil = event => {
event.preventDefault();
//alert(this.pseudoInput.value)
//const pseudo = this.pseudoInput.value;
//const password = this.passwordInput.value;
this.props.router.push('/acceuil/');
this.props.router.push({
          pathname: '/acceuil',
       // query: {pseudo:pseudo}
        })

}

render() {

return (
<div className="container">
<div className="row">
<div className="panel panel-default col-sm-6 col-md-4 col-md-offset-4">
  <div className="panel-body">
    <form  noValidate>
    <h5>Connectez vous pour accéder à votre contenu</h5>
      <div className="form-group  has-feedback">
        <input placeholder="Email"
          className="form-control"
         />
         <span><i class="glyphicon glyphicon-envelope form-control-feedback"></i></span>
      </div>
      <div className="form-group has-feedback">
        <input placeholder="Mot de passe"
          type="password"
          className="form-control"
         />
         <span class="glyphicon glyphicon-lock form-control-feedback"></span>
      </div>
      <div class="row row-action">
      <div className="col-sm">
          <div class="checkbox  bolo">
                <input type="checkbox" class="form-check-input" id="souv" value=""/>
                <label id="labcheck" for="souv">
                Se souvenir de moi
                </label>
            </div>
      <a href="#">Mot de passe oublié?</a>
      </div>
      <div className="col-sm">
      <div class="row">
      <button type="submit" id="log" className="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off"  onClick={e=> this.goAcceuil(e)}>
        Se connecter
      </button>
      </div>
      <div class="row">
      <button type="submit" id="log" className="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off">
        S inscrire
      </button>
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
