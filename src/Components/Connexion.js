import React from 'react';


export default class Connexion extends React.Component {

goAcceuil = event => {
 event.preventDefault();
//alert(this.pseudoInput.value)
const pseudo = this.pseudoInput.value;
const password = this.passwordInput.value;
 this.props.router.push('/acceuil/');

  this.props.router.push({
          pathname: '/acceuil',
       // query: {pseudo:pseudo}
        })

}

render() {

return (
/*
<div className="connexionBox" onSubmit={e=> this.goAcceuil(e)}>
<form className="connexion">
<input type ="text" placeholder ="Pseudo" required ref={input =>{this.pseudoInput= input}}/>
<input type ="text" placeholder ="Password" required ref={input =>{this.passwordInput= input}}/>
<button type ="submit"> Se connecter </button>
</form>
</div>
*/  


<div className="container">
<div className="row">
<div className="panel panel-default col-sm-6 col-md-4 col-md-offset-4">
  <div className="panel-body">
    <form  noValidate>
      <div className="form-group">
        <label className="label-control">Email</label>
        <input
          className="form-control"
         />
      </div>
      <div className="form-group">
        <label className="label-control">Password</label>
        <input
          type="password"
          className="form-control"
         />
      </div>

      <button type="submit" className="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off">
        Se connecter
      </button>
      <button type="submit" className="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off">
        S'inscrire      
      </button>
    </form>
  </div>
</div>
</div>
</div>

	)

	}

}

