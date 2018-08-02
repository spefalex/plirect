
// Ce fichier configure simplement le magasin pour le rechargement à chaud.
// Ce fichier passe-partout est susceptible d'être le même pour chaque projet utilisant Redux.
// Avec Redux, les magasins actuels sont dans / reducers.
import {createStore, compose, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers';

export default function configureStore(initialState) {
  const middlewares = [
    
// Ajouter un autre middleware sur cette ligne ...
// middleware thunk peut également accepter un argument supplémentaire à passer à chaque action de thunk
// https://github.com/gaearon/redux-thunk#injecting-a-custom-argument
    thunkMiddleware,
  ];

  const store = createStore(rootReducer, initialState, compose(
    applyMiddleware(...middlewares),
    window.devToolsExtension ? window.devToolsExtension() : f => f // ajouter le support pour les outils de développement Redux
    )
  );

  if (module.hot) {
    // Activer le remplacement du module chaud Webpack pour les réducteurs
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default; // eslint-disable-line global-nécessite
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
