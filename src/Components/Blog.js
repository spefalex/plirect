import React from 'react';

import Recherche from './SUBCOMPONENTS/Recherche';
import Paragraph from './SUBCOMPONENTS/Paragraph';
import ContentBlog from './SUBCOMPONENTS/ContentBlog';
import Footer from './SUBCOMPONENTS/Footer';
import Header from './SUBCOMPONENTS/Header';
import Contact from './SUBCOMPONENTS/Contact';

export default class Blog extends React.Component{
  render(){
    return (
      <div>
      <Header>
      <div className="row bottomheader">
                                <div className="col-auto">
                                <h1>BLOG</h1>
                                </div>
                                <div className="col headerMiddleBottom">
                    </div>
                    <div className="col-6" id="headerRight">
                      <Contact/>
                    </div>
                </div>
      </Header>
     <div className="row blogMargin" id="ctnblog">
            <div className="row">
                <div id="actu" className="col-lg">
                  <h1>Actualité</h1>
                  <Paragraph classP="cntparaph" paraphCtn="Using empty <p> elements to increase the space between paragraphs of text is problematic for people who navigate with the aid of screen reading technology.  Screen readers may announce the presence of the element, but not any content contained within it. This can be a confusing and frustrating experience for the person using the screen reader."/>
                  <Paragraph classP="cntparaph" paraphCtn="Using empty <p> elements to increase the space between paragraphs of text is problematic for people who navigate with the aid of screen reading technology.  Screen readers may announce the presence of the element, but not any content contained within it. This can be a confusing and frustrating experience for the person using the screen reader."/>
                </div>
                <div className="col-sm-2">
                    <Recherche placeholder="Rechercher un article"/>
                    <ContentBlog cntID="categorie" cntTitle="CATEGORIE"/>
                    <ContentBlog cntID="motCle" cntTitle="MOTS CLES"/>
                </div>
            </div>
            <div className="row contactBody">
              <div className="col-sm left"></div>
              <div className="col-auto">
            <Contact/>
              </div>
              <div className="col-lg right"></div>
            </div>
            <div id="line"></div>
    </div>
    
    <Footer/>
    </div>
    );
  }
}