import React from 'react';

import Glyphicon from './SUBCOMPONENTS/Glyphicon';
import Recherche from './SUBCOMPONENTS/Recherche';
import LinkMenu from './SUBCOMPONENTS/LinkMenu';
import Button from './SUBCOMPONENTS/Button';
import Paragraph from './SUBCOMPONENTS/Paragraph';
import ContentBlog from './SUBCOMPONENTS/ContentBlog';
import Footer from './SUBCOMPONENTS/Footer';
import Header from './SUBCOMPONENTS/Header';

export default class extends React.Component{
  render(){
    return (
      <div>
      <Header/>
     <div className="row" id="ctnblog">
            <div className="col-lg">
              <h1>Actualité</h1>
              <Paragraph classP="cntparaph" paraphCtn="Using empty <p> elements to increase the space between paragraphs of text is problematic for people who navigate with the aid of screen reading technology.  Screen readers may announce the presence of the element, but not any content contained within it. This can be a confusing and frustrating experience for the person using the screen reader."/>
              <Paragraph classP="cntparaph" paraphCtn="Using empty <p> elements to increase the space between paragraphs of text is problematic for people who navigate with the aid of screen reading technology.  Screen readers may announce the presence of the element, but not any content contained within it. This can be a confusing and frustrating experience for the person using the screen reader."/>
            </div>
            <div className="col-sm-2">
                <Recherche srplaceholder="Rechercher un article"/>
                <ContentBlog cntID="categorie" cntTitle="CATEGORIE"/>
                <ContentBlog cntID="motCle" cntTitle="MOTS CLES"/>
            <div className="row">
            </div>
            </div>
    </div>
    <Footer/>
    </div>
    );
  }
}
